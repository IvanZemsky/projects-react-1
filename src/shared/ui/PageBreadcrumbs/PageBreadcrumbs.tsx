import { useCheckYScroll } from "../../lib"
import { Breadcrumbs, Link, SxProps, Typography } from "@mui/material"
import { RefObject } from "react"
import { useLocation, Link as RouterLink } from "react-router-dom"

type Props = {
   sx?: SxProps
   sticky?: boolean
   containerRef?: RefObject<HTMLElement>
}

const stickySx: SxProps = {
   position: "sticky",
   top: 0,
   left: 0,
   transition: "box-shadow 0.15s linear",
   zIndex: 799,
}

const stickyShadow: SxProps = {
   boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
}

export const PageBreadcrumbs = ({ sticky = false, containerRef, sx }: Props) => {
   const { pathname } = useLocation()
   const hasScroll = useCheckYScroll(1, containerRef)

   const initialSx: SxProps = {
      ...(sticky && stickySx),
      ...(sticky && hasScroll && stickyShadow),
   }

   const breadcrumbs = pathname.split("/").filter(Boolean)
   let path = ""

   return (
      <Breadcrumbs aria-label="breadcrumb" sx={{ ...initialSx, ...sx }}>
         {breadcrumbs.map((crumb, i) => {
            path += `/${crumb}`

            if (i === breadcrumbs.length - 1) {
               return (
                  <Typography key={crumb + i} color="text.primary" sx={{ fontSize: 15 }}>
                     {crumb}
                  </Typography>
               )
            }

            return (
               <Link
                  key={crumb + i}
                  component={RouterLink}
                  underline="hover"
                  color="inherit"
                  to={path}
                  sx={{ fontSize: 15 }}
               >
                  {crumb}
               </Link>
            )
         })}
      </Breadcrumbs>
   )
}
