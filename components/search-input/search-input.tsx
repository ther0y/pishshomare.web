import React, { FC, useEffect, useState } from "react";
import DropDown from "@components/drop-down/drop-down";
import SearchCategoryType from "@components/search-input/search-category-type";

interface SearchInputProps {
  placeholder?: string;
  fill?: boolean;
}

const categories = [
  {
    title: "همه",
    value: SearchCategoryType.All,
  },
  {
    title: "ضروری",
    value: SearchCategoryType.Emergencies,
  },
  {
    title: "اپراتور ها",
    value: SearchCategoryType.Operators,
  },
  {
    title: "شهر‌ها و استان ها",
    value: SearchCategoryType.States,
  },
  {
    title: "کشور‌ ها",
    value: SearchCategoryType.Countries,
  },
  {
    title: "سفارتخانه ها",
    value: SearchCategoryType.Embassies,
  },
];

const SearchInput: FC<SearchInputProps> = ({
  placeholder = "جستجو با نام یا شماره",
  fill = true,
}) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    search(query, category.value);
  }, [query, category]);

  const search = (query: string, category: string) => {
    //TODO: Implement Search functionality
    console.log({ query, category });
  };

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
        <DropDown onChange={setCategory} items={categories} />
      </div>
    </div>
  );
};

export default SearchInput;
