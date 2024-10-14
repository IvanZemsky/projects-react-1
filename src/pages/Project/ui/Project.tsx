import { projectStorage } from "@/entities/Project";
import { PageHeader } from "@/widgets/PageHeader";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

type Params = {
   id: string
}

type Props = {
 
}
export const Project = ({}: Props) => {
   const {id} = useParams<Params>()

   const projectData = projectStorage.getById(id as string)

   if (!projectData) {
      return <p>Error</p>
   }

   return ( 
      <Box>
         <PageHeader title={projectData.name}/>
      </Box>
   );
}