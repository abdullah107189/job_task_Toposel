import { Outlet } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="max-w-[1440px] mx-auto" style={{ minHeight: `calc(100vh - 54px)` }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
