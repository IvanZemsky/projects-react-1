import { ExecutorCard, executorStorage } from "@/entities/Executor";
import { Box } from "@mui/material";

type Props = {
 
}
export const ExecutorList = ({}: Props) => {
   const executors = executorStorage.get()

   if (!executors || !executors.length) {
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
         {executors?.map((executor) => (
            <ExecutorCard key={executor.id} {...executor}/>
         ))}
      </Box>
   );
}