import { AppStorage, formatDate } from "@/shared/lib";
import { CreateProjectDto, Project } from "./types";
import { v4 as uuidv4 } from "uuid";

class ProjectStorage {
   constructor() {
      const projects = AppStorage.getItems<Project[]>("projects");
      if (!projects) {
         AppStorage.setItems<Project>("projects", []);
      }
   }

   public get = () => {
      return AppStorage.getItems<Project>("projects");
   };

   public getById = (id: string) => {
      return AppStorage.getItems<Project, Project>("projects", (projects) =>
         projects.find((project) => project.id === id)
      );
   };

   public create = (projectDto: CreateProjectDto) => {
      const project: Project = {
         ...projectDto,
         id: uuidv4(),
         team: [],
         startDate: formatDate(projectDto.startDate),
         endDate: formatDate(projectDto.endDate),
      };

      const newProject = AppStorage.setItems<Project>(
         "projects",
         project,
         (items) => ({
            newItems: [...items, project] as Project[],
            returnValue: project,
         })
      );

      return newProject ? project : null;
   };
}

export const projectStorage = new ProjectStorage();
