import React from "react";
import { NewsProps } from "./News.types";

export const News: React.FC<NewsProps> = ({ newsList }) => {
  return (
    <div className="flex justify-between">
      {newsList.map((news, index) => (
        <div
          key={index}
          className="group flex flex-col w-fit items-center cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full border border-blue-700 flex items-center justify-center">
            <div className="transform transition duration-300 ease-in-out group-hover:scale-[2.4]">
              {news.img}
            </div>
          </div>
          <p className="bg-blue-700 text-white font-bold text-xs px-2 rounded-full -translate-y-4">
            Novidade
          </p>
          <p className="-translate-y-2 text-xs max-w-20 text-center text-gray-500">
            {news.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default News;
