import { Task, taskStore } from "@/entities/Task"
import { useModal } from "@/shared/lib"
import { BaseModal } from "@/shared/ui"
import EditIcon from "@mui/icons-material/Edit"
import { Chip } from "@mui/material"
import { useState } from "react"
import { EditTaskTeamForm } from "./EditTaskTeamForm"

type Props = {
   taskId: string
   onEditorClose?: (...args: any) => any
}

export const EditTaskTeamChip = ({ taskId, onEditorClose }: Props) => {
   const taskName = taskStore.getById(taskId)?.name
   const [editedTask, setEditedTask] = useState<Task | null>(null)

   const handleEditorClose = () => {
      if (editedTask) {
         taskStore.update(editedTask)
      }
      onEditorClose && onEditorClose()
   }

   const { openModal, handleModalOpen, handleModalClose } = useModal(
      false,
      handleEditorClose,
   )

   return (
      <>
         <Chip
            sx={{ fontSize: 16 }}
            label="Edit team"
            variant="outlined"
            color="primary"
            icon={<EditIcon fontSize="small" />}
            onClick={handleModalOpen}
            clickable
         />
         <BaseModal
            title={`Edit team of task '${taskName}'`}
            open={openModal}
            onClose={handleModalClose}
         >
            <EditTaskTeamForm taskId={taskId} setEditedTask={setEditedTask} />
         </BaseModal>
      </>
   )
}
