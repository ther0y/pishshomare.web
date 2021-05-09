import { FC } from "react";
import BaseCard from "@components/phone-card/base-card";
import { Code } from "@dataTypes/phone-code";

const CountryCard: FC<{ data: Code }> = ({ data }) => {
  return (
    <BaseCard
      title={data.name.fa}
      subtitle={data.name.en}
      type={data.type}
      number={data.number.fa[0]}
      emoji={data.metadata?.emoji}
    />
  );
};

export default CountryCard;
