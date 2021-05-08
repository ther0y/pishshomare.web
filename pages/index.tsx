import MainLayout from "@layouts/main";
import SearchInput from "@components/search-input/search-input";

export default function Home() {
  return (
    <MainLayout>
      <div className="mt-14" dir="rtl">
        <div className="max-w-4xl flex flex-col justify-center mx-auto p-4">
          <div className="mb-4 text-3xl font-semibold text-gray-900">
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
