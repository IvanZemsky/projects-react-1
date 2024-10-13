import { Box, Typography, TextField, Button } from "@mui/material";

type Props = {};
export const CreatePosition = ({}: Props) => {
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
            <Typography variant="h1">New position</Typography>

            <TextField
               label="Name"
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
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
