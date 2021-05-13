import { SearchCategory } from "@dataTypes/search-category";
import SearchCategoryType from "@enums/search-category-type";

export const SearchCategories: SearchCategory[] = [
  {
    title: "همه",
    value: SearchCategoryType.All,
    classes: "",
    slug: "",
  },
  {
    title: "ضروری",
    value: SearchCategoryType.Emergencies,
    classes: "bg-red-400",
    slug: "ضروری",
  },
  {
    title: "اپراتور ها",
    value: SearchCategoryType.Operators,
    classes: "bg-green-400",
    slug: "اپراتور-ها",
  },
  {
    title: "استان ها",
    value: SearchCategoryType.States,
    classes: "bg-lightBlue-400",
    slug: "استان-ها",
  },
  {
    title: "کشور ها",
    value: SearchCategoryType.Countries,
    classes: "bg-blue-400",
    slug: "کشور_ها",
  },
  {
    title: "سفارتخانه ها",
    value: SearchCategoryType.Embassies,
    classes: "bg-purple-400",
    slug: "سفارتخانه-ها",
  },
  {
    title: "پلاک خودرو",
    value: SearchCategoryType.Plates,
    classes: "bg-pink-400",
    slug: "پلاک-خودرو",
  },
  {
    title: "مناطق تهران",
    value: SearchCategoryType.Tehran,
    classes: "bg-gray-600",
    slug: "مناطق-تهران",
  },
];
