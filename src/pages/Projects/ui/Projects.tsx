import { Project, ProjectCard } from "@/entities/Project";
import { Routes } from "@/shared/constants";
import {
   Box,
   Button,
   ToggleButton,
   ToggleButtonGroup,
   Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { MouseEvent, useState } from "react";
import { PageBreadcrumbs } from "@/widgets/PageBreadcrumbs";

const { Create } = Routes;

const cards: Project[] = [
   {
      id: "1",
      name: "Project #1",
      description: "First project",
      team: [],
      lead: "Kopytin I.",
      startDate: "05.10.2024",
      endDate: "01.12.2024",
      img: "",
   },
   {
      id: "2",
      name: "Project #2",
      description: "Second project",
      team: [],
      lead: "Kopytin I.",
      startDate: "05.10.2024",
      endDate: "01.12.2024",
      img: "",
   },
   {
      id: "3",
      name: "Project #3",
      description: "Third project",
      team: [],
      lead: "Kopytin I.",
      startDate: "05.10.2024",
      endDate: "01.12.2024",
      img: "",
   },
   {
      id: "4",
      name: "Project #4",
      description: "Fourth project",
      team: [],
      lead: "Kopytin I.",
      startDate: "05.10.2024",
      endDate: "01.12.2024",
      img: "",
   },
];

type View = "table" | "cards";

export const Projects = () => {
   const [view, setView] = useState<View>("cards");

   const handleViewChange = (event: MouseEvent<HTMLElement>, view: View) => {
      setView(view);
   };

   return (
      <Box>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               gap: 1,
               marginBottom: 2,
            }}
         >
            <Typography variant="h1">Projects</Typography>

            <Button component={Link} variant="contained" to={Create}>
               New
            </Button>

            <ToggleButtonGroup
               color="primary"
               value={view}
               exclusive
               onChange={handleViewChange}
               sx={{ height: "38px" }}
            >
               <ToggleButton value="cards" aria-label="cards">
                  <ViewModuleIcon />
               </ToggleButton>
               <ToggleButton value="table" aria-label="table">
                  <ViewListIcon />
               </ToggleButton>
            </ToggleButtonGroup>
         </Box>
         <Box
            sx={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
               gap: 2,
            }}
         >
            {cards.map((card) => (
               <ProjectCard key={card.id} {...card} />
            ))}
         </Box>
      </Box>
   );
};
