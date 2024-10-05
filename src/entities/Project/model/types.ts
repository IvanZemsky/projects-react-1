import { Executor } from "@/entities/Executor/@x/project"

export type Project = {
   id: string
   name: string
   description: string
   team: Executor[]
   lead: string
   startDate: string
   endDate: string
   img: string
}