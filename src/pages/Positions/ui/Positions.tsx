import { Routes } from "@/shared/constants";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const {Create} = Routes

export const Positions = () => {
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
            <Typography variant="h1">Positions</Typography>

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