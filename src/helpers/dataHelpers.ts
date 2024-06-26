import {
  MdOutlineDashboard,
  MdOutlineSettings,
  MdGroups,
  MdOutlineLocalLibrary,
  MdOutlineFormatLineSpacing,
  MdOutlineInventory,
} from "react-icons/md";
import { IconType } from "react-icons"

interface ImenuList {
  id: number,
  menuitem: string,
  icon: IconType;
}

export const menuList: ImenuList[] = [
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


interface ItableData {
  tableNumber: number,
  serverName: string,
  orderStatus: string,
  customerName: string,
}

export const tableData: ItableData[] = [
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


interface ItableCards {
  totalNumber: number,
  header: string,
}

export const tableCards: ItableCards[] = [
  { header: "Total Tables", totalNumber: 20 },
  { header: "Active Tables", totalNumber: 12 },
  { header: "Team Members", totalNumber: 25 },
];

interface IfavFoods {
  id: number,
  dishName: string,
  timesOrdered: number,
  image: string
}

export const favFoods: IfavFoods[] = [
  {
    id: 1,
    dishName: "Chiken Tikka Masala",
    timesOrdered: 25,
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    dishName: "Veg Kolhapuri",
    timesOrdered: 10,
    image:
      "https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    dishName: "Chicken Handi",
    timesOrdered: 55,
    image:
      "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    dishName: "Veg Kolhapuri",
    timesOrdered: 10,
    image:
      "https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    dishName: "Chicken Handi",
    timesOrdered: 55,
    image:
      "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

