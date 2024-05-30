import { useState } from 'react';
import {
  FormControl,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  OutlinedInput,
  Drawer,
} from '@mui/material';
import { IoIosMenu } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import logo from '../../assets/logo.png';
import {
  MdOutlineDashboard,
  MdOutlineSettings,
  MdGroups,
  MdOutlineLocalLibrary,
  MdOutlineFormatLineSpacing,
  MdOutlineInventory,
} from 'react-icons/md';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuList = [
    { id: 1, menuitem: 'Dashboard', icon: <MdOutlineDashboard size={20} /> },
    { id: 2, menuitem: 'Team', icon: <MdGroups size={20} /> },
    {
      id: 3,
      menuitem: 'Reservations',
      icon: <MdOutlineLocalLibrary size={20} />,
    },
    {
      id: 4,
      menuitem: 'Revenue',
      icon: <MdOutlineFormatLineSpacing size={20} />,
    },
    { id: 5, menuitem: 'Inventory', icon: <MdOutlineInventory size={20} /> },
    { id: 6, menuitem: 'Others', icon: <IoIosMenu size={20} /> },
    { id: 7, menuitem: 'Settings', icon: <MdOutlineSettings size={20} /> },
  ];

  const handleMenu = () => {
    setOpen(!open);
  };

  const RenderDrawer = () =>
    menuList.map((menu) => (
      <div className="menu-list-wrapper" key={menu.id} role="presentation">
        <li className="menu-list" onClick={handleMenu}>
          <span>{menu.icon}</span>
          {menu.menuitem}
        </li>
      </div>
    ));

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
          <RenderDrawer />
        </Drawer>
      </AppBar>
    </Box>
  );
};
export default Navbar;
