import { FC, useState } from "react";
import { Menu } from "@headlessui/react";
import tw from "twin.macro";
import { css } from "@emotion/css";
import ActivableMenuItem from "@components/drop-down/activable-menu-item";
import DropDownItem from "@dataTypes/drop-down-item";

import { ChevronDownIcon } from "@heroicons/react/solid";

interface DropDownProps {
  items: DropDownItem[];
  onChange: (item: DropDownItem) => void;
}

const DropDown: FC<DropDownProps> = ({ items, onChange }) => {
  const [selected, setSelected] = useState(items[0]);

  const handleItemSelect = (item: DropDownItem) => {
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
    ...tw`bg-white shadow-lg rounded border-0 top-0 left-0 lg:right--1`,
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
