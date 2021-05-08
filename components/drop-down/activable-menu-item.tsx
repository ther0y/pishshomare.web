import { FC } from "react";
import { Menu } from "@headlessui/react";
import DropDownItem from "@dataTypes/drop-down-item";

interface ActivableMenuItemProps {
  item: DropDownItem;
  disabled?: boolean;
  selected?: boolean;
  onSelect?: (item: DropDownItem) => void;
}

const ActivableMenuItem: FC<ActivableMenuItemProps> = ({
  item,
  disabled,
  selected,
  onSelect,
}) => (
  <Menu.Item disabled={disabled} onClick={() => onSelect && onSelect(item)}>
    {({ active }) => {
      const activeAndSelectedClasses =
        active && selected ? "bg-indigo-500 text-white" : "";

      const selectedClasses = selected
        ? active
          ? activeAndSelectedClasses
          : "bg-indigo-400 text-white"
        : "";

      const activeClasses = active ? "bg-indigo-500 text-white" : "";

      const notActiveOrSelectedClasses =
        !active && !selected ? "bg-white text-gray-900" : "";

      return (
        <a
          className={`flex items-center p-1 px-4 ${activeClasses} ${selectedClasses} ${activeAndSelectedClasses} ${notActiveOrSelectedClasses}`}
        >
          {item.title}
        </a>
      );
    }}
  </Menu.Item>
);
export default ActivableMenuItem;
