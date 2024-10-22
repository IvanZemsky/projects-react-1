import { Routes } from "@/shared/constants";
import { setPath } from "@/shared/lib";
import { PageHeader } from "@/widgets/PageHeader";
import {
   Box,
} from "@mui/material";
import { ExecutorList } from "./ExecutorList";
import { BtnLink } from "@/shared/ui";

const { Create, Docs } = Routes;

export const Executors = () => {
   return (
      <Box>
         <PageHeader title="Executors">
            <BtnLink
               variant="contained"
               to={setPath("", Docs, Routes.Executors)}
            >
               Docs
            </BtnLink>
            <BtnLink variant="contained" to={Create}>
               New
            </BtnLink>
         </PageHeader>
         <ExecutorList />
      </Box>
   );
};
