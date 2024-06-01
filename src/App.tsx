import PageRoutes from "./PageRoutes";
import Appbar from "./components/navbar/Appbar";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Appbar />
      <div className="main-app">
        <Navbar />
        <PageRoutes />
      </div>
    </>
  );
};

export default App;
