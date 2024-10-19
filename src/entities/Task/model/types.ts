import { Executor } from "@/entities/Executor/@x/task"

export type Task = {
   id: string
   projectId: string
   name: string
   description: string
   assignee: Executor | null
   team: string[] // ids
   status: string
}

export type CreateTaskDto = {
   projectId: string
   name: string
   description: string
   assigneeId: string
   status: string
}