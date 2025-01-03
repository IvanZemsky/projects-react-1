import { navLinks } from "@/shared/model"
import { useModal } from "@/shared/lib"
import { theme } from "@/shared/theme"
import { BaseModal, NavLink } from "@/shared/ui"
import MenuIcon from "@mui/icons-material/Menu"
import { IconButton, useMediaQuery } from "@mui/material"

export const OpenMobileMenuBtn = () => {
   const { openModal, handleModalClose, handleModalOpen } = useModal()

   const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))

   if (!isMediumScreen) {
      return null
   }

   return (
      <>
         <IconButton
            onClick={handleModalOpen}
            sx={{ p: 0, color: "primary.contrastText" }}
         >
            <MenuIcon sx={{fontSize: 33}}/>
         </IconButton>
         <BaseModal open={openModal} title="Menu" onClose={handleModalClose}>
            {navLinks.map((link) => (
               <NavLink
                  key={link.to}
                  to={link.to}
                  startIcon={link.icon}
                  onClick={handleModalClose}
               >
                  {link.text}
               </NavLink>
            ))}
         </BaseModal>
      </>
   )
}
