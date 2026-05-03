import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Browser Form Stress Detector — Test Checkout Forms Under Real User Stress',
  description: 'Simulate real user behavior patterns on checkout forms. Test hesitation, typos, mobile switches, and stress behaviors to improve form completion rates.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c1b47fc9-342a-4871-8818-2259cfaa6a0e"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
