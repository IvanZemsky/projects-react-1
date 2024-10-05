import { ProjectCard } from "@/entities/Project";
import { Routes } from "@/shared/constants";
import { Box, Typography, Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Link } from "react-router-dom";

const {Create} = Routes

export const Executors = () => {
   return ( 
      <Box>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               gap: 1,
               marginBottom: 2,
            }}
         >
            <Typography variant="h1">Executors</Typography>

            <Button component={Link} variant="contained" to={Create}>
               New
            </Button>
         </Box>
         <Box
            sx={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
               gap: 2,
            }}
         >
            
         </Box>
      </Box>
   );
};