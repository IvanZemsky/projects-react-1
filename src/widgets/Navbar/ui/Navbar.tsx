import { Grid2 as Grid } from "@mui/material";
import { blue } from "@mui/material/colors";

import { navLinks } from "../model/navLinks";
import { NavLink } from "@/shared/ui";

export const Navbar = () => {
   return (
      <Grid
         sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            backgroundColor: blue[600],
            padding: 2,
            pt: 1,
            zIndex: 801,
         }}
      >
         {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} startIcon={link.icon}>
               {link.text}
            </NavLink>
         ))}
      </Grid>
   );
};
