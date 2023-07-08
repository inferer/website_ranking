import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Providers from '@/contexts/Providers'
import { message } from 'antd';
import GlobalStatus from '@/components/GlobalStatus';

message.config({
  prefixCls: 'inferer-message',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Providers>
        <Component {...pageProps} />
        <GlobalStatus />
      </Providers>
    </>
    
  )
  
}
