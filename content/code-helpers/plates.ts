import SearchCategoryType from "@dataTypes/search-category-type";
import { PhoneCode } from "@dataTypes/phone-code";
import { PlateCodes } from "@content/data/plate-codes";

const DataCategory = SearchCategoryType.Plates;

export const SearchPlates = (query: string, category: string): PhoneCode[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return PlateCodes.filter(
    (c) => c.name.includes(query) || c.eng.includes(query)
  );
};
