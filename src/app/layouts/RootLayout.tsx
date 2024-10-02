import { Navbar } from "@/widgets/Navbar";
import { Box, Grid2 as Grid  } from "@mui/material";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
   return (
      <Box>
         <Grid container sx={{ minHeight: "100vh" }}>
            <Navbar/>
            <Grid sx={{ padding: 2, paddingTop: 2.5, }}>
               <Outlet />
            </Grid>
         </Grid>
      </Box>
   );
};
