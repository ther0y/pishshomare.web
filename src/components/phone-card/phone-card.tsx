import { FC } from "react";
import { Code } from "@dataTypes/phone-code";

import {
  CodeToCardProps,
  CodeToCardPropsWithMultipleNumbers,
  CodeToCardPropsWithSubtitle,
} from "@content/code-helpers/utils";
import SearchCategoryType from "@enums/search-category-type";
import BaseCard from "@components/phone-card/base-card";
import MultiNumberCard from "@components/phone-card/multi-number-card";

const PhoneCard: FC<{ data: Code }> = ({ data }) => {
  if (data.type === SearchCategoryType.Operators) {
    return <BaseCard {...CodeToCardPropsWithSubtitle(data)} />;
  }

  if (
    data.type === SearchCategoryType.Embassies ||
    data.type === SearchCategoryType.Plates
  ) {
    return <MultiNumberCard {...CodeToCardPropsWithMultipleNumbers(data)} />;
  }

  if (data.type === SearchCategoryType.Tehran) {
    return (
      <MultiNumberCard
        {...CodeToCardPropsWithMultipleNumbers(
          data,
          data.metadata?.areas?.join("، ")
        )}
      />
    );
  }

  return <BaseCard {...CodeToCardProps(data)} />;
};

export default PhoneCard;
