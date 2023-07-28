import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Providers from './Providers'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'This is a clone website of IMDb',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header/>
          {/* Navbar */}
          <Navbar/>
          {children}
        </Providers>
      </body>

    </html>
  )
}
