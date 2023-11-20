import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
      </Outlet>
      <Footer></Footer>
    </>
  )
};

export default App;
