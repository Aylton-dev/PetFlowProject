import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verde:         '#1a9e75',
        'verde-escuro':'#0f6e56',
        'verde-claro': '#e6f7f1',
        azul:          '#4a90d9',
        'azul-claro':  '#e8f2fb',
        amarelo:       '#f9c846',
        rosa:          '#f4a7b9',
        'rosa-claro':  '#fdf0f4',
        bg:            '#f4f6fb',
        card:          '#ffffff',
        pettext:       '#1a1a2e',
        muted:         '#8a94a6',
        border:        '#eef0f6',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        pet: '20px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.07)',
        verde: '0 6px 24px rgba(26,158,117,0.30)',
        amarelo: '0 6px 24px rgba(249,200,70,0.35)',
      },
    },
  },
  plugins: [],
}

export default config