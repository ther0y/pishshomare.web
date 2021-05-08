import SearchCategoryType from "@dataTypes/search-category-type";
import { PhoneCode } from "@dataTypes/phone-code";
import { EmbassyCodes } from "@content/data/empassy-codes";

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
