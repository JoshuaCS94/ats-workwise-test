import { useState } from 'react'
import type { NextPage } from 'next'

import { Ticket, User, Column } from '../../models'

const TEST_USERS: User[] = [
  { id: 0, name: 'User 1' },
  { id: 1, name: 'User 2' },
  { id: 2, name: 'User 3' },
]

const TEST_TICKETS: Ticket[] = [
  { id: 0, text: 'Ticket 1', assigneeId: 0, columnId: 0 },
  { id: 1, text: 'Ticket 2', assigneeId: 0, columnId: 1 },
  { id: 2, text: 'Ticket 3', assigneeId: 1, columnId: 2 },
  { id: 3, text: 'Ticket 4', assigneeId: 2, columnId: 3 },
  { id: 4, text: 'Ticket 5', assigneeId: 1, columnId: 1 },
  { id: 5, text: 'Ticket 6', assigneeId: 0, columnId: 1 },
  { id: 6, text: 'Ticket 7', assigneeId: 2, columnId: 2 },
  { id: 7, text: 'Ticket 8', assigneeId: 1, columnId: 0 },
  { id: 8, text: 'Ticket 9', assigneeId: 0, columnId: 3 },
  { id: 9, text: 'Ticket 10', assigneeId: 0, columnId: 0 },
]

const TEST_COLUMNS: Column[] = [
  { id: 0, name: 'Column 1' },
  { id: 1, name: 'Column 2', limit: 2 },
  { id: 2, name: 'Column 3', limit: 3 },
  { id: 3, name: 'Column 4' },
]

const BoardPage: NextPage = () => {
  const [tickets, setTickets] = useState(TEST_TICKETS)
  const [users, setUsers] = useState(TEST_USERS)
  const [columns, setColumns] = useState(TEST_COLUMNS)

  return (
    <main className='flex h-full flex-col'>
      <h1 className='text-5xl'>My board</h1>
      <div className='mt-8 flex grow items-stretch gap-4'>
        {columns?.map(c => (
          <div key={c.id} className='h-full w-60 rounded bg-gray-300 p-2'>
            <div className='rounded bg-white px-2 py-1'>{c.name}</div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default BoardPage
