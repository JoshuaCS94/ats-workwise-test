import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '../components/atoms'

const Home: NextPage = () => {
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h1 className='text-5xl'>Welcome to WATS!</h1>
      <div className='mt-20'>
        <Link href='/board'>
          <a>
            <Button size='large' variant='contained'>
              Go to dashboard
            </Button>
          </a>
        </Link>
      </div>
    </main>
  )
}

export default Home
