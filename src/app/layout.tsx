import type { Metadata } from 'next';
import 'normalize.css/normalize.css';
import './globals.scss';
import TopPanel from '@/components/TopPanel/TopPanel';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';

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
        
        <footer className="app__footer">
          <Footer/>
        </footer>
        
      </body>
    </html>
  )
}
