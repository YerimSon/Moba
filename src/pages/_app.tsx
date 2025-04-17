
import Layout from '../components/Layout';
import { AuthProvider, useAuth } from '../context/AuthContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';


export default function App(appProps: AppProps) {

  const user = useAuth();

  if (user === undefined) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <AuthProvider>
        <Layout {...appProps}/>
    </AuthProvider>
  );
}

