import { projectStorage } from "@/entities/Project"
import { useTablePagination } from "@/shared/lib"
import { theme } from "@/shared/theme/theme"
import {
   Link,
   Paper,
   Stack,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TablePagination,
   TableRow,
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

type Props = {}

export const ProjectTable = ({}: Props) => {
   const projects = projectStorage.get()

   if (!projects || !projects.length) {
      return <p>You haven't added any projects yet</p>
   }

   const { page, rowsPerPage, visibleRows, handleChangePage, handleChangeRowsPerPage } =
      useTablePagination(projects, 12)

   return (
      <Stack component={Paper} elevation={3} sx={{ flexGrow: 1, justifyContent: 'space-between', overflow: 'hidden' }}>
         <TableContainer>
            <Table>
               <TableHead sx={{ bgcolor: theme.palette.white.dark}}>
                  <TableRow>
                     <TableCell sx={{ py: 1 }}>Name</TableCell>
                     <TableCell sx={{ py: 1 }} align="right">
                        Lead
                     </TableCell>
                     <TableCell sx={{ py: 1 }} align="right">
                        Team size
                     </TableCell>
                     <TableCell sx={{ py: 1 }} align="right">
                        Start date
                     </TableCell>
                     <TableCell sx={{ py: 1 }} align="right">
                        End Date
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {visibleRows.map((project, i) => (
                     <TableRow key={project.name + i} hover>
                        <TableCell
                           sx={{
                              ":hover": { bgcolor: theme.palette.white.dark },
                              cursor: "pointer",
                              p: 0
                           }}
                        >
                           <Link
                              component={RouterLink}
                              to={project.id}
                              sx={{display: 'block', p: 2, width: '100%'}}
                           >
                              {project.name}
                           </Link>
                        </TableCell>
                        <TableCell align="right">
                           {project.lead?.name || "Unspecified"}
                        </TableCell>
                        <TableCell align="right">{project.team.length}</TableCell>
                        <TableCell align="right">{project.startDate}</TableCell>
                        <TableCell align="right">{project.endDate}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
         <TablePagination
            rowsPerPageOptions={[12, 25]}
            component="div"
            count={projects.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
         />
      </Stack>
   )
}
