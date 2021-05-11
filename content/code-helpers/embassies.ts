import { EmbassyCodes } from "@content/data/empassy-codes";
import SearchCategoryType from "@enums/search-category-type";
import { Code } from "@dataTypes/phone-code";
import { SortCodesByName } from "@content/code-helpers/utils";

const DataCategory = SearchCategoryType.Embassies;

export const SearchEmbassies = (query: string, category: string): Code[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return EmbassyCodes.filter(
    (c) =>
      c.name.fa.includes(query) ||
      c.name.en.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      c.number.fa.join(",").includes(query) ||
      c.number.en.join(",").includes(query) ||
      c.metadata?.slang?.toLocaleLowerCase().includes(query)
  ).sort(SortCodesByName(query));
};
