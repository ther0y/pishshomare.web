import { SearchStates } from "./states";
import { SearchCountries } from "./countries";
import { SearchOperators } from "./operators";
import { SearchPlates } from "./plates";
import { SearchEmergencies } from "./emergencies";
import { SearchTehran } from "./tehran";
import { SearchEmbassies } from "./embassies";
import { PhoneCode } from "@dataTypes/phone-code";

export const SearchCodes = (query: string, category: string): PhoneCode[] => {
  return [
    ...SearchStates(query, category),
    ...SearchTehran(query, category),
    ...SearchCountries(query, category),
    ...SearchOperators(query, category),
    ...SearchPlates(query, category),
    ...SearchEmergencies(query, category),
    ...SearchEmbassies(query, category),
  ];
};
