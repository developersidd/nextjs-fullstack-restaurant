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
        helvatica: "var(--font-helvatica)"
      },
      colors: {
        "primary-yellow": "#CA9C5E",
        "secondary-olive": "#0B1517",
      }
    },
  },
  plugins: [],
}
export default config
