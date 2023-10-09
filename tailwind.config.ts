import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        helvatica: "var(--font-helvatica)",
      },
      colors: {
        "sandy-brown": "#CA9C5E",
        "olive": "#0B1517",
        "light-olive": "#172125",
      },
    },
  },
  plugins: [],
}

export default config
