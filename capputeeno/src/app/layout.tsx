import CheckoutProvider from '@/context/CheckoutContext'
import FilterProvider from '@/context/FilterContext'
import StyledComponentsRegistry from '@/lib/registry'
import { Saira } from 'next/font/google'
import Header from '../components/Header'
import './globals.css'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Capputeeno',
  description: 'E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterProvider>
          <CheckoutProvider>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
          </CheckoutProvider>
        </FilterProvider>
      </body>
    </html>
  )
}
