
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';


export default function App(appProps: AppProps) {

  return (
    <AuthProvider>
        <Layout {...appProps}/>
    </AuthProvider>
  );
}

