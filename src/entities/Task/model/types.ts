import { Executor } from "@/entities/Executor/@x/task"

export type TaskStatus = 'to do' | 'in progress' | 'code review' | 'done'

export type TaskColumnData = {
   id: TaskStatus,
   label: string
}

export type Task = {
   id: string
   projectId: string
   name: string
   description: string
   assignee: Executor | null
   team: string[] // ids
   status: TaskStatus
}

export type CreateTaskDto = {
   projectId: string
   name: string
   description: string
   assigneeId: string
   status: TaskStatus
}

export type UpdateTaskDto = {
   name: string
   description: string
   assigneeId: string
   status: TaskStatus
}