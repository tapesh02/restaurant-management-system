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


interface TableData {
  tableNumber: number,
  serverName: string,
  orderStatus: string,
  customerName: string,
}

export const tableData: TableData[] = [
  {
    tableNumber: 1,
    serverName: "Kunal Kamra",
    orderStatus: "served",
    customerName: "Jane Smith",
  },
  {
    tableNumber: 2,
    serverName: "Think Tank",
    orderStatus: "preparing",
    customerName: "John Smith",
  },
  {
    tableNumber: 3,
    serverName: "Cool Dude",
    orderStatus: "waiting",
    customerName: "Joe Smith",
  },
];


interface TableCards {
  totalNumber: number,
  header: string,
}

export const tableCards: TableCards[] = [
  { header: "Total Tables", totalNumber: 20 },
  { header: "Active Tables", totalNumber: 12 },
  { header: "Team Members", totalNumber: 25 },
];

