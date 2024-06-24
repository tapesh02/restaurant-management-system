import { useTheme, useMediaQuery } from "@mui/material";
import PageRoutes from "./PageRoutes";
import Appbar from "./components/navbar/Appbar";
import Navbar from "./components/navbar/Navbar";
import MobileNavbar from "./components/navbar/MobileNavbar";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {!isMobile ? <Appbar /> : <MobileNavbar />}
      <div className="main-app">
        {!isMobile && <Navbar />}
        <PageRoutes />
      </div>
    </>
  );
};

export default App;
