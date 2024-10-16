import { projectStorage } from "@/entities/Project";
import { BtnLink } from "@/shared/ui";
import { PageHeader } from "@/widgets/PageHeader";
import { Grid2 as Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { ProjectTasks } from "./ProjectTasks";

type Params = {
   id: string;
};

type Props = {};
export const Project = ({}: Props) => {
   const { id } = useParams<Params>();

   const projectData = projectStorage.getById(id as string);

   if (!projectData) {
      return <p>Error</p>;
   }

   return (
      <Grid container direction="column" sx={{ flexGrow: 1 }}>
         <Grid>
            <PageHeader title={projectData.name}>
               <BtnLink to="create-task" variant="contained">
                  Add task
               </BtnLink>
            </PageHeader>
         </Grid>
         <ProjectTasks projectId={id as string}/>
      </Grid>
   );
};
