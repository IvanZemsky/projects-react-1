import { Grid2 as Grid } from "@mui/material";
import { blue } from "@mui/material/colors";

import { navLinks } from "../model/navLinks";
import { NavLink } from "@/shared/ui";

export const Navbar = () => {
   return (
      <Grid
         sx={{
            backgroundColor: blue[600],
            height: "100vh",
            padding: 2,
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
