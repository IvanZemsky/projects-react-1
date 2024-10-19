import { createHashRouter } from "react-router-dom"
import { RootLayout } from "../layouts/RootLayout"
import { Routes } from "@/shared/constants"
import { App } from "../App"
import { setPath } from "@/shared/lib"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { Executors } from "@/pages/Executors/ui/Executors"
import {
   CreateExecutor,
   CreatePosition,
   CreateProject,
   CreateTask,
   Positions,
   Project,
   Projects,
} from "./lazyPages"

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
            path: setPath(Routes.Projects, ":id"),
            element: <Project />,
         },
         {
            path: setPath(Routes.Projects, ":id", "create-task"),
            element: <CreateTask />,
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
])
