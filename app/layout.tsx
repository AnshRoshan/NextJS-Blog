import './globals.css'
import Navbar from './components/Navbar'
import type { Metadata } from 'next'
import { Provider } from './components/Provider'
export const metadata: Metadata = {
  title: 'Next JS BLOG',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className=''>
        <Provider>
          <Navbar />
          <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto  p-2 sm:p-3 lg:p-4 lg:w-4/5 '>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}