import { Code } from "@dataTypes/phone-code";
import { PlateCodes } from "@content/data/plate-codes";
import SearchCategoryType from "../../src/enums/search-category-type";
import { SortCodesByName } from "@content/code-helpers/utils";

const DataCategory = SearchCategoryType.Plates;

export const SearchPlates = (query: string, category: string): Code[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return PlateCodes.filter(
    (c) =>
      c.name.fa.includes(query) ||
      c.name.en.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      c.number.fa.join(",").includes(query) ||
      c.number.en.join(",").includes(query)
  ).sort(SortCodesByName(query));
};
