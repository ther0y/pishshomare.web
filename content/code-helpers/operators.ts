import { Code } from "@dataTypes/phone-code";
import { OperatorCodes } from "@content/data/operator-codes";
import SearchCategoryType from "@enums/search-category-type";
import { SortCodesByName } from "@content/code-helpers/utils";

const DataCategory = SearchCategoryType.Operators;

export const SearchOperators = (query: string, category: string): Code[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return OperatorCodes.filter(
    (c) =>
      c.name.fa.includes(query) ||
      c.name.en.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      c.number.fa.join(",").includes(query) ||
      c.number.en.join(",").includes(query) ||
      c.metadata?.areas.find((a) => a.includes(query))
  ).sort(SortCodesByName(query));
};
