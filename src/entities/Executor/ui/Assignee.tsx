import { Executor } from "@/entities/Executor/@x/Project"
import { setPath } from "@/shared/lib"
import { Routes } from "@/shared/model"
import { Avatar, Chip, Stack, Tooltip, Typography } from "@mui/material"
import { Link } from "react-router-dom"

type Props = {
   assignee: Executor | null
}

export const Assignee = ({ assignee }: Props) => {
   return (
      <Stack spacing={2} direction="row" sx={{ flexWrap: "wrap", alignItems: "center" }}>
         {assignee ? (
            <>
               <Typography>Assignee: </Typography>
               <Tooltip title={assignee.position?.name || "Unspecified position"} arrow>
                  <Chip
                     component={Link}
                     to={setPath("", Routes.Executors, assignee.id)}
                     avatar={<Avatar>{assignee.name[0]}</Avatar>}
                     label={assignee.name}
                     sx={{ fontWeight: 400, fontSize: 18, cursor: "pointer" }}
                  />
               </Tooltip>
            </>
         ) : (
            <Typography>Assignee: unspecified</Typography>
         )}
      </Stack>
   )
}
