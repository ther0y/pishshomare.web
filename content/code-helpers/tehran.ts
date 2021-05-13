import { TehranCodes } from "@content/data/tehran-codes";
import { Code } from "@dataTypes/phone-code";
import SearchCategoryType from "../../src/enums/search-category-type";
import { SortCodesByName } from "@content/code-helpers/utils";

const DataCategory = SearchCategoryType.Tehran;

export const SearchTehran = (query: string, category: string): Code[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return TehranCodes.filter(
    (c) =>
      c.name.fa.includes(query) ||
      c.name.en.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      c.number.fa.join(",").includes(query) ||
      c.number.en.join(",").includes(query) ||
      c.metadata?.areas?.join(",").includes(query)
  ).sort(SortCodesByName(query));
};
