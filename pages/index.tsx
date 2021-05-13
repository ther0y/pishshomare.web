import MainLayout from "../src/layouts/main";
import HomePage from "../src/components/home-page/home-page";
import { SearchCodes } from "@content/code-helpers";
import { GetStaticProps } from "next";
import { Code } from "@dataTypes/phone-code";
import SearchCategoryType from "../src/enums/search-category-type";
import { SearchCategory } from "@dataTypes/search-category";

interface HomeProps {
  codes: Code[];
  category: SearchCategory;
}

export default function Home({ codes, category }: HomeProps) {
  return (
    <MainLayout>
      <HomePage codes={codes} initialCategory={category} />
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      codes: SearchCodes("", SearchCategoryType.All).slice(0, 25),
      initialCategory: SearchCategoryType.All,
    },
  };
};
