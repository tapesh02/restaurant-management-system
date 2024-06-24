import { useState } from "react";
import {
  FormControl,
  AppBar,
  Box,
  Toolbar,
  OutlinedInput,
  IconButton,
  Drawer,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { IoIosMenu } from "react-icons/io";
import RenderDrawer from "./RenderDrawer";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Box >
      <AppBar position="static">
        <Toolbar className="navbar-toolbar-wrapper">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => setOpen(!open)}
          >
            <IoIosMenu />
          </IconButton>
          <img src={logo} alt="logo" className="logo" height={65} />
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
        <Drawer open={open} onClose={() => setOpen(!open)} className="drawer-wrapper">
          <span className="drawer-logo-wrapper">
            <img src={logo} alt="logo" className="drawer-logo" />
          </span>
          <RenderDrawer handleMenu={() => setOpen(!open)} />
        </Drawer>
      </AppBar>
    </Box>
  )
}

export default MobileNavbar;