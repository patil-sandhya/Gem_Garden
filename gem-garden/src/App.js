import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";
import AdminNavbar from "./Components/AdminComponents/AdminNavbar";

function App() {
  const isAdmin = useSelector((store) => store.AuthReducer.isAdmin);
  console.log(isAdmin);
  return (
    <div>
      {isAdmin ? <AdminNavbar /> : <Navbar />}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
