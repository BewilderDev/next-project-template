import './styles/globals.scss';
import type { Metadata } from 'next';
import Navbar from './components/Navbar/Navbar';

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'A simple Next.js template with Docker support',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
} 