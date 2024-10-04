import { Button, ButtonProps } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface Props extends ButtonProps {
  to: string;
}

export const NavLink = ({ children, to, ...props }: Props) => {
  const location = useLocation();

  const isActive = location.pathname.includes(to);
  console.log(isActive)

  return (
    <Button
      component={Link}
      to={to}
      color={isActive ? "white" : "primary"}
      variant="contained"
      size="large"
      {...props}
    >
      {children}
    </Button>
  );
};