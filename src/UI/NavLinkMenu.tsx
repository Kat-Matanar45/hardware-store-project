import type { ReactElement, ReactNode } from "react";
import { NavLink } from "react-router-dom";

type NavLinkMenuProps = {
  to: string;
  children: ReactNode;
};

const NavLinkMenu = ({to, children}: NavLinkMenuProps): ReactElement => {
    return (
        <NavLink className={({ isActive }) => 
          isActive ? 'text-gray-900 font-semibold' : 'text-gray-600'
        } to={to}>
           {children}
        </NavLink>
    )
}

export default NavLinkMenu;