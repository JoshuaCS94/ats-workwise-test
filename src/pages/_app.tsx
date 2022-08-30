import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='h-screen p-16'>
      <Head>
        <title>Applicant Tracking System</title>
        <meta name='description' content='A simple app for tracking applications of candidates' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
