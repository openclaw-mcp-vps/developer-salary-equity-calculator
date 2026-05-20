import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Equity Calculator — Know Your True Compensation',
  description: 'Convert equity packages to cash equivalents using company stage, valuation trends, and liquidation scenarios to compare total compensation offers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="62391e2c-ccc3-4b13-9ff0-b9e3993a7533"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
