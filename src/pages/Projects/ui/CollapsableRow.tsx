import { Collapse, TableCell, TableCellProps } from "@mui/material"
import { useState } from "react";

type Props = {} & TableCellProps
export const CollapsableRow = ({ children, ...props }: Props) => {
   const [open, setOpen] = useState(false);

   const handleClick = () => setOpen(!open)

   return (
      <Collapse onClick={handleClick} timeout="auto" unmountOnExit>
         <TableCell {...props}>{children}</TableCell>
      </Collapse>
   )
}
