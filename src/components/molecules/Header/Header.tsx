import serasaLogo from "@/assets/serasa-logo.svg";

import { FaChevronDown } from "react-icons/fa6";

import { NavBar } from "../NavBar";

import { LuLogOut } from "react-icons/lu";
import React from "react";

import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from "../Menu";
import { useAuth } from "@/hooks/useAuth";

export const Header: React.FC = () => {
  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  return (
    <header className="max-w-5xl mx-auto w-full flex items-center h-20">
      <div className="flex items-center justify-between my-auto w-full p-2">
        <div className="flex gap-4">
          <img width={32} height={40} src={serasaLogo} alt="logo serasa" />
          <div>
            <p className="font-bold">Olá, Vinicius</p>
            <p className="text-sm text-gray-500">CPF: 101.049.***</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <NavBar />
        </div>
        <div className="flex gap-2 items-center">
          <MenuRoot>
            <MenuTrigger className="flex items-center gap-4 outline-none">
              <>
                <div className="rounded-full bg-primary text-white h-10 w-10 flex flex-col items-center justify-center">
                  VG
                </div>
                <FaChevronDown />
              </>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="logout" onClick={handleLogOut}>
                Logout
                <MenuItemCommand>
                  <LuLogOut size={18} />
                </MenuItemCommand>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </div>
      </div>
    </header>
  );
};

export default Header;
