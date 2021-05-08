import SearchCategoryType from "@dataTypes/search-category-type";
import { PhoneCode } from "@dataTypes/phone-code";
import { CountryCodes } from "@content/data/country-codes";

const DataCategory = SearchCategoryType.Countries;

export const SearchCountries = (
  query: string,
  category: string
): PhoneCode[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return CountryCodes.filter(
    (c) =>
      c.name.includes(query.replace("+", "")) ||
      c.eng.includes(query.replace("+", "")) ||
      c.slang?.includes(query)
  );
};
