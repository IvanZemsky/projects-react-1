import { executorStorage } from "@/entities/Executor";
import { CreateProjectDto, projectStorage } from "@/entities/Project";
import { Routes, SpecialValues } from "@/shared/constants";
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
import { useNavigate } from "react-router-dom";

type FormValues = {
   name: string
   description: string
   leadId: string
   startDate: string
   endDate: string
};

export const Form = () => {
   const form = useForm<FormValues>({
      defaultValues: {
         name: "",
         description: "",
         leadId: SpecialValues.Unspecified,
         endDate: '',
         startDate: '',
      },
   });

   const navigate = useNavigate();

   const { register, handleSubmit, getValues } = form;

   const executors = executorStorage.get();

   const onSubmit = () => {
      const project: CreateProjectDto = {
         name: getValues("name"),
         description: getValues("description"),
         leadId: getValues("leadId"),
         startDate: getValues("startDate"),
         endDate: getValues("endDate"),
      };

      const newProject = projectStorage.create(project);
      if (newProject) {
         navigate('/' + setPath(Routes.Projects, newProject.id));
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
         <Stack spacing={2}>
            <Typography variant="h1">New project</Typography>

            <TextField
               id="project-name"
               label="Name"
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               {...register("name", {
                  required: true
               })}
            />

            <TextField
               id="project-description"
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
               <InputLabel id="project-lead-label">Lead</InputLabel>
               <Select
                  id="project-lead"
                  labelId="project-lead-label"
                  label="Lead"
                  defaultValue={SpecialValues.Unspecified}
                  sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                  {...register("leadId")}
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

            <TextField
               id="project-start-date"
               label="Start date"
               slotProps={{inputLabel: {shrink: true}}}
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               type="date"
               {...register("startDate", {
                  required: true
               })}
            />

            <TextField
               id="project-end-date"
               label="End date"
               slotProps={{inputLabel: {shrink: true}}}
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               type="date"
               {...register("endDate", {
                  required: true
               })}
            />

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
