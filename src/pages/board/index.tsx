import { useState } from 'react'
import type { NextPage } from 'next'

import { TEST_TICKETS, TEST_USERS, TEST_COLUMNS } from '../../mocks'
import { Ticket } from '../../components/molecules'

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
                    <Ticket
                      key={t.id}
                      title={t.title}
                      description={t.description}
                      assignee={assignee?.name}
                    />
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
