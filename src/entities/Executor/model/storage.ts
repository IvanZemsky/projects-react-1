import { AppStorage } from "@/shared/lib";
import type { CreateExecutorDto, Executor } from "./types";
import { SpecialValues } from "@/shared/constants";
import { v4 as uuidv4 } from "uuid";

class ExecutorStorage {
   constructor() {
      const executors = AppStorage.get<Executor[]>("executors");
      if (!executors) {
         AppStorage.set<Executor[]>("executors", []);
      }
   }

   public get = () => {
      return AppStorage.get<Executor, Executor[]>('executors')
   }

   public getById = (id: string) => {
      return AppStorage.get<Executor[], Executor>("executors", (executors) =>
         executors.find((executor) => executor.id === id)
      );
   };

   public create = (dto: CreateExecutorDto) => {
      const position = dto.position === SpecialValues.Unspecified ? null : dto.position

      const executor: Executor = {
         id: uuidv4(),
         name: dto.name,
         position,
      }

      const newExecutor = AppStorage.set<Executor[], Executor>("executors", executor,
         (items) => ({
            newItems: [...items, executor],
            returnValue: executor,
         })
      );

      return newExecutor ? executor : null;
   };
}

export const executorStorage = new ExecutorStorage();
