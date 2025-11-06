import type { ReactElement } from "react";

import NavLinkMenu from "../UI/NavLinkMenu";

import logo from '/logo.svg'

const Header = (): ReactElement => {
  return (
    <header className="bg-blue-200 py-8 px-5 flex justify-between shadow-md">
      <img className="h-6" src={logo} alt="logo" />
      <nav>
        <ul className="flex gap-14">
          <li>
            <NavLinkMenu to={'/'}>Home</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to={"/about"}>About</NavLinkMenu>
          </li>
          <li>
            <NavLinkMenu to={"/cart"}>Cart</NavLinkMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
