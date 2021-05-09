import { PhoneCode } from "@dataTypes/phone-code";
import { EmbassyCodes } from "@content/data/empassy-codes";
import SearchCategoryType from "@enums/search-category-type";

const DataCategory = SearchCategoryType.Embassies;

export const SearchEmbassies = (
  query: string,
  category: string
): PhoneCode[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return EmbassyCodes.filter(
    (c) =>
      c.name.includes(query) || c.eng.includes(query) || c.phone.includes(query)
  );
};
