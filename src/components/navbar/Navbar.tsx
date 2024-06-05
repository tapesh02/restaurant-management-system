import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import {
  MdOutlineDashboard,
  MdOutlineSettings,
  MdGroups,
  MdOutlineLocalLibrary,
  MdOutlineFormatLineSpacing,
  MdOutlineInventory,
} from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuList = [
    { id: 1, menuitem: "Dashboard", icon: <MdOutlineDashboard size={20} /> },
    { id: 2, menuitem: "Tables", icon: <MdGroups size={20} /> },
    {
      id: 3,
      menuitem: "Reservations",
      icon: <MdOutlineLocalLibrary size={20} />,
    },
    {
      id: 4,
      menuitem: "Revenue",
      icon: <MdOutlineFormatLineSpacing size={20} />,
    },
    { id: 5, menuitem: "Inventory", icon: <MdOutlineInventory size={20} /> },
    { id: 6, menuitem: "Others", icon: <IoIosMenu size={20} /> },
    { id: 7, menuitem: "Settings", icon: <MdOutlineSettings size={20} /> },
  ];

  const handleMenu = () => {
    setOpen(!open);
  };

  const RenderDrawer = () =>
    menuList.map((menu) => {
      const toPath =
        menu.menuitem.toLowerCase() === "dashboard"
          ? "/"
          : `/${menu.menuitem.toLowerCase()}`;
      return (
        <div
          className="desktop-menu-list-wrapper"
          key={menu.id}
          role="presentation"
        >
          <NavLink to={toPath} className="desktop-menu-list" onClick={handleMenu}>
            <span>{menu.icon}</span>
            {menu.menuitem}
          </NavLink>
        </div>
      );
    });

  return (
    <Box className="navbar-wrapper">
      <RenderDrawer />
    </Box>
  );
};
export default Navbar;
