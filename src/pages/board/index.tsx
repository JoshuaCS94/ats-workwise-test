import { useState } from 'react'
import type { NextPage } from 'next'

import { Ticket, User, Column } from '../../models'

const TEST_USERS: User[] = [
  { id: 0, name: 'User 1' },
  { id: 1, name: 'User 2' },
  { id: 2, name: 'User 3' },
]

const TEST_TICKETS: Ticket[] = [
  { id: 0, title: 'Ticket 1', description: 'Description 1', assigneeId: 0, columnId: 0 },
  { id: 1, title: 'Ticket 2', description: 'Description 2', assigneeId: 0, columnId: 1 },
  { id: 2, title: 'Ticket 3', description: 'Description 3', assigneeId: 1, columnId: 2 },
  { id: 3, title: 'Ticket 4', description: 'Description 4', columnId: 3 },
  { id: 4, title: 'Ticket 5', description: 'Description 5', columnId: 1 },
  { id: 5, title: 'Ticket 6', description: 'Description 6', assigneeId: 0, columnId: 1 },
  { id: 6, title: 'Ticket 7', description: 'Description 7', assigneeId: 2, columnId: 2 },
  { id: 7, title: 'Ticket 8', description: 'Description 8', assigneeId: 1, columnId: 0 },
  { id: 8, title: 'Ticket 9', description: 'Description 9', columnId: 3 },
  { id: 9, title: 'Ticket 10', description: 'Description 10', assigneeId: 1, columnId: 1 },
  { id: 10, title: 'Ticket 11', description: 'Description 11', assigneeId: 2, columnId: 1 },
  { id: 11, title: 'Ticket 12', description: 'Description 12', assigneeId: 2, columnId: 1 },
  { id: 12, title: 'Ticket 13', description: 'Description 13', columnId: 1 },
  { id: 13, title: 'Ticket 14', description: 'Description 14', assigneeId: 1, columnId: 0 },
  { id: 14, title: 'Ticket 15', description: 'Description 15', assigneeId: 0, columnId: 0 },
  { id: 15, title: 'Ticket 16', description: 'Description 16', columnId: 2 },
  { id: 16, title: 'Ticket 17', description: 'Description 17', assigneeId: 1, columnId: 3 },
  { id: 17, title: 'Ticket 18', description: 'Description 18', columnId: 1 },
  { id: 18, title: 'Ticket 19', description: 'Description 19', assigneeId: 0, columnId: 1 },
  { id: 19, title: 'Ticket 20', description: 'Description 20', assigneeId: 1, columnId: 1 },
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
          <div key={c.id} className='h-full w-60 overflow-y-auto rounded bg-gray-300 p-2'>
            <div className='sticky top-0 rounded border-2 border-black bg-white px-2 py-1 font-bold'>
              {c.name}
            </div>
            <div className='mt-4 flex h-0 flex-col gap-2'>
              {tickets
                ?.filter(t => t.columnId === c.id)
                .map(t => {
                  const assignee = users.find(u => u.id === t.assigneeId)

                  return (
                    <div key={t.id} className='rounded bg-white p-2'>
                      <div className='font-semibold'>{t.title}</div>
                      <div className='text-xs text-gray-700'>{t.description}</div>
                      {assignee && (
                        <div className='text-sm'>
                          Assigned to: <span className='font-semibold'>{assignee.name}</span>
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default BoardPage
