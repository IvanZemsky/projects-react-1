import { AppStorage, formatDate } from "@/shared/lib";
import { CreateProjectDto, Project } from "./types";
import { v4 as uuidv4 } from "uuid";
import { executorStorage } from "@/entities/Executor/@x/project";

class ProjectStorage {
   constructor() {
      const projects = AppStorage.get<Project[]>("projects");
      if (!projects) {
         AppStorage.set<Project[]>("projects", []);
      }
   }

   public get = () => {
      return AppStorage.get<Project[]>("projects");
   };

   public getById = (id: string) => {
      return AppStorage.get<Project[], Project>("projects", (projects) =>
         projects.find((project) => project.id === id)
      );
   };

   public create = (dto: CreateProjectDto) => {
      const executor = executorStorage.getById(dto.leadId)

      if (!executor) return null

      const project: Project = {
         id: uuidv4(),
         name: dto.name,
         description: dto.description,
         lead: executor,
         team: [executor.id],
         startDate: formatDate(dto.startDate),
         endDate: formatDate(dto.endDate),
      };

      const newProject = AppStorage.set<Project[], Project>("projects", project,
         (items) => ({
            newItems: [...items, project],
            returnValue: project,
         })
      );

      return newProject ? project : null;
   };
}

export const projectStorage = new ProjectStorage();
