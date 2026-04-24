import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { site } from '../lib/site-data';
import { AppFrame } from '../components/shell/AppFrame/AppFrame';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.summary,
  metadataBase: new URL('https://rachelwong44.github.io'),
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.summary,
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AppFrame>{children}</AppFrame>
      </body>
    </html>
  );
}

