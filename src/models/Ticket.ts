import { Base } from './Base'

export interface Ticket extends Base {
  text: string
  assigneeId: number
  columnId: number
}
