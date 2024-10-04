import { Routes } from "@/shared/constants"
import {ReactNode} from 'react'
import AssignmentIcon from "@mui/icons-material/Assignment";

const {Home, Projects, Create} = Routes

interface INavLink {
   to: string
   text: string
   icon: ReactNode
}

export const navLinks: INavLink[] = [
   {
      to: Projects,
      text: 'Projects',
      icon: <AssignmentIcon/>,
   },
]