import "./App.css";
// import AllItemsLayout from "./layouts/allItems/AllItemsLayout";
// import HomeLayout from "./layouts/home/HomeLayout";
import "bootstrap/dist/css/bootstrap.min.css";
// import ProductDetailLayout from "./layouts/productDetails/ProductDetailsLayout";
import { Home, Details, AllItems, Cart, NotFound } from "./layouts/layouts";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <AllItems/> */}
      {/* <Details/>  */}
      {/* <Cart/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/allItems" element={<AllItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
