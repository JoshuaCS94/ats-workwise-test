import { Base } from './Base'

export interface Column extends Base {
  name: string
  limit?: number
}
