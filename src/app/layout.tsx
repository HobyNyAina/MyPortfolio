import '../styles/globals.css';

export const metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio réalisé avec Next.js, React & Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-body">
        {children}
      </body>
    </html>
  );
}
