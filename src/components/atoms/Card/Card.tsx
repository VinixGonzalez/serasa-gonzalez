import React from "react";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({
  icon,
  title,
  subtitle,
  content,
}) => {
  return (
    <div className="p-6 bg-white items-center gap-4 shadow-sm rounded-xl flex border cursor-pointer hover:border-primary">
      <div data-testid="icon-container">{icon}</div>
      <div>
        <p className="font-bold text-sm lg:text-base">{title}</p>
        {subtitle && <p className="text-sm lg:text-base">{subtitle}</p>}
      </div>
      {content}
    </div>
  );
};

export default Card;
