import { PageHeader } from "@/widgets/PageHeader"
import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import ViewListIcon from "@mui/icons-material/ViewList"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import { Routes } from "@/shared/constants"
import type { MouseEvent } from "react"
import { View } from "../model/types"
import { setPath } from "@/shared/lib"
import { BtnLink } from "@/shared/ui"

const { Create, Projects, Docs } = Routes

type Props = {
   externalState: {
      view: View | null
      setView: React.Dispatch<React.SetStateAction<View| null>>
   }
}

export const Header = ({ externalState }: Props) => {
   const handleViewChange = (event: MouseEvent<HTMLElement>, view: View) => {
      externalState.setView(view)
   }

   return (
      <PageHeader title="Projects">
         <BtnLink variant="contained" to={setPath("", Docs, Projects)}>
            Docs
         </BtnLink>
         <BtnLink variant="contained" to={Create}>
            New
         </BtnLink>

         <ToggleButtonGroup
            color="primary"
            value={externalState.view}
            exclusive
            onChange={handleViewChange}
            sx={{ height: "38px" }}
         >
            <ToggleButton value="cards" aria-label="cards">
               <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="table" aria-label="table">
               <ViewListIcon />
            </ToggleButton>
         </ToggleButtonGroup>
      </PageHeader>
   )
}
