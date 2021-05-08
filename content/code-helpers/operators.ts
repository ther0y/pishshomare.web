import SearchCategoryType from "@dataTypes/search-category-type";
import { PhoneCode } from "@dataTypes/phone-code";
import { OperatorCodes } from "@content/data/operator-codes";

const DataCategory = SearchCategoryType.Operators;

export const SearchOperators = (
  query: string,
  category: string
): PhoneCode[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return OperatorCodes.filter(
    (c) => c.name.includes(query) || c.eng.includes(query)
  );
};
