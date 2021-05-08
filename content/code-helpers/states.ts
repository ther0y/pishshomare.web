import SearchCategoryType from "@dataTypes/search-category-type";
import { PhoneCode } from "@dataTypes/phone-code";
import { StateCodes } from "@content/data/state-codes";

const DataCategory = SearchCategoryType.States;

export const SearchStates = (query: string, category: string): PhoneCode[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return StateCodes.filter(
    (c) =>
      c.name.includes(query) ||
      c.eng.includes(query) ||
      c.cities?.find((ct) => ct.name.includes(query))
  );
};
