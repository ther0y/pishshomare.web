import { Code } from "@dataTypes/phone-code";
import { EmergencyCodes } from "@content/data/emergency-codes";
import SearchCategoryType from "@enums/search-category-type";
import { SortCodesByName } from "@content/code-helpers/utils";

const DataCategory = SearchCategoryType.Emergencies;

export const SearchEmergencies = (query: string, category: string): Code[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return EmergencyCodes.filter(
    (c) =>
      c.name.fa.includes(query) ||
      c.name.en.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      c.number.fa.join(",").includes(query) ||
      c.number.en.join(",").includes(query) ||
      c.metadata?.slang?.toLocaleLowerCase().includes(query)
  ).sort(SortCodesByName(query));
};
