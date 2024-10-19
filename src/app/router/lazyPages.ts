import { lazy } from "react"

export const Projects = lazy(() => import("@/pages/Projects"))
export const Project = lazy(() => import("@/pages/Project"))
export const CreateProject = lazy(() => import("@/pages/CreateProject"))
export const CreateTask = lazy(() => import("@/pages/CreateTask"))
export const Docs = lazy(() => import("@/pages/Docs"))
export const Executors = lazy(() => import("@/pages/Executors"))
export const CreateExecutor = lazy(() => import("@/pages/CreateExecutor"))
export const CreatePosition = lazy(() => import("@/pages/CreatePosition"))
export const Positions = lazy(() => import("@/pages/Positions"))
