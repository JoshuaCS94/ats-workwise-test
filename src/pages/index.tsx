import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='p-16'>
      <Head>
        <title>Applicant Tracking System</title>
        <meta name='description' content='A simple app for tracking applications of candidates' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center'>
        <h1 className='text-2xl'>Welcome to WATS!</h1>
      </main>
    </div>
  )
}

export default Home
