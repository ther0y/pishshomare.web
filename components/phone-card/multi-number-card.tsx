import { FC } from "react";
import { SearchCategories } from "../search-input/search-categories";
import { css } from "@emotion/css";

import tw from "twin.macro";

export interface MultiNumberCardProps {
  type: string;
  title: string;
  subtitle: string;
  emoji?: string;
  numbers: string[];
}

const MultiNumberCard: FC<MultiNumberCardProps> = ({
  title,
  subtitle,
  numbers,
  type,
  emoji,
}) => {
  const category = SearchCategories.find((s) => s.value === type);

  const numbersBoxClasses = css({
    backgroundColor: "#4c4c4c",
    height: "fit-content",
    fontSize: "14px",
    maxWidth: "100%",
    ...tw`rounded
            text-white
            flex
            items-center
            justify-center
            p-2
            px-4
            sm:h-16
            sm:w-28
            sm:text-xl`,
  });

  return (
    <div
      className="p-2 py-2 pr-10 bg-white shadow-md rounded flex relative overflow-hidden hover:scale-150 w-full"
      style={{ minHeight: "90px" }}
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
      <div className="flex-1 flex flex-col sm:flex-row w-full">
        <div className="flex flex-col items-start justify-center text-md sm:text-xl pr-4">
          <div className="font-semibold">
            {title}
            {emoji && (
              <span className="text-2xl pr-2 top-0.5 relative">{emoji}</span>
            )}
          </div>
          <div className="text-sm text-gray-500">{subtitle}</div>
        </div>

        <div
          className="flex flex-1 flex-grow justify-start font-bold"
          dir="ltr"
        >
          <div
            className="flex flex-row items-center sm:grid space-x-2 sm:space-x-0 sm:grid-cols-3 sm:gap-2 sm:pr-8 md:pr-0 mt-2 sm:mt-0 font-bold max-w-full overflow-scroll no-scrollbar"
            dir="ltr"
          >
            {numbers?.map((n) => (
              <div key={n} className={numbersBoxClasses}>
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiNumberCard;
