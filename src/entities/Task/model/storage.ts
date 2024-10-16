import { AppStorage, formatDate } from "@/shared/lib";
import { v4 as uuidv4 } from "uuid";
import { CreateTaskDto, Task } from "./types";
import { executorStorage } from "@/entities/Executor/@x/task";

class TaskStorage {
   constructor() {
      const tasks = AppStorage.get<Task[]>("tasks");
      if (!tasks) {
         AppStorage.set<Task[]>("tasks", []);
      }
   }

   public get = () => {
      return AppStorage.get<Task, Task[]>("tasks");
   };

   public getByProjectId = (projectId: string) => {
      return AppStorage.get<Task[]>("tasks", (tasks) =>
         tasks.filter((task) => task.projectId === projectId)
      );
   };

   public create = (dto: CreateTaskDto) => {
      const executor = executorStorage.getById(dto.assigneeId)

      if (!executor) return null

      const task: Task = {
         id: uuidv4(),
         projectId: dto.projectId,
         name: dto.name,
         description: dto.description,
         assignee: executor,
         team: [executor.id],
         status: dto.status
      };

      const newTask = AppStorage.set<Task[], Task>('tasks', task, (tasks) => ({
         newItems: [...tasks, task],
         returnValue: task,
      }))

      return newTask ? task : null;
   }
}

export const taskStorage = new TaskStorage();
