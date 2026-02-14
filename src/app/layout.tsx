import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Weekly PIU - Rhythm Game Task Board',
  description: 'Bi-weekly challenge task board for rhythm game submissions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
