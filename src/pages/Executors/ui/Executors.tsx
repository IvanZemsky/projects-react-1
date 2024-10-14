import { Routes } from "@/shared/constants";
import { setPath } from "@/shared/lib";
import { PageHeader } from "@/widgets/PageHeader";
import {
   Box,
   Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ExecutorList } from "./ExecutorList";
import AddIcon from '@mui/icons-material/Add';

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
         <ExecutorList />
      </Box>
   );
};
