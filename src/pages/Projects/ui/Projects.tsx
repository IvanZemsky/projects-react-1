import { Routes } from "@/shared/constants";
import { setPath } from "@/shared/lib";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const {Create} = Routes

export const Projects = () => {
   return (
      <Box>
         <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2, }}>
            <Typography variant="h1">Projects</Typography>
            <Button
               component={Link}
               variant="contained"
               to={Create}
            >
               New
            </Button>
         </Box>
      </Box>
   );
};
