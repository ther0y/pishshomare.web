import { FC } from "react";
import { Code, PhoneCode } from "@dataTypes/phone-code";
import GeneralCard from "@components/phone-card/general-card";
import CountryCard from "@components/phone-card/country-card";
import SearchCategoryType from "@enums/search-category-type";
import OperatorCard from "@components/phone-card/operator-card";

const PhoneCard: FC<{ data: PhoneCode | Code }> = ({ data }) => {
  if (
    data.type === SearchCategoryType.Countries ||
    data.type === SearchCategoryType.States ||
    data.type === SearchCategoryType.Emergencies
  ) {
    return <CountryCard data={data as Code} />;
  } else if (data.type === SearchCategoryType.Operators) {
    return <OperatorCard data={data as Code} />;
  } else {
    return <GeneralCard data={data as PhoneCode} />;
  }
};

export default PhoneCard;
