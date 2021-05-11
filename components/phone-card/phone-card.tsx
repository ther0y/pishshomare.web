import { FC } from "react";
import { Code, PhoneCode } from "@dataTypes/phone-code";
import SearchCategoryType from "@enums/search-category-type";
import GeneralCard from "@components/phone-card/general-card";
import BaseCard from "@components/phone-card/base-card";
import {
  CodeToCardProps,
  CodeToCardPropsWithMultipleNumbers,
  CodeToCardPropsWithSubtitle,
} from "@content/code-helpers/utils";
import MultiNumberCard from "@components/phone-card/multi-number-card";

const PhoneCard: FC<{ data: PhoneCode | Code }> = ({ data }) => {
  if (
    data.type === SearchCategoryType.Countries ||
    data.type === SearchCategoryType.States ||
    data.type === SearchCategoryType.Emergencies
  ) {
    return <BaseCard {...CodeToCardProps(data as Code)} />;
  } else if (data.type === SearchCategoryType.Operators) {
    return <BaseCard {...CodeToCardPropsWithSubtitle(data as Code)} />;
  } else if (data.type === SearchCategoryType.Embassies) {
    return (
      <MultiNumberCard {...CodeToCardPropsWithMultipleNumbers(data as Code)} />
    );
  } else {
    return <GeneralCard data={data as PhoneCode} />;
  }
};

export default PhoneCard;
