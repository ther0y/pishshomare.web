import { FC, useCallback, useState } from "react";
import { Code } from "@dataTypes/phone-code";
import { SearchCategory } from "@dataTypes/search-category";
import SearchInput from "@components/search-input/search-input";
import PhoneCard from "@components/phone-card/phone-card";

interface HomePageProps {
  codes: Code[];
  initialCategory: SearchCategory;
}

const HomePage: FC<HomePageProps> = ({
  codes: initialCodes,
  initialCategory,
}) => {
  const [codes, setCodes] = useState<Code[]>(initialCodes);

  const handleResult = useCallback((results) => {
    setCodes(results);
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div
        className="pt-8 pb-0 bg-gradient-to-r from-lightBlue-400 to-lightBlue-500 sticky top-0 z-30 shadow-lg"
        dir="rtl"
      >
        <div className="max-w-4xl flex flex-col justify-center mx-auto p-4">
          <h1 className="mb-4 text-2xl sm:text-3xl font-semibold text-white text-center sm:text-right">
            پیش شماره
          </h1>
          <div className="flex-1 max-w-4xl">
            <SearchInput
              onResult={handleResult}
              placeholder={
                initialCategory &&
                `جستجو در ${initialCategory.title} با نام یا شماره`
              }
              initialCategory={initialCategory}
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-y-3 gap-4 my-3 px-4" dir="rtl">
        {codes.map((code) => {
          const key = code.name.en + code.number.en[0];

          return <PhoneCard key={key as string} data={code} />;
        })}
      </div>
    </main>
  );
};

export default HomePage;
