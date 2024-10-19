import { Breadcrumbs, Link, SxProps, Typography } from "@mui/material"
import { useLocation, Link as RouterLink } from "react-router-dom"

type Props = {
   sx?: SxProps
}

export const PageBreadcrumbs = ({ sx }: Props) => {
   const { pathname } = useLocation()

   const breadcrumbs = pathname.split("/").filter(Boolean)
   let path = ""

   return (
      <Breadcrumbs aria-label="breadcrumb" sx={sx}>
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
