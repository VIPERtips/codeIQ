import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QuizApp - Challenge Your Knowledge',
  description:
    "Test your programming skills with QuizApp. Dive into a fun, interactive quiz experience brought to you by Tadiwa Blessed.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" href="/quizapp-icon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
