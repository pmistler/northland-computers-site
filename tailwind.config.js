/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#06172F',
        ink: '#0B1220',
        steel: '#263449',
        electric: '#18A0FB',
        cyan: '#51D6FF',
        signal: '#16E0A8',
        amber: '#FFB020',
      },
      boxShadow: {
        glow: '0 0 40px rgba(24,160,251,.25)',
        card: '0 24px 80px rgba(6,23,47,.12)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
