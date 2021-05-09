import { Code } from "@dataTypes/phone-code";

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
