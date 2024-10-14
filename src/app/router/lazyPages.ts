import { lazy } from "react";

export const Projects = lazy(() => import('@/pages/Projects'))
export const Project = lazy(() => import('@/pages/Project'))
export const CreateProject = lazy(() => import('@/pages/CreateProject'))