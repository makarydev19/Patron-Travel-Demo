import type { Metadata } from 'next';
import { Roboto, Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { Header, Footer } from '@/components';
import { AOSProvider, ViewportProvider } from '@/components/Providers';
import { NextUIProvider } from '@nextui-org/react';
import './globals.css';

// Import Swiper styles
import 'swiper/css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-roboto',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Patron Travel',
  description: 'Explore the world with Patron Travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="shortcut icon" href="/Logo/6.svg" type="image/png" />
      </head>
      <body className={roboto.className}>
        <NextUIProvider>
          <AOSProvider>
            <ViewportProvider>
              <main className="font-normal">
                <Header />
                {children}
                <Footer />
              </main>
              <Toaster />
            </ViewportProvider>
          </AOSProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
