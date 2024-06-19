import {
  MdOutlineDashboard,
  MdOutlineSettings,
  MdGroups,
  MdOutlineLocalLibrary,
  MdOutlineFormatLineSpacing,
  MdOutlineInventory,
} from "react-icons/md";
import { IconType } from "react-icons"

interface MenuList {
  id: number,
  menuitem: string,
  icon: IconType;
}

export const menuList: MenuList[] = [
  { id: 1, menuitem: "Dashboard", icon: MdOutlineDashboard },
  { id: 2, menuitem: "Tables", icon: MdGroups },
  {
    id: 3,
    menuitem: "Reservations",
    icon: MdOutlineLocalLibrary,
  },
  {
    id: 4,
    menuitem: "Revenue",
    icon: MdOutlineFormatLineSpacing,
  },
  { id: 5, menuitem: "Inventory", icon: MdOutlineInventory },
  { id: 6, menuitem: "Settings", icon: MdOutlineSettings },

];