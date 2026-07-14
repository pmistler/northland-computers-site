/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/managed-it-services", destination: "/services/managed-it-services", permanent: true },
      { source: "/microsoft-365-support", destination: "/services/microsoft-365-google-workspace-support", permanent: true },
      { source: "/google-workspace-support", destination: "/services/microsoft-365-google-workspace-support", permanent: true },
      { source: "/network-support", destination: "/services/network-wifi-firewall-support", permanent: true },
      { source: "/dental-it-support", destination: "/services/dental-it-support", permanent: true },
      { source: "/veterinary-it-support", destination: "/services/veterinary-it-support", permanent: true },
      { source: "/school-it-support", destination: "/services/school-it-support", permanent: true }
    ];
  }
};
export default nextConfig;
