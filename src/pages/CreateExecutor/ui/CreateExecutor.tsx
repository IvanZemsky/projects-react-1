import { Box, Typography } from "@mui/material";
import { Form } from "./Form";

export const CreateExecutor = () => {
   return (
      <Box>
         <Typography variant="h1" sx={{mb: 1}}>New executor</Typography>
         <Form />
      </Box>
   );
};
