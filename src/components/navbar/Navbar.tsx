import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import { menuList } from "../../helpers/dataHelpers"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const handleMenu = () => {
    setOpen(!open);
  };

  const RenderDrawer = () =>
    menuList.map(({ id, menuitem, icon }) => {
      const toPath =
        menuitem.toLowerCase() === "dashboard"
          ? "/"
          : `/${menuitem.toLowerCase()}`;
      const Icon = icon;
      return (
        <div
          className="desktop-menu-list-wrapper"
          key={id}
          role="presentation"
        >
          <NavLink
            to={toPath}
            className="desktop-menu-list"
            onClick={handleMenu}
          >
            <span>{<Icon />}</span>
            {menuitem}
          </NavLink>
        </div>
      );
    });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const drawer = document.querySelector<HTMLElement>(".navbar-wrapper")!;
      if (scrollTop > 5) {
        drawer.style.top = "14%";
        drawer.style.height = "calc(100vh - 6.31rem)";
      } else {
        drawer.style.top = "12%";
        drawer.style.height = "calc(100vh - 5.31rem)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className="navbar-wrapper">
      <RenderDrawer />
    </Box>
  );
};
export default Navbar;
