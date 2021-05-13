import { Code } from "@dataTypes/phone-code";
import { StateCodes } from "@content/data/state-codes";
import SearchCategoryType from "../../src/enums/search-category-type";
import { SortCodesByName } from "@content/code-helpers/utils";

const DataCategory = SearchCategoryType.States;

export const SearchStates = (query: string, category: string): Code[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return StateCodes.filter(
    (c) =>
      c.name.fa.includes(query) ||
      c.name.en.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      c.number.fa.join(",").includes(query) ||
      c.number.en.join(",").includes(query) ||
      c.cities?.find((ct) => ct.name.includes(query))
  ).sort(SortCodesByName(query));
};
