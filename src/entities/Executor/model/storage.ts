import { AppStorage } from "@/shared/lib";
import type { Executor } from "./types";

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

   public create = (executor: Executor) => {
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
