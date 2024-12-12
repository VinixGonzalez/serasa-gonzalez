import React from "react";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  text,
  className,
  onClick,
  ...rest
}) => {
  return (
    <li
      className={`group h-24 w-24 flex flex-col text-center max-w-24 flex-flex-col items-center justify-center gap-2 text-sm cursor-pointer my-2 ${className}`}
      onClick={onClick}
      {...rest}
    >
      <div className="p-4 bg-white rounded-xl border group-hover:border-primary">
        {icon}
      </div>
      <p>{text}</p>
    </li>
  );
};

export default MenuItem;
