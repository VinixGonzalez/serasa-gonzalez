import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { CiCreditCard1 } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import { PiMoneyDuotone } from "react-icons/pi";
import { TbMessage2Dollar, TbUserSearch } from "react-icons/tb";
import MenuItem from "../../molecules/MenuItem";

export const FastMenu: React.FC = () => {
  return (
    <section data-testid="fast-menu">
      <ul className="flex flex-wrap gap-2">
        <MenuItem
          icon={<TbMessage2Dollar size={24} />}
          text="Negociar dívidas"
        />
        <MenuItem
          icon={<CiCreditCard1 size={24} />}
          text="Pedir cartão de crédito"
        />
        <MenuItem
          icon={<TbUserSearch size={24} />}
          text="Consultas ao meu CPF"
        />

        <MenuItem
          icon={<FaHandHoldingUsd size={24} />}
          text="Pedir empréstimo"
        />
        <MenuItem
          icon={<AiOutlineDashboard size={24} />}
          text="Bloqueio do Score"
        />
        <MenuItem
          icon={<PiMoneyDuotone size={24} />}
          text="Antecioação do FGTS"
        />
      </ul>
    </section>
  );
};

export default FastMenu;
