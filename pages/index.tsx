import MainLayout from "@layouts/main";
import HomePage from "@components/home-page/home-page";
import { SearchCodes } from "@content/code-helpers";
import { GetStaticProps } from "next";
import { PhoneCode } from "@dataTypes/phone-code";
import SearchCategoryType from "@enums/search-category-type";
import { SearchCategory } from "@dataTypes/search-category";

interface HomeProps {
  codes: PhoneCode[];
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
