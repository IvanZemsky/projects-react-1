import { Navbar } from "@/widgets/Navbar";
import { Box, Grid2 as Grid, } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import { Suspense } from "react";
import { Loader } from "@/shared/ui";
import { PageBreadcrumbs } from "@/widgets/PageBreadcrumbs";

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
                  paddingTop: 1,
                  paddingRight: 3,
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
               }}
            >
               <PageBreadcrumbs />
               <Suspense fallback={<Loader size={50}/>}>
                <Outlet />  
               </Suspense>
            </Grid>
         </Grid>
      </Box>
   );
};
