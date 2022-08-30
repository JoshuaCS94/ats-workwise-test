import { Base } from './Base'

export interface Ticket extends Base {
  title: string
  description: string
  assigneeId?: number
  columnId: number
}
