import { AppStorage } from "@/shared/lib";
import type { Executor } from "./types";

class ExecutorStorage {
   constructor() {
      const executors = AppStorage.getItems<Executor[]>("executors");
      if (!executors) {
         AppStorage.setItems<Executor[]>("executors", []);
      }
   }

   public get = () => {
      return AppStorage.getItems<Executor>('executors')
   }

   public create = (executor: Executor) => {
      const newExecutor = AppStorage.setItems<Executor>("executors", executor,
         (items) => ({
            newItems: [...items, executor] as Executor[],
            returnValue: executor,
         })
      );

      return newExecutor ? executor : null;
   };
}

export const executorStorage = new ExecutorStorage();
