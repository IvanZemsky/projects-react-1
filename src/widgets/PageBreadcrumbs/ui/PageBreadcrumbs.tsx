import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

type Props = {};
export const PageBreadcrumbs = ({}: Props) => {
   const { pathname } = useLocation();

   const breadcrumbs = pathname.split("/");
   breadcrumbs.splice(0, 1);

   return (
      <Breadcrumbs aria-label="breadcrumb">
         {breadcrumbs.map((crumb, i) => {
            if (breadcrumbs.length || i === breadcrumbs.length - 1) {
               return (
                  <Typography key={crumb + i} color="text.primary">
                     {crumb}
                  </Typography>
               );
            }
            return (
               <Link
                  key={crumb + i}
                  component={RouterLink}
                  underline="hover"
                  color="inherit"
                  to={crumb}
               >
                  {crumb}
               </Link>
            );
         })}
      </Breadcrumbs>
   );
};
