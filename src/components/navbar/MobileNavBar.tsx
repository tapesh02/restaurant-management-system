import { useState } from "react";
import {
  FormControl,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  OutlinedInput,
  Drawer,
} from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/logo.png";
import RenderDrawer from "./RenderDrawer";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
 
  const handleMenu = () => {
    setOpen(!open);
  };;

  return (
    <Box className="navbar-wrapper">
      <AppBar position="static">
        <Toolbar className="navbar-toolbar-wrapper">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <IoIosMenu />
          </IconButton>
          <img src={logo} alt="logo" className="logo" />
          <Box className="search-input-wrapper">
            <CiSearch size={25} />
            <FormControl className="search-input" variant="standard">
              <OutlinedInput
                placeholder="Search"
                className="search-input-content"
              />
            </FormControl>
          </Box>
        </Toolbar>
        <Drawer open={open} onClose={handleMenu} className="drawer-wrapper">
          <span className="drawer-logo-wrapper">
            <img src={logo} alt="logo" className="drawer-logo" />
          </span>
          <RenderDrawer handleMenu={handleMenu}/>
        </Drawer>
      </AppBar>
    </Box>
  );
};
export default MobileNavbar;
