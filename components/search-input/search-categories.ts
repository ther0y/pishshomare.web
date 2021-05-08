import SearchCategoryType from "@dataTypes/search-category-type";

export const SearchCategories = [
  {
    title: "همه",
    value: SearchCategoryType.All,
  },
  {
    title: "ضروری",
    value: SearchCategoryType.Emergencies,
    classes: "bg-red-400",
  },
  {
    title: "اپراتور ها",
    value: SearchCategoryType.Operators,
    classes: "bg-green-400",
  },
  {
    title: "شهر‌ها و استان ها",
    value: SearchCategoryType.States,
    classes: "bg-lightBlue-400",
  },
  {
    title: "کشور‌ ها",
    value: SearchCategoryType.Countries,
    classes: "bg-blue-400",
  },
  {
    title: "مناطق تهران",
    value: SearchCategoryType.Tehran,
    classes: "bg-gray-600",
  },
  {
    title: "سفارتخانه ها",
    value: SearchCategoryType.Embassies,
    classes: "bg-purple-400",
  },
  {
    title: "پلاک خودرو",
    value: SearchCategoryType.Plates,
    classes: "bg-pink-400",
  },
];
