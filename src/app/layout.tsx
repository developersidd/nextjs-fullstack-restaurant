import InitializeApp from '@/components/InitializeApp/InitializeApp';
import { Providers } from '@/redux/features/provider';
import AOSInit from '@/ui/AOSInit';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import 'react-tooltip/dist/react-tooltip.css';
import { Toaster } from 'sonner';
import './globals.css';

// Fonts
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
      <body>
        <Providers>
          <Toaster richColors position='top-center' />
          <InitializeApp>
            {children}
          </InitializeApp>
        </Providers>
      </body>
    </html>
  )
}
