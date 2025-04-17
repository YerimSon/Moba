
import Header from './Header';
import type { AppProps } from 'next/app';
import { useAuth } from '../context/AuthContext';

export default function Layout({ Component, pageProps }: AppProps) {
  const user = useAuth();

  if (user === undefined) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <>
      <Header user={user} />
      <Component {...pageProps} />
    </>
  );
}
 