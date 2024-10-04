import { Routes } from "@/shared/constants";
import { Box, Button, Typography, Input, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const CreateProject = () => {
   return (
      <Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               gap: 2,
               marginBottom: 2,
            }}
         >
            <Typography variant="h1">New project</Typography>

            <TextField
               id="project-name"
               label="Name"
               variant="filled"
               sx={{ alignSelf: "flex-start" }}
               size="small"
            />

            <Button
               variant="contained"
               type="submit"
               sx={{ alignSelf: "flex-start" }}
            >
               Create
            </Button>
         </Box>
      </Box>
   );
};
