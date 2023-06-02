import "./App.css";
// import AllItemsLayout from "./layouts/allItems/AllItemsLayout";
// import HomeLayout from "./layouts/home/HomeLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProductDetailLayout from "./layouts/productDetails/ProductDetailsLayout";
import {Home, Details, AllItems} from './layouts/layouts'

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
     <AllItems/>
     {/* <Details/>  */}
    </div>
  );
}

export default App;
