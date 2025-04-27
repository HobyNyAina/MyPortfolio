// src/app/layout.tsx
import '@/styles/globals.css';
import Sidebar from '@/components/sidebar/page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Sidebar />
        {children}
      </body>
    </html>
  )
}