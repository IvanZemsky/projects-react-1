import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Routes } from "@/shared/constants";
import { App } from "../App";
import {Projects} from '@/pages/Projects'
import { CreateProject } from "@/pages/CreateProject";
import { setPath } from "@/shared/lib";

export const router = createBrowserRouter([
   {
     path: Routes.Home,
     element: <RootLayout />,
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
     ],
   },
 ]);