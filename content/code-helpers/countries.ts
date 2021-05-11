import { Code } from "@dataTypes/phone-code";
import { CountryCodes } from "@content/data/country-codes";
import { SortCodesByName } from "@content/code-helpers/utils";
import SearchCategoryType from "@enums/search-category-type";

const DataCategory = SearchCategoryType.Countries;

export const SearchCountries = (query: string, category: string): Code[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  const q = query.replace("+", "");

  return CountryCodes.filter(
    (c) =>
      c.name.fa.includes(query) ||
      c.name.en.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      c.number.fa.join(",").includes(q) ||
      c.number.en.join(",").includes(q) ||
      c.metadata?.slang?.toLocaleLowerCase().includes(query)
  ).sort(SortCodesByName(query, q));
};
