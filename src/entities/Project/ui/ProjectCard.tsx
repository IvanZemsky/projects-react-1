import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Project } from "../model/types";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants";
import { setPath } from "@/shared/lib";
import { theme } from "@/shared/theme/theme";

type Props = {} & Project;

export const ProjectCard = ({
   id,
   name,
   description,
   team,
   lead,
   startDate,
   endDate,
}: Props) => {
   return (
      <Card
         variant="outlined"
         component={Link}
         to={setPath(Routes.Projects, id)}
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
                  {lead}
               </Typography>
               <Typography>
                  {startDate} - {endDate}
               </Typography>
            </Stack>
         </CardContent>
      </Card>
   );
};
