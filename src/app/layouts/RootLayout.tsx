import { Navbar } from "@/widgets/Navbar";
import { Box, Grid2 as Grid, } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { Suspense } from "react";
import { Loader } from "@/shared/ui";

export const RootLayout = () => {
   return (
      <Box
         sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
         <Header/>
         <Grid container size="grow">
            <Navbar />
            <Grid
               sx={{
                  padding: 2,
                  paddingTop: 2.5,
                  paddingRight: 3,
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
               }}
            >
               <Suspense fallback={<Loader size={50}/>}>
                <Outlet />  
               </Suspense>
            </Grid>
         </Grid>
      </Box>
   );
};
