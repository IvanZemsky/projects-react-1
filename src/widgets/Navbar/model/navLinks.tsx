import { Routes } from "@/shared/constants"
import {ReactNode} from 'react'
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from '@mui/icons-material/Person';

const {Home, Projects, Create, Executors} = Routes

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
   {
      to: Executors,
      text: 'Executors',
      icon: <PersonIcon/>,
   },
]