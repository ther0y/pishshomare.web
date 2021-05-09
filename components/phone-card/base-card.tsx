import { FC } from "react";
import { SearchCategories } from "../search-input/search-categories";
import { css } from "@emotion/css";

import tw from "twin.macro";

interface BaseCardProps {
  number: string;
  type: string;
  title: string;
  subtitle: string;
  emoji?: string;
}

const BaseCard: FC<BaseCardProps> = ({
  title,
  subtitle,
  number,
  type,
  emoji,
}) => {
  const category = SearchCategories.find((s) => s.value === type);

  const numberBoxClasses = css({
    backgroundColor: "#4c4c4c",
    ...tw`rounded
            text-white
            flex
            items-center
            justify-center
            w-28
            h-16
            text-lg
            sm:text-xl`,
  });

  return (
    <div
      className="p-2 py-2 pr-10 bg-white shadow-md rounded flex relative overflow-hidden hover:scale-150"
      dir="rtl"
    >
      <div
        className={`absolute right-0 h-full w-8 top-0 flex items-center justify-center ${category?.classes} text-white`}
      >
        <div
          className="transform -rotate-90 text-sm w-8 table"
          style={{
            whiteSpace: "nowrap",
            overflow: "visible",
            textOverflow: "ellipsis",
          }}
        >
          {category?.title}
        </div>
      </div>
      <div className="flex-1 flex text-base sm:text-lg">
        <div className="flex flex-col items-start justify-center text-md sm:text-xl pr-4">
          <div className="font-semibold">
            {title}
            {emoji && (
              <span className="text-2xl pr-2 top-0.5 relative">{emoji}</span>
            )}
          </div>
          <div className="text-sm text-gray-500">{subtitle}</div>
        </div>
        <div className="flex flex-1 justify-start font-bold" dir="ltr">
          <div className={numberBoxClasses}>{number}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
