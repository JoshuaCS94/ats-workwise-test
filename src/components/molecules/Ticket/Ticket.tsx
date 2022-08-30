import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'

import { Button } from '../../atoms'

export type TicketProps = {
  title: string
  description: string
  assignee?: string
  onMoveNext?: () => void
  onMoveBack?: () => void
}

export const Ticket = ({ title, description, assignee, onMoveNext, onMoveBack }: TicketProps) => {
  return (
    <div className='rounded bg-white p-2'>
      <div className='font-semibold'>{title}</div>
      <div className='text-xs text-gray-700'>{description}</div>
      {assignee && (
        <div className='text-sm'>
          Assigned to: <span className='font-semibold'>{assignee}</span>
        </div>
      )}
      <div className='mt-2 flex justify-between'>
        <Button
          size='tiny'
          variant='ghost'
          onClick={onMoveBack}
          className={onMoveBack ? 'visible' : 'invisible'}
        >
          <ArrowLeftIcon width={16} height={16} className='mr-1' />
          Prev
        </Button>
        <Button
          size='tiny'
          variant='ghost'
          onClick={onMoveNext}
          className={onMoveNext ? 'visible' : 'invisible'}
        >
          Next
          <ArrowRightIcon width={16} height={16} className='ml-1' />
        </Button>
      </div>
    </div>
  )
}
