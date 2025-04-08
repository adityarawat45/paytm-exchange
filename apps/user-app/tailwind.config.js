/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './apps/**/*.{js,ts,jsx,tsx}',   // Scan all files in the apps directory
    './packages/**/*.{js,ts,jsx,tsx}', // Scan files in the packages directory (for shared components)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

