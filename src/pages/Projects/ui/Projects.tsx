import { Box } from "@mui/material"

import { useEffect, useState } from "react"
import { Header } from "./Header"
import { View } from "../model/types"
import { ProjectList } from "./ProjectList"
import { ProjectTable } from "./ProjectTable"
import { AppStorage } from "@/shared/lib"
import { Loader } from "@/shared/ui"

export const Projects = () => {
   const [view, setView] = useState<View | null>(null)

   useEffect(() => {
      const defaultView = AppStorage.get<View>("projectsView") || "cards"
      setView(defaultView)
   }, [])

   useEffect(() => {
      if (view) {
         AppStorage.set<View>("projectsView", view)
      }
   }, [view])

   if (!view) return <Loader />

   return (
      <Box sx={{ display: "flex", flexDirection: 'column', height: '100%' }}>
         <Header externalState={{ view, setView }} />
         {view === "cards" && <ProjectList />}
         {view === "table" && <ProjectTable />}
      </Box>
   )
}
