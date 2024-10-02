import { Routes } from "@/shared/constants";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Projects = () => {
   return (
      <Box>
         <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2, }}>
            <Typography variant="h1">Projects</Typography>
            <Button
               component={Link}
               variant="contained"
               to={Routes.Projects + Routes.Create}
            >
               New
            </Button>
         </Box>
      </Box>
   );
};
