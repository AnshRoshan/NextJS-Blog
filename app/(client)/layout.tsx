import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import { Provider } from '../utils/Provider';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next JS BLOG',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${firaCode.className}  backdrop-blur`}>
        <Provider>
          <Navbar />
          <main className='mx-auto p-2 sm:p-3 lg:p-4 lg:w-4/5 xl:w-3/4'>{children}</main>
        </Provider>
      </body>
    </html>
  );
}