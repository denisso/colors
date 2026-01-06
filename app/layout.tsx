import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ColorsStoreProvider } from '@/entities/color';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Colors shades generator',
  description: 'The online tools for generating a palette of colors shades',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ColorsStoreProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </ColorsStoreProvider>
    </html>
  );
}
