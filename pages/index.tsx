import MainLayout from "@layouts/main";
import SearchInput from "@components/search-input/search-input";

export default function Home() {
  return (
    <MainLayout>
      <div
        className="pt-8 pb-0 bg-gradient-to-r from-lightBlue-400 to-lightBlue-500"
        dir="rtl"
      >
        <div className="max-w-4xl flex flex-col justify-center mx-auto p-4">
          <div className="mb-4 text-2xl sm:text-3xl font-semibold text-white">
            پیش‌شماره
          </div>
          <div className="flex-1 max-w-4xl">
            <SearchInput />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
