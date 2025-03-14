'use client';  // Add this directive for client-side logic

import { useEffect } from 'react';
import { metadata } from './metadata';  // Import metadata
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title> {/* Use metadata for title */}
        <meta name="description" content={metadata.description} /> {/* Use metadata for description */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" href="/quizapp-icon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
