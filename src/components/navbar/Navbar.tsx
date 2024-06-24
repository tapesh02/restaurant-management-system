import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import RenderDrawer from "./RenderDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const handleMenu = () => {
    setOpen(!open);
  };


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
      <RenderDrawer handleMenu={handleMenu}/>
    </Box>
  );
};
export default Navbar;
