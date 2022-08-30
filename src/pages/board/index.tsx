import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '../../components/atoms'

const BoardPage: NextPage = () => {
  return (
    <main className='flex h-full flex-col items-center justify-center'>
      <h1 className='text-5xl'>My board</h1>
    </main>
  )
}

export default BoardPage
