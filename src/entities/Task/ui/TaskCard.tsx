import { Executor } from "@/entities/Executor/@x/task";
import { Routes } from "@/shared/constants";
import { setPath } from "@/shared/lib";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
   id: string;
   projectId: string;
   name: string;
   description: string;
   assignee: Executor | null;
   team: string[]; // ids
   status: string;
};
export const TaskCard = ({
   id,
   projectId,
   name,
   description,
   assignee,
   team,
   status,
}: Props) => {
   return (
      <Card
         variant="outlined"
         component={Link}
         to={"/" + setPath(Routes.Projects, id)}
         sx={{ textDecoration: "none", ":hover": { boxShadow: 5 } }}
      >
         <CardContent>
            <Stack spacing={1}>
               <Typography>{name}</Typography>
               <Typography>{assignee?.name || 'Unspecified lead'}</Typography>
            </Stack>
         </CardContent>
      </Card>
   );
};
