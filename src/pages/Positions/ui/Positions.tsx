import { Routes } from "@/shared/constants";
import { setPath } from "@/shared/lib";
import { PageHeader } from "@/widgets/PageHeader";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const { Create, Docs } = Routes;

export const Positions = () => {
   return (
      <Box>
         <PageHeader title="Positions">
            <Button
               component={Link}
               variant="contained"
               to={"/" + setPath(Docs, Routes.Positions)}
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
