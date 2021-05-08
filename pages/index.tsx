import MainLayout from "@layouts/main";
import HomePage from "@components/home-page/home-page";
import { SearchCodes } from "@content/code-helpers";
import { GetStaticProps } from "next";
import { PhoneCode } from "@dataTypes/phone-code";
import SearchCategoryType from "@dataTypes/search-category-type";

export default function Home(props: { codes: PhoneCode[] }) {
  return (
    <MainLayout>
      <HomePage codes={props.codes} />
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      codes: SearchCodes("", SearchCategoryType.All),
    },
  };
};
