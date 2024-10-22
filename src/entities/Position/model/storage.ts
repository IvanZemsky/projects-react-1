import { AppStorage } from "@/shared/lib";
import { CreatePositionDto, Position } from "./types";

class PositionStorage {
   constructor() {
      const executors = AppStorage.get<Position[]>("positions");
      if (!executors) {
         AppStorage.set<Position[]>("positions", []);
      }
   }

   public get = () => {
      return AppStorage.get<Position, Position[]>('positions')
   }

   public getByName = (name: string) => {
      return AppStorage.get<Position[], Position>("positions", (positions) =>
         positions.find((position) => position.name === name)
      );
   };

   public create = (dto: CreatePositionDto) => {
      const position: Position = {
         name: dto.name,
      }

      const isExist = !!this.getByName(dto.name)

      if (isExist) {
         return null
      }

      const newPosition = AppStorage.set<Position[], Position>("positions", position,
         (items) => ({
            newItems: [...items, position],
            returnValue: position,
         })
      );

      return newPosition ? position : null;
   };
}

export const positionStorage = new PositionStorage();
