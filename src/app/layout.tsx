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
      <body className="bg-[#0f172a] text-white ml-0 md:ml-[6.5rem]">
        <Sidebar />
        {children}
      </body>
    </html>
  )
}