/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['Press Start 2P', 'monospace'],
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(0.55)' },
          '20%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(0.55)' },
          '60%': { transform: 'scale(1)' },
          '80%': { transform: 'scale(0.55)' },
          '100%': { transform: 'scale(0.55)' },
        },
      },
      animation: {
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 