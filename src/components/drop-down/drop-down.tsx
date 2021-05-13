import { FC, useState } from "react";
import { Menu } from "@headlessui/react";
import tw from "twin.macro";
import { css } from "@emotion/css";

import { ChevronDownIcon } from "@heroicons/react/solid";
import DropDownItem from "@dataTypes/drop-down-item";
import { SearchCategory } from "@dataTypes/search-category";
import ActivableMenuItem from "@components/drop-down/activable-menu-item";

interface DropDownProps {
  items: DropDownItem[];
  initialCategory: SearchCategory;
  onChange: (item: DropDownItem) => void;
}

const DropDown: FC<DropDownProps> = ({ items, onChange, initialCategory }) => {
  const [selected, setSelected] = useState(initialCategory);

  const handleItemSelect = (item: SearchCategory) => {
    setSelected(item);
    onChange(item);
  };

  const buttonClasses = css({
    minWidth: "80px",
    fontSize: "16px",
    ...tw`border-r text-gray-600 px-4 relative`,
  });

  const popupClasses = css({
    position: "absolute",
    minWidth: "160px",
    overflow: "hidden",
    ...tw`bg-white shadow-lg rounded border-0 top-0 left-0 lg:right--1 z-10`,
  });

  const MenuItems = items.map((item) => (
    <ActivableMenuItem
      key={item.title}
      item={item}
      selected={selected.value === item.value}
      onSelect={handleItemSelect}
    />
  ));

  return (
    <Menu>
      <Menu.Button className={buttonClasses}>
        <div className="flex items-center text-xs sm:text-base">
          {selected.title}
          <ChevronDownIcon className="h-5 w-5 mr-1 top" />
        </div>
        <Menu.Items as="div" className={popupClasses}>
          {MenuItems}
        </Menu.Items>
      </Menu.Button>
    </Menu>
  );
};

export default DropDown;
