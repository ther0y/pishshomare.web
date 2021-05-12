import { SearchStates } from "./states";
import { SearchCountries } from "./countries";
import { SearchOperators } from "./operators";
import { SearchPlates } from "./plates";
import { SearchEmergencies } from "./emergencies";
import { SearchTehran } from "./tehran";
import { SearchEmbassies } from "./embassies";
import { Code, PhoneCode } from "@dataTypes/phone-code";
import { SortCodesByName } from "@content/code-helpers/utils";

export const SearchCodes = (
  query: string,
  category: string
): (PhoneCode | Code)[] => {
  return [
    ...[
      ...SearchStates(query, category),
      ...SearchCountries(query, category),
      ...SearchEmergencies(query, category),
      ...SearchOperators(query, category),
      ...SearchEmbassies(query, category),
      ...SearchPlates(query, category),
    ].sort(SortCodesByName(query)),
    ...SearchTehran(query, category),
  ];
};
