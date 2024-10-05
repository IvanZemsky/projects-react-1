import { Box, Button, Typography, TextField } from "@mui/material";

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
               sx={{ alignSelf: "flex-start", maxWidth: 300, width: '100%' }}
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
