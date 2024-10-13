import { Box } from "@mui/material";

import { useState } from "react";
import { Header } from "./Header";
import { View } from "../model/types";
import { ProjectList } from "./ProjectList";

export const Projects = () => {
   const [view, setView] = useState<View>("cards");

   return (
      <Box>
         <Header externalState={{ view, setView, }} />
         <ProjectList />
      </Box>
   );
};
