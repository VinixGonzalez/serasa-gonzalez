import React from "react";
import { NavItemProps } from "./NavItem.types";

export const NavItem: React.FC<NavItemProps> = ({
  isActive,
  icon,
  text,
  ...rest
}) => {
  return (
    <>
      <li
        className={`flex flex-col lg:flex-row items-center gap-2 relative cursor-pointer ${
          isActive ? "text-primary font-bold" : "text-gray-500"
        }`}
        {...rest}
      >
        {icon}
        <p className="text-xs lg:text-sm">{text}</p>
        {isActive && (
          <div className="absolute border-b-primary border-b-2 h-2 w-full top-0 translate-y-11" />
        )}
      </li>
    </>
  );
};

export default NavItem;
