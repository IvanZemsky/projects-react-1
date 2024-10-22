import { Box, Typography } from "@mui/material";
import {Form} from "./Form";

type Props = {
 
}
export const CreatePosition = ({}: Props) => {
   return ( 
      <Box>
         <Typography variant="h1" sx={{mb: 1}}>New position</Typography>
         <Form />
      </Box>
   );
}