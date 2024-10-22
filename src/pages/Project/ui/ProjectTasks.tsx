import { Task, TaskColumn, taskStorage } from "@/entities/Task";
import { Grid2 as Grid } from "@mui/material";

const statuses = ["To do", "In progress", "Code review", "Done"];

const filterTasksByStatus = (status: string, tasks: Task[] | null | undefined) => {
   if (!tasks) return undefined
   return tasks.filter(task => task.status === status)
}

type Props = {
   projectId: string;
};

export const ProjectTasks = ({ projectId }: Props) => {
   const tasks = taskStorage.getByProjectId(projectId);

   return (
      <Grid container spacing={2} size="grow">
         {statuses.map((status) => (
            <Grid key={status} sx={{height: '100%', flexGrow: 1}}>
               <TaskColumn label={status} tasks={filterTasksByStatus(status, tasks)} />
            </Grid>
         ))}
      </Grid>
   );
};
