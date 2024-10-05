import { Executor } from "@/entities/Executor/@x/task"

export type Task = {
   id: string
   projectId: string
   assigneeId: string
   team: Executor[]
   status: string
}