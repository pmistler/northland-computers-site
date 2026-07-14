import {
  BrainCircuit, Building2, Cable, CheckCircle2, Cloud, Code2, Construction,
  Factory, FileCheck2, GraduationCap, HardDrive, HeartPulse, Landmark,
  LifeBuoy, LockKeyhole, Network, PawPrint, ServerCog, ShieldCheck,
  ShoppingBag, Stethoscope, Users, Wifi, Workflow, Wrench
} from "lucide-react";

export const company = {
  name: "Northland Computers",
  phone: "(617) 775-0934",
  email: "website@norlc.com",
  address: "Serving Central Massachusetts, MetroWest, Worcester County, and Greater Boston (by appointment).",
  domain: "norlc.com",
  founded: 2006
};

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/technology-leadership", label: "Leadership" },
  { href: "/why-northland", label: "Why Northland" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const solutions = [
  { slug:"managed-it-services", icon: ServerCog, title:"Managed IT Services", short:"Responsive support, documentation, monitoring, vendor ownership, and long-term technology planning.", lead:"Move beyond reactive support with an accountable technology partner that understands your environment and keeps it moving forward.", bullets:["Priority remote and onsite support","Asset, network, and account documentation","Vendor coordination and escalation","Lifecycle and budget planning","Emergency response and continuity"] },
  { slug:"cybersecurity", icon: ShieldCheck, title:"Cybersecurity", short:"Practical security controls, incident planning, insurance readiness, and ongoing risk reduction.", lead:"Security should be understandable, documented, and aligned with how your organization actually works.", bullets:["Incident response planning","Security policy development","MFA, identity, and access review","Firewall and endpoint security","Cyber insurance readiness"] },
  { slug:"infrastructure-projects", icon: Network, title:"Infrastructure & Projects", short:"Networks, wireless, servers, virtualization, access control, relocations, and complex rollouts.", lead:"Northland plans and executes high-impact technology projects with the discipline required to finish on time and minimize disruption.", bullets:["Network and wireless deployment","Server and virtualization projects","Office moves and multi-site migrations","Door access, cameras, and VoIP","Procurement and vendor coordination"] },
  { slug:"technology-consulting", icon: Users, title:"Technology Consulting", short:"Technology roadmaps, budgeting, vendor selection, process improvement, and fractional leadership.", lead:"Make better technology decisions with guidance grounded in real operational, public-sector, and enterprise experience.", bullets:["Technology assessments and roadmaps","Budget and lifecycle planning","Vendor and proposal review","Process automation","Fractional technology leadership"] },
  { slug:"ai-automation", icon: BrainCircuit, title:"AI & Automation", short:"Responsible AI adoption, policies, workflow automation, and practical business use cases.", lead:"Use AI to improve operations without exposing sensitive information or creating unmanaged risk.", bullets:["AI readiness assessments","Acceptable-use policies","Microsoft Copilot and ChatGPT guidance","Workflow and licensing automation","Staff training and governance"] },
  { slug:"microsoft-365-google-workspace", icon: Cloud, title:"Cloud & Productivity", short:"Microsoft 365, Google Workspace, identity, email, file storage, migrations, and administration.", lead:"Keep cloud systems organized, secure, and easy for employees to use.", bullets:["Microsoft 365 administration","Google Workspace administration","Email and storage migrations","Account security and lifecycle","Licensing cleanup and automation"] },
  { slug:"network-wireless-firewall", icon: Wifi, title:"Networks, Wireless & Firewalls", short:"LAN, VLAN, Wi-Fi, VPN, switching, firewalls, DNS/DHCP, and connectivity troubleshooting.", lead:"Build a stable network foundation that supports users, devices, security, and growth.", bullets:["Network design and documentation","Enterprise wireless deployments","Firewall and VPN configuration","Switching, VLANs, DNS, and DHCP","ISP and cabling coordination"] },
  { slug:"servers-virtualization-backup", icon: HardDrive, title:"Servers, Virtualization & Backup", short:"Windows Server, VMware, Hyper-V, Veeam, Datto, recovery planning, and cloud transitions.", lead:"Protect critical systems and reduce downtime with infrastructure designed for recovery and long-term supportability.", bullets:["Windows Server support","VMware and Hyper-V","Backup and restore planning","Veeam and Datto environments","Cloud and hybrid migrations"] },
  { slug:"website-management", icon: Code2, title:"Website Management", short:"Website builds, migrations, hosting, DNS, maintenance, security, and ongoing ownership.", lead:"Your website is part of your technology environment and should be managed with the same care as your other systems.", bullets:["Modern website builds and redesigns","Hosting and DNS management","WordPress and static site support","Forms, backups, updates, and security","Vendor handoffs and emergency migrations"] },
  { slug:"emergency-it-support", icon: LifeBuoy, title:"Emergency IT Support", short:"Fast response for outages, security events, failed systems, and time-sensitive technology problems.", lead:"When business-critical technology fails, Northland takes ownership and drives the issue toward resolution.", bullets:["Network and internet outages","Email and identity incidents","Server and application failures","Security events","Vendor escalation and recovery"] }
];

export const industries = [
  {slug:"veterinary-hospitals",icon:PawPrint,title:"Veterinary Hospitals",short:"Deep experience with veterinary workflows, practice systems, diagnostics, networks, cloud, security, and websites.",details:["AviMark and vendor coordination","IDEXX and diagnostic integrations","Workstations, printers, and imaging workflows","Microsoft 365, backups, and cybersecurity","Website and communication systems"]},
  {slug:"schools-education",icon:GraduationCap,title:"Schools & Education",short:"Technology leadership, infrastructure, cybersecurity, devices, cloud administration, E-Rate, and district modernization.",details:["District infrastructure modernization","1:1 device deployments","Google Workspace and Microsoft environments","Wireless, switching, filtering, and VoIP","E-Rate, procurement, and strategic planning"]},
  {slug:"manufacturing",icon:Factory,title:"Manufacturing",short:"Reliable infrastructure and support for production environments, offices, facilities systems, and operational technology.",details:["Networks, servers, and virtualization","SCADA and facilities coordination","Wireless and multi-building connectivity","Backup and recovery planning","Vendor and application support"]},
  {slug:"municipal",icon:Landmark,title:"Municipal & Public Sector",short:"Practical, budget-aware technology planning for public organizations that require accountability and continuity.",details:["Infrastructure and lifecycle planning","Cybersecurity documentation","Procurement and vendor review","Cloud and identity administration","Operational continuity"]},
  {slug:"medical",icon:HeartPulse,title:"Medical & Healthcare",short:"Secure, dependable technology support for clinical and professional healthcare environments.",details:["Identity and access security","Networks and secure remote access","Business continuity and backup","Vendor coordination","Website and cloud management"]},
  {slug:"financial",icon:Building2,title:"Financial Services",short:"Structured technology management for firms that depend on secure access, documentation, and business continuity.",details:["Security and account controls","Cloud and email administration","Network and firewall management","Backup and continuity","Vendor and compliance coordination"]},
  {slug:"construction",icon:Construction,title:"Construction",short:"Mobile-friendly, field-ready technology for contractors, builders, and multi-location operations.",details:["Cloud files and collaboration","Mobile device and account management","Jobsite and office connectivity","Security cameras and access","Websites and business systems"]},
  {slug:"professional-services",icon:Users,title:"Professional Services",short:"Managed technology for law firms, consultants, accounting firms, and other knowledge-based organizations.",details:["Microsoft 365 and Google Workspace","Secure remote work","Network and endpoint support","Backup and cybersecurity","Technology planning"]},
  {slug:"retail",icon:ShoppingBag,title:"Retail & Multi-Location",short:"Consistent systems, connectivity, and support across storefronts, headquarters, and distributed teams.",details:["Site openings and relocations","Multi-location networks","Cloud and identity systems","Vendor and ISP coordination","Business continuity"]},
  {slug:"dental-practices",icon:Stethoscope,title:"Dental Practices",short:"Support for practice software, imaging, workstations, networks, security, and dependable daily operations.",details:["Eaglesoft and vendor support","Schick sensors and imaging workflows","Operatory and workstation support","Backup and secure access","Network and printer troubleshooting"]}
];

export const projects = [
 {slug:"district-infrastructure-modernization",metric:"4 months",title:"Complete District Infrastructure Modernization",summary:"Replaced an entire public school district technology infrastructure using E-Rate and available funding, completed without outside implementation vendors.",tags:["Education","Infrastructure","E-Rate"]},
 {slug:"wireless-weekend-migration",metric:"100 APs",title:"Wireless Migration in One Weekend",summary:"Completed a full wireless transition from Aruba to Extreme across a school environment over a single weekend to avoid operational disruption.",tags:["Wireless","Execution","Education"]},
 {slug:"multi-building-wireless",metric:"200 APs",title:"Four-Building Wireless Deployment",summary:"Designed and implemented an Aerohive wireless deployment spanning four buildings and approximately 200 access points.",tags:["Wireless","Infrastructure","Planning"]},
 {slug:"student-device-rollout",metric:"1,600+",title:"Large-Scale 1:1 Device Deployment",summary:"Planned and rolled out more than 1,600 student iPads, followed by district Chromebook programs and ongoing lifecycle management.",tags:["Devices","Education","Operations"]},
 {slug:"staff-laptop-modernization",metric:"300+",title:"Teacher Laptop Modernization",summary:"Deployed new laptops to more than 300 staff members while also coordinating student device replacement in a New York school district.",tags:["Devices","Migration","Education"]},
 {slug:"fifth-avenue-access-control",metric:"2 weeks",title:"Fifth Avenue Access Control Deployment",summary:"Delivered a complete two-floor access control installation on Fifth Avenue in two weeks after another proposal estimated three months.",tags:["Access Control","Commercial","Execution"]},
 {slug:"retail-multi-site-migration",metric:"8 locations",title:"Retail Network and Headquarters Migration",summary:"Migrated eight Walpole Outdoors storefronts and moved headquarters technology to a new location over a compressed period.",tags:["Retail","Multi-Site","Relocation"]},
 {slug:"google-license-automation",metric:"3,000+",title:"Google Workspace License Automation",summary:"Used GAM automation to audit and clean up more than 3,000 licenses in a single day, reducing manual work and improving control.",tags:["Automation","Google Workspace","Efficiency"]},
 {slug:"cloud-storage-migrations",metric:"2 districts",title:"Cloud Storage Modernization",summary:"Migrated two school districts from on-premises file storage to cloud-based collaboration and storage environments.",tags:["Cloud","Migration","Education"]}
];

export const clients=["Sara Lee","Superior Cake Products","Riverlin Animal Hospital","Boston Road Animal Clinic","Uxbridge Animal Hospital"];
export const standards=["Respond quickly and communicate clearly","Recommend what the client actually needs","Document systems, accounts, vendors, and decisions","Keep ownership with the client","Plan for long-term reliability","Finish difficult work without passing responsibility"];
export const tech=["Microsoft","Google Workspace","Cisco","Dell","HP","Lenovo","Ubiquiti","Meraki","Fortinet","Sophos","SonicWall","SentinelOne","VMware","Hyper-V","Veeam","Datto","Extreme Networks","Aruba","Aerohive","Avaya","PaperCut","AviMark","Eaglesoft","Schick","SCADA","Niagara","Portainer","Xcode","Android Studio"];
