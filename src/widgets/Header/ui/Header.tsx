import { Routes } from "@/shared/constants";
import { theme } from "@/shared/theme/theme";
import { AppBar, Toolbar, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
   return (
      <AppBar position="static">
         <Toolbar
            variant="dense"
            sx={{
               minHeight: "auto",
               height: "auto",
               paddingY: 1,
            }}
         >
            <Link
               component={RouterLink}
               to={Routes.Home}
               sx={{
                  color: theme.palette.white.main,
                  textTransform: "uppercase",
               }}
            >
               App
            </Link>
         </Toolbar>
      </AppBar>
   );
};
