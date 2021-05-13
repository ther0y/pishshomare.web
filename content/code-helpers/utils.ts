import { Code } from "@dataTypes/phone-code";
import BaseCardProps from "@dataTypes/props/base-card-props";
import MultiNumberCardProps from "@dataTypes/props/multi-number-card-props";

export const SortCodesByName = (query: string, normalizedQuery?: string) => {
  return (a: Code, b: Code) => {
    if (query && query.length) {
      if (a.name.fa === query || a.name.en === query) return -1;
      if (
        a.name.fa.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()) ||
        a.name.en.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
      )
        return -1;
      if (
        [normalizedQuery, query].includes(b.name.fa) ||
        [normalizedQuery, query].includes(b.name.en)
      )
        return 1;
      if (
        b.name.fa.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()) ||
        b.name.en.toLocaleLowerCase().startsWith(query.toLocaleLowerCase())
      )
        return 1;
    }

    return a.name.fa.localeCompare(b.name.fa);
  };
};

export const CodeToCardProps = (data: Code): BaseCardProps => ({
  title: data.name.fa,
  subtitle: data.name.en,
  type: data.type,
  number: data.number.fa[0],
  emoji: data.metadata?.emoji,
});

export const CodeToCardPropsWithSubtitle = (data: Code): BaseCardProps => ({
  title: data.name.fa,
  subtitle: data.metadata?.areas?.join(" , ") || data.name.en,
  type: data.type,
  number: data.number.fa[0],
});

export const CodeToCardPropsWithMultipleNumbers = (
  data: Code,
  subtitle?: string
): MultiNumberCardProps => ({
  title: data.name.fa,
  subtitle: subtitle || data.name.en,
  type: data.type,
  numbers: data.number.fa,
  emoji: data.metadata?.emoji,
});
