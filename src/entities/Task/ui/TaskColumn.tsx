import { theme } from "@/shared/theme/theme"
import { Stack, Typography } from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"
import { Task } from "../model/types"
import { TaskCard } from "./TaskCard"

type Props = {
   variant?: Variant
   label: string
   tasks: Task[] | null | undefined
}

export const TaskColumn = ({ variant = "h3", label, tasks }: Props) => {
   return (
      <Stack
         spacing={1}
         sx={{
            height: "100%",
            bgcolor: theme.palette.white.dark,
            borderRadius: 2,
            p: 2,
         }}
      >
         <Stack
            direction="row"
            spacing={1}
            sx={{
               position: "sticky",
               top: 28,
               bgcolor: 'inherit',
               left: 0,
               pt: '3px',
               zIndex: 1,
               alignItems: 'flex-end',
               justifyContent: "space-between",
            }}
         >
            <Typography variant={variant}>{label}</Typography>
            <Typography>{tasks?.length || 0}</Typography>
         </Stack>
         <Stack spacing={2} sx={{ overflow: "auto" }}>
            {tasks?.map((task) => (
               <TaskCard key={task.id} {...task} />
            ))}
         </Stack>
      </Stack>
   )
}
