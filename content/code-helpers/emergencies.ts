import SearchCategoryType from "@dataTypes/search-category-type";
import { PhoneCode } from "@dataTypes/phone-code";
import { EmergencyCodes } from "@content/data/emergency-codes";

const DataCategory = SearchCategoryType.Emergencies;

export const SearchEmergencies = (
  query: string,
  category: string
): PhoneCode[] => {
  if (category !== DataCategory && category !== SearchCategoryType.All) {
    return [];
  }

  return EmergencyCodes.filter(
    (c) => c.name.includes(query) || c.eng.includes(query)
  );
};
