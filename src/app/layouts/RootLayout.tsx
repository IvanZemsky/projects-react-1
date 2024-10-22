import { Navbar } from "@/widgets/Navbar"
import { Box, Grid2 as Grid, Stack } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Header } from "@/widgets/Header"
import { Suspense, useRef } from "react"
import { Loader } from "@/shared/ui"
import { PageBreadcrumbs } from "@/shared/ui"
import { theme } from "@/shared/theme/theme"

export const RootLayout = () => {
   const scrollContainerRef = useRef<HTMLDivElement>(null)

   return (
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
         <Header />
         <Grid container size="grow">
            <Navbar />
            <Stack
               ref={scrollContainerRef}
               sx={{
                  flexGrow: 1,
                  overflow: "auto",
                  maxHeight: "calc(100vh - 40px)", // 40px - Header
               }}
            >
               <PageBreadcrumbs
                  sticky
                  sx={{
                     pt: 0.5,
                     pr: 3,
                     pl: 2,
                     bgcolor: theme.palette.primary.contrastText,
                  }}
                  containerRef={scrollContainerRef}
               />
               <Box sx={{ p: 2, pt: 0.5, pr: 3, flexGrow: 1, }}>
                  <Suspense fallback={<Loader size={50} />}>
                     <Outlet />
                  </Suspense>
               </Box>
            </Stack>
         </Grid>
      </Box>
   )
}
