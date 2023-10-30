import type { Metadata } from 'next';
import 'normalize.css/normalize.css';
import './globals.scss';
import TopPanel from '@/components/TopPanel/TopPanel';

export const metadata: Metadata = {
  title: 'MEDOL',
  description: 'Medical online services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="app">
        <header className="app__header">
          <TopPanel/>
        </header>

        <div className="app__content">
          {children}
        </div>
        
        <footer>
          {/*  */}
        </footer>
      
      </body>
    </html>
  )
}
