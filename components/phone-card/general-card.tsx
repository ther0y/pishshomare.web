import { FC } from "react";
import { SearchCategories } from "../search-input/search-categories";
import { PhoneCode } from "@dataTypes/phone-code";

const GeneralCard: FC<{ data: PhoneCode }> = ({ data }) => {
  const category = SearchCategories.find((s) => s.value === data.type);

  return (
    <div
      className="p-2 py-8 pr-10 bg-white shadow-md rounded flex relative overflow-hidden hover:scale-150"
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
      <div className="flex-1 flex flex-col text-center text-base sm:text-lg justify-center items-center">
        <div>{data.name}</div>
        <div>{data.eng}</div>
      </div>
    </div>
  );
};

export default GeneralCard;
