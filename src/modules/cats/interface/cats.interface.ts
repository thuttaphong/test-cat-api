import { from } from "rxjs";
import { Document } from 'mongoose'
export interface CatsInterface extends Document {
  id: string
  title: string
  avatar: string // https://www.peppercarrot.com/extras/html/2016_cat-generator/avatar.php?seed=1
  sounds: string[]
}

export interface CatTalkInterface {
  id: string
  title: string
  avatar: string
  message: string
  createdAt: Date | string | number
}
