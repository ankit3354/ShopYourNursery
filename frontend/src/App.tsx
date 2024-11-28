import Blog from "./Page/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Navbar from "./components/Navbar";
import Order from "./Page/Order";
import ShopPlants from "./Page/ShopPlants";
import PlantCare from "./Page/PlantCare";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/order"} element={<Order />} />
        <Route path={"/shopplants"} element={<ShopPlants />} />
        <Route path={"/plantcare"} element={<PlantCare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
