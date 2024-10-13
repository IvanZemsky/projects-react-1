import { ProjectCard, projectStorage } from "@/entities/Project";
import { Box } from "@mui/material";

type Props = {};

export const ProjectList = ({}: Props) => {
   const projects = projectStorage.get()

   if (!projects || !projects.length) {
      return <p>You haven't added any projects yet</p>
   }

   return (
      <Box
         sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 2,
         }}
      >
         {projects?.map((card) => (
            <ProjectCard key={card.id} {...card} />
         ))}
      </Box>
   );
};
