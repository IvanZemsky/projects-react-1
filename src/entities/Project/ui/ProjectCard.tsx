import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants";
import { setPath } from "@/shared/lib";
import { theme } from "@/shared/theme/theme";
import { Executor } from "@/entities/Executor";

type Props = {
   id: string;
   name: string;
   description: string;
   lead: Executor;
   startDate: string;
   endDate: string;
};

export const ProjectCard = ({
   id,
   name,
   description,
   lead,
   startDate,
   endDate,
}: Props) => {
   return (
      <Card
         variant="outlined"
         component={Link}
         to={'/' + setPath(Routes.Projects, id)}
         sx={{ textDecoration: "none", ":hover": { boxShadow: 5 } }}
      >
         <CardContent
            sx={{
               display: "flex",
               flexDirection: "column",
               gap: 1,
               height: "100%",
            }}
         >
            <Typography sx={{ fontWeight: 500, fontSize: 20 }}>
               {name}
            </Typography>
            <Stack spacing={1} sx={{ mt: "auto" }}>
               <Typography>{description}</Typography>
               <Typography
                  sx={{
                     backgroundColor: theme.palette.secondary.light,
                     paddingY: 0.5,
                     paddingX: 1,
                     borderRadius: 1,
                  }}
               >
                  {lead.name}
               </Typography>
               <Typography>
                  {startDate} - {endDate}
               </Typography>
            </Stack>
         </CardContent>
      </Card>
   );
};
