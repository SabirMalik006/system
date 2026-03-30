/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from your screenshot
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        },
        green: {
          100: '#dcfce7',
          700: '#15803d',
        },
        red: {
          100: '#fee2e2',
          700: '#b91c1c',
        },
        orange: {
          100: '#ffedd5',
          700: '#c2410c',
        },
        purple: {
          100: '#f3e8ff',
          700: '#7e22ce',
        },
      },
    },
  },
  plugins: [],
}