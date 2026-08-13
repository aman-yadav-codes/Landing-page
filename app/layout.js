import './globals.css';
import Providers from '../components/providers';

export const metadata = { title: 'Cappuccino Coffee Shop', description: 'A warm coffee shop website and admin dashboard template.' };

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning><body><Providers>{children}</Providers></body></html>;
}
