import { Routes } from "@/shared/constants";
import { theme } from "@/shared/theme/theme";
import { AppBar, Toolbar, Link, Stack, SxProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const linkSx: SxProps = {
   display: "flex",
   alignItems: "center",
   gap: 0.5,
   color: theme.palette.primary.contrastText,
   fontSize: 14,
};

export const Header = () => {
   return (
      <AppBar position="static" sx={{zIndex: 800}}>
         <Toolbar
            variant="dense"
            sx={{
               minHeight: "auto",
               height: "auto",
               paddingY: 1,
            }}
         >
            <Stack direction="row" spacing={2}>
               <Link
                  component={RouterLink}
                  to={Routes.Home}
                  sx={{
                     color: theme.palette.primary.contrastText,
                     textTransform: "uppercase",
                  }}
               >
                  App
               </Link>
               <Link component={RouterLink} to={Routes.Docs} sx={linkSx}>
                  Docs
               </Link>
               <Link
                  href={"https://github.com/IvanZemsky/projects-react-1"}
                  sx={linkSx}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <GitHubIcon fontSize="small" /> GitHub
               </Link>
            </Stack>
         </Toolbar>
      </AppBar>
   );
};
