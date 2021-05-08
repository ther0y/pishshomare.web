import { FC } from "react";
import SearchInput from "@components/search-input/search-input";
import PhoneCard from "@components/phone-card/phone-card";
import { useCallback, useState } from "react";
import { PhoneCode } from "@dataTypes/phone-code";

interface HomePageProps {
  codes: PhoneCode[];
}

const HomePage: FC<HomePageProps> = ({ codes: initialCodes }) => {
  const [codes, setCodes] = useState<PhoneCode[]>(initialCodes);

  const handleResult = useCallback((results) => setCodes(results), []);
  return (
    <>
      <div
        className="pt-8 pb-0 bg-gradient-to-r from-lightBlue-400 to-lightBlue-500 sticky top-0 z-30 shadow-lg"
        dir="rtl"
      >
        <div className="max-w-4xl flex flex-col justify-center mx-auto p-4">
          <div className="mb-4 text-2xl sm:text-3xl font-semibold text-white text-center sm:text-right">
            پیش‌شماره
          </div>
          <div className="flex-1 max-w-4xl">
            <SearchInput onResult={handleResult} />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto space-y-3 gap-4 my-3 px-4" dir="rtl">
        {codes.map((code) => (
          <PhoneCard key={code.name} data={code} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
