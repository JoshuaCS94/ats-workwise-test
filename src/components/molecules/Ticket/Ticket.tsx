export type TicketProps = {
  title: string
  description: string
  assignee?: string
}

export const Ticket = ({ title, description, assignee }: TicketProps) => {
  return (
    <div className='rounded bg-white p-2'>
      <div className='font-semibold'>{title}</div>
      <div className='text-xs text-gray-700'>{description}</div>
      {assignee && (
        <div className='text-sm'>
          Assigned to: <span className='font-semibold'>{assignee}</span>
        </div>
      )}
    </div>
  )
}
