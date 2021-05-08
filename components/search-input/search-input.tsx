import React, { FC, useEffect, useState } from "react";
import DropDown from "@components/drop-down/drop-down";
import { SearchCategories } from "@components/search-input/search-categories";
import { PhoneCode } from "@dataTypes/phone-code";
import { SearchCodes } from "@content/code-helpers";

interface SearchInputProps {
  placeholder?: string;
  fill?: boolean;
  onResult: (codes: PhoneCode[]) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  placeholder = "جستجو با نام یا شماره",
  fill = true,
  onResult,
}) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(SearchCategories[0]);

  useEffect(() => {
    const result = SearchCodes(query, category.value);
    onResult(result);
  }, [query, category, onResult]);

  return (
    <div
      className={`flex items-center bg-white shadow rounded border py-3 text-md sm:text-lg  ${
        fill && "w-full"
      }`}
    >
      <input
        type="text"
        className={`bg-transparent pr-4 flex-1`}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="">
        <DropDown onChange={setCategory} items={SearchCategories} />
      </div>
    </div>
  );
};

export default SearchInput;
