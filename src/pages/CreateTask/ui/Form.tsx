import { executorStorage } from "@/entities/Executor";
import { CreateTaskDto, taskStorage } from "@/entities/Task";
import { SpecialValues, Routes } from "@/shared/constants";
import { setPath } from "@/shared/lib";
import {
   Stack,
   Typography,
   TextField,
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type FormValues = {
   name: string;
   description: string;
   assigneeId: string;
   status: string;
};

export const Form = () => {
   const { id } = useParams();

   if (!id) {
      return <p>Error</p>;
   }

   const form = useForm<FormValues>({
      defaultValues: {
         name: "",
         description: "",
         assigneeId: SpecialValues.Unspecified,
         status: "To do",
      },
   });

   const navigate = useNavigate();

   const { register, handleSubmit, getValues } = form;

   const executors = executorStorage.get();

   const onSubmit = () => {
      const task: CreateTaskDto = {
         projectId: id,
         name: getValues("name"),
         description: getValues("description"),
         assigneeId: getValues("assigneeId"),
         status: getValues("status"),
      };
      console.log(task);
      const newTask = taskStorage.create(task);
      if (newTask) {
         navigate("/" + setPath(Routes.Projects, newTask.projectId));
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
         <Stack spacing={2}>
            <Typography variant="h1">New task</Typography>

            <TextField
               id="task-name"
               label="Name"
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               {...register("name", {
                  required: true,
               })}
            />

            <TextField
               id="task-description"
               label="Description"
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               multiline
               minRows={3}
               maxRows={3}
               {...register("description")}
            />

            <FormControl fullWidth>
               <InputLabel id="task-assignee-label">Assignee</InputLabel>
               <Select
                  id="task-assignee"
                  labelId="task-assignee-label"
                  label="Assignee"
                  defaultValue={SpecialValues.Unspecified}
                  sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                  {...register("assigneeId")}
               >
                  <MenuItem value={SpecialValues.Unspecified} selected>
                     Unspecified
                  </MenuItem>
                  {!!executors?.length &&
                     executors.map((executor) => (
                        <MenuItem value={executor.id} key={executor.id}>
                           {executor.name}
                        </MenuItem>
                     ))}
               </Select>
            </FormControl>

            <FormControl fullWidth>
               <InputLabel id="task-status-label">Status</InputLabel>
               <Select
                  id="task-status"
                  labelId="task-status-label"
                  label="Status"
                  defaultValue="To do"
                  sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                  {...register("status")}
               >
                  <MenuItem value="To do" selected>
                     To do
                  </MenuItem>
                  <MenuItem value="In progress">In progress</MenuItem>
                  <MenuItem value="Code review">Code review</MenuItem>
                  <MenuItem value="Done">Done</MenuItem>
               </Select>
            </FormControl>

            <Button
               variant="contained"
               type="submit"
               sx={{ alignSelf: "flex-start" }}
            >
               Create
            </Button>
         </Stack>
      </form>
   );
};
