import { createHashRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Routes } from "@/shared/constants";
import { App } from "../App";
import { Projects } from "@/pages/Projects";
import { CreateProject } from "@/pages/CreateProject";
import { setPath } from "@/shared/lib";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { Executors } from "@/pages/Executors/ui/Executors";
import { CreateExecutor } from "@/pages/CreateExecutor";
import { CreatePosition } from "@/pages/CreatePosition";
import { Positions } from "@/pages/Positions";

export const router = createHashRouter([
   {
      path: Routes.Home,
      element: <RootLayout />,
      errorElement: <NotFoundPage />,
      children: [
         {
            path: Routes.Home,
            element: <App />,
         },
         {
            path: Routes.Projects,
            element: <Projects />,
         },
         {
            path: setPath(Routes.Projects, Routes.Create),
            element: <CreateProject />,
         },
         {
            path: Routes.Executors,
            element: <Executors />,
         },
         {
            path: setPath(Routes.Executors, Routes.Create),
            element: <CreateExecutor />,
         },
         {
            path: Routes.Positions,
            element: <Positions />,
         },
         {
            path: setPath(Routes.Positions, Routes.Create),
            element: <CreatePosition />,
         },
      ],
   },
]);
