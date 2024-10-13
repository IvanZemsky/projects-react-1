import { PageHeader } from "@/widgets/PageHeader";
import { Button, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Link } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { Routes } from "@/shared/constants";
import type { MouseEvent } from "react";
import { View } from "../model/types";
import { setPath } from "@/shared/lib";

const { Create, Projects, Docs } = Routes;

type Props = {
   externalState: {
      view: View;
      setView: React.Dispatch<React.SetStateAction<View>>;
   };
};

export const Header = ({ externalState }: Props) => {
   const handleViewChange = (event: MouseEvent<HTMLElement>, view: View) => {
      externalState.setView(view);
   };

   return (
      <PageHeader title="Projects">
         <Button
            component={Link}
            variant="contained"
            to={'/' + setPath(Docs, Projects)}
         >
            Docs
         </Button>
         <Button component={Link} variant="contained" to={Create}>
            New
         </Button>

         <ToggleButtonGroup
            color="primary"
            value={externalState.view}
            exclusive
            onChange={handleViewChange}
            sx={{ height: "38px" }}
         >
            <ToggleButton value="cards" aria-label="cards">
               <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="table" aria-label="table">
               <ViewListIcon />
            </ToggleButton>
         </ToggleButtonGroup>
      </PageHeader>
   );
};
