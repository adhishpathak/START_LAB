import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'StratLab',
  description: 'Marketing strategies that drive real results',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-50'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
