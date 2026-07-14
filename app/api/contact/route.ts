import { Resend } from "resend";


function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "General inquiry").trim();
    const message = String(body.message || "").trim();
    const company = String(body.company || "").trim(); // honeypot

    if (company) {
      return Response.json({ success: true });
    }

    if (!name || !email || !message) {
      return Response.json({ error: "Please complete name, email, and message." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return Response.json({ error: "Contact form is not configured. Please email website@norlc.com." }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "website@norlc.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Northland Computers <website@norlc.com>";

    const subject = `New Website Inquiry - ${service}`;

    const text = `New inquiry from the Northland Computers website:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service}

Message:
${message}
`;

    const html = `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2 style="margin: 0 0 16px; color: #06172F;">New Website Inquiry</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
          <tr><td style="padding: 8px 0; font-weight: bold;">Name:</td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone || "Not provided"}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td>${service}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;">
          <strong>Message:</strong>
          <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject,
      replyTo: email,
      text,
      html
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return Response.json({ error: "Unable to send your message. Please email website@norlc.com." }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);
    return Response.json({ error: "Unable to send your message. Please email website@norlc.com." }, { status: 500 });
  }
}
