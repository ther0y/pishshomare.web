import { FC } from "react";
import MultiNumberCardProps from "@dataTypes/multi-number-card-props";
import { SearchCategories } from "../search-input/search-categories";
import { css } from "@emotion/css";
import tw from "twin.macro";

const MultiNumberCard: FC<MultiNumberCardProps> = ({
  title,
  subtitle,
  numbers,
  type,
  emoji,
}) => {
  const category = SearchCategories.find((s) => s.value === type);

  const numbersClasses = css({
    backgroundColor: "#4c4c4c",
    height: "fit-content",
    fontSize: "14px",
    maxWidth: "100%",
    ...tw`rounded
            text-white
            my-1
            px-3
            py-2
            pb-1
            text-xl`,
  });

  return (
    <div
      className="p-2 py-2 bg-white shadow-md rounded flex relative overflow-hidden hover:scale-150 w-full"
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
      <div className="flex-1 flex flex-col w-full  pr-12">
        <div className="flex flex-col items-start justify-center text-md sm:text-xl">
          <div className="font-semibold">
            {title}
            {emoji && (
              <span className="text-2xl top-0.5 relative">{emoji}</span>
            )}
          </div>
          <div className="text-sm text-gray-500">{subtitle}</div>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center space-x-2 font-bold max-w-full`}
          dir="ltr"
        >
          {numbers?.map((n) => (
            <div key={n} className={numbersClasses}>
              {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiNumberCard;
