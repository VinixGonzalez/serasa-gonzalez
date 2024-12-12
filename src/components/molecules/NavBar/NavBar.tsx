import React from "react";
import NavItem from "../Header/components/atoms/NavItem";
import { IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { TbHeartDollar, TbFileSearch, TbFolderDollar } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router";

export const NavBar: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="z-50">
      <ul className="flex items-center justify-around py-2 lg:gap-8">
        <NavItem
          isActive={pathname.includes("area-cliente")}
          icon={<IoHomeOutline size={24} />}
          text="Início"
          onClick={() => navigate("/area-cliente")}
        />
        <NavItem
          isActive={pathname.includes("saude-financeira")}
          icon={<TbHeartDollar size={24} />}
          text="Finanças"
          onClick={() => navigate("/area-cliente/saude-financeira")}
        />
        <NavItem
          isActive={pathname.includes("meu-cpf")}
          icon={<TbFileSearch size={24} />}
          text="Meu CPF"
          onClick={() => navigate("/area-cliente/meu-cpf")}
        />
        <NavItem
          isActive={pathname.includes("negociar")}
          icon={<TbFolderDollar size={24} />}
          text="Dívidas"
          onClick={() => navigate("/area-cliente/solucoes/negociar")}
        />
        <NavItem
          isActive={pathname.includes("solucoes")}
          icon={<RxDashboard size={24} />}
          text="Serviços"
          onClick={() => navigate("/area-cliente/solucoes")}
        />
      </ul>
    </nav>
  );
};

export default NavBar;
