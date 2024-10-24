import { CreatePositionDto, positionStorage } from "@/entities/Position"
import { Routes } from "@/shared/constants"
import { setPath } from "@/shared/lib"
import { Typography, TextField, Button, Stack } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type FormValues = {
   name: string
}

type Props = {}
export const Form = ({}: Props) => {
   const form = useForm<FormValues>({
      defaultValues: {
         name: "",
      },
   })

   const navigate = useNavigate()

   const { register, getValues, handleSubmit } = form

   const onSubmit = (data: FormValues) => {
      const position: CreatePositionDto = {
         name: getValues('name')
      }

      const newPosition = positionStorage.create(position)
      if (newPosition) {
         navigate(setPath("", Routes.Positions))
      }
   }

   return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
         <Stack spacing={2}>
            <TextField
               label="Name"
               variant="filled"
               sx={{ alignSelf: "flex-start", maxWidth: 400, width: "100%" }}
               size="medium"
               {...register('name')}
            />

            <Button variant="contained" type="submit" sx={{ alignSelf: "flex-start" }}>
               Create
            </Button>
         </Stack>
      </form>
   )
}
