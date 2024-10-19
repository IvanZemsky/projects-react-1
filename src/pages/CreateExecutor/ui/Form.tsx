import {
   TextField,
   Button,
   Stack,
   Select,
   InputLabel,
   MenuItem,
   FormControl,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { CreateExecutorDto, executorStorage } from "@/entities/Executor";
import { useNavigate } from "react-router-dom";
import { Routes, SpecialValues } from "@/shared/constants";

type FormValues = {
   name: string;
   position: string | null;
};

type Props = {};
export const Form = ({}: Props) => {
   const form = useForm<FormValues>({
      defaultValues: {
         name: "",
         position: SpecialValues.Unspecified,
      },
   });

   const navigate = useNavigate()

   const { register, handleSubmit, getValues } = form;

   const onSubmit = (data: FormValues) => {
      const executor: CreateExecutorDto = {
         name: getValues("name"),
         position: getValues("position"),
      };

      const newExecutor = executorStorage.create(executor)
      if (newExecutor) {
         navigate('/' + Routes.Executors)
      }
   };

   return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
         <Stack spacing={3}>
            <TextField
               id="executor-name"
               label="Name"
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               {...register("name", { maxLength: 35, required: true })}
            />

            <FormControl fullWidth>
               <InputLabel id="executor-position-label">Position</InputLabel>
               <Select
                  id="executor-position"
                  labelId="executor-position-label"
                  label="Position"
                  value={SpecialValues.Unspecified}
                  sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                  {...register("position")}
               >
                  <MenuItem value={SpecialValues.Unspecified} selected>
                     Unspecified
                  </MenuItem>
               </Select>
            </FormControl>

            <Button
               variant="contained"
               type="submit"
               size="large"
               sx={{ alignSelf: "flex-start" }}
            >
               Create
            </Button>
         </Stack>
      </form>
   );
};
