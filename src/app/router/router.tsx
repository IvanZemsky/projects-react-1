import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Routes } from "@/shared/constants";
import { App } from "../App";
import {Projects} from '@/pages/Projects'

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
     ],
   },
 ]);