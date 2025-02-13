import { Outlet } from "react-router-dom";
import Navbar from "./componets/Navbar/Navbar";

function App() {
  return (
    <div className="text-blue-400">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
