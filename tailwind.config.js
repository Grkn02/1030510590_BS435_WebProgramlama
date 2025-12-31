/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Renk isimlerini burada belirliyoruz, değerleri CSS'ten geliyor
        game: {
          // 'rgb(var(--degisken) / <alpha-value>)' sözdizimi sayesinde 
          // bg-game-bg/50 gibi saydamlık özellikleri de çalışır.
          bg: 'rgb(var(--color-game-bg) / <alpha-value>)', 
          card: 'rgb(var(--color-game-card) / <alpha-value>)',
          text: 'rgb(var(--color-text-main) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        },
        brand: {
          cyan: 'rgb(var(--color-brand-cyan) / <alpha-value>)',
          purple: 'rgb(var(--color-brand-purple) / <alpha-value>)',
          neon: 'rgb(var(--color-brand-neon) / <alpha-value>)',
        },
        status: {
          success: 'rgb(var(--color-status-success) / <alpha-value>)',
          error: 'rgb(var(--color-status-error) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}