import { TehranCodes } from "@content/data/tehran-codes";
import { PhoneCode } from "@dataTypes/phone-code";
import SearchCategoryType from "@enums/search-category-type";

const DataCategory = SearchCategoryType.Tehran;

export const SearchTehran = (query: string, category: string): PhoneCode[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return TehranCodes.filter(
    (c) =>
      c.name.includes(query) ||
      c.eng.includes(query) ||
      c.areas.find((area) => area.name.includes(query))
  );
};
