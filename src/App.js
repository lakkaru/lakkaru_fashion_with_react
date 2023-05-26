import "./App.css";
import AllItems from "./layouts/AllItems";
// import HomeLayout from "./layouts/HomeLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import GridSpacing from "./layouts/GridSpacing";

function App() {
  return (
    <div className="App">
      {/* <HomeLayout/> */}
      <AllItems/>
      {/* <GridSpacing/> */}
    </div>
  );
}

export default App;
