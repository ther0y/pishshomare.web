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
      const classes = selected
        ? "bg-lightBlue-500 text-white"
        : active
        ? "bg-lightBlue-400 text-white"
        : "bg-white text-gray-900";

      return (
        <a className={`flex items-center p-1 px-4 ${classes}`}>{item.title}</a>
      );
    }}
  </Menu.Item>
);
export default ActivableMenuItem;
