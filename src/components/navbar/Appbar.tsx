import {
    FormControl,
    AppBar,
    Box,
    Toolbar,
    OutlinedInput,
  } from "@mui/material";
  import { CiSearch } from "react-icons/ci";
  import logo from "../../assets/logo.png";

const Appbar = () => { 
    return (
      <Box className="appbar-wrapper">
        <AppBar position="static">
        <Toolbar className="navbar-toolbar-wrapper">
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
      </AppBar>
      </Box>
    )
}

export default Appbar;