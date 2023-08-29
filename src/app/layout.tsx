import Navbar from '@/components/Navbar/Navbar';
import { Providers } from '@/redux/provider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Montserrat } from 'next/font/google'
import AOSInit from '@/ui/AOSInit';
import 'react-tooltip/dist/react-tooltip.css'
import Footer from '@/components/Footer/Footer';
const helvatica = localFont({
  src: [
    { path: '../../public/fonts/Helvetica-Neue-Font/Helvetica Neue UltraLight.ttf', weight: "300" },
    { path: "../../public/fonts/Helvetica-Neue-Font/Helvetica Neue W01 66 Medium It.otf", weight: "400" },
    { path: "../../public/fonts/Helvetica-Neue-Font/Helvetica Neue LTW0697BlkCnObl.otf", weight: "700" }
  ],
  variable: '--font-helvatica',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Siddik Restaurant',
  description: 'This is complete Fullstack Restaurant proejct',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className={`${helvatica.variable} ${montserrat.variable}`}>
        <AOSInit />
      <body >
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
