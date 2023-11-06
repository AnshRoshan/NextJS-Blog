import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { Providers } from './components/Providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog With Next.js',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={` ${inter.className} backdrop-blur  bg-neutral-100 text-black dark:bg-neutral-800 dark:selection:bg-neutral-700 dark:text-white h-full selection:bg-neutral-400 `}
      >
        <Providers>
          <Navbar />
          <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
