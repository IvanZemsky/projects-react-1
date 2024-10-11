import { AppStorage } from "@/shared/lib";
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

import { type Executor } from "@/entities/Executor";

type FormValues = {
   name: string;
   position: string;
};

type Props = {};
export const Form = ({}: Props) => {
   const form = useForm<FormValues>({
      defaultValues: {
         name: "",
         position: "unspecified",
      },
   });

   const { register, handleSubmit, getValues } = form;

   const onSubmit = (data: FormValues) => {
      const executor = {
         id: uuidv4(),
         name: getValues("name"),
         position: getValues("position"),
      };

      AppStorage.set<Executor>("executor", executor);
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
               required
               {...register("name", { maxLength: 35 })}
            />

            {/* <TextField
               label="Position"
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="small"
               {...register("position", { maxLength: 30 })}
            /> */}

            <FormControl fullWidth>
               <InputLabel id="executor-position-label">Position</InputLabel>
               <Select
                  id="executor-position"
                  labelId="executor-position-label"
                  label="Position"
                  value="unspecified"
                  sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
                  {...register("position")}
               >
                  <MenuItem value="unspecified" selected>
                     None
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
