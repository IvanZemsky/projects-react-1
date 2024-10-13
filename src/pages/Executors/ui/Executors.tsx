import { ProjectCard } from "@/entities/Project";
import { Routes } from "@/shared/constants";
import { setPath } from "@/shared/lib";
import { PageHeader } from "@/widgets/PageHeader";
import {
   Box,
   Typography,
   Button,
   ToggleButtonGroup,
   ToggleButton,
} from "@mui/material";
import { Link } from "react-router-dom";

const { Create, Docs } = Routes;

export const Executors = () => {
   return (
      <Box>
         <PageHeader title="Executors">
            <Button
               component={Link}
               variant="contained"
               to={"/" + setPath(Docs, Routes.Executors)}
            >
               Docs
            </Button>
            <Button component={Link} variant="contained" to={Create}>
               New
            </Button>
         </PageHeader>
         <Box
            sx={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
               gap: 2,
            }}
         ></Box>
      </Box>
   );
};
