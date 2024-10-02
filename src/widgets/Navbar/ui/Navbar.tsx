import { Grid2 as Grid, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants";

export const Navbar = () => {
   return (
      <Grid
         sx={{
            backgroundColor: blue[600],
            height: "100vh",
            padding: 2,
         }}
      >
         <Button
            component={Link}
            to={Routes.Projects}
            color="primary"
            variant="contained"
            size="large"
            startIcon={<AssignmentIcon />}
         >
            Projects
         </Button>
      </Grid>
   );
};
