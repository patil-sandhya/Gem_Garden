import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";
import AdminNavbar from "./Components/AdminComponents/AdminNavbar";
import { useEffect } from "react";

function App() {
  let isAdmin = localStorage.getItem("adminId") 
  useEffect(()=>{
    isAdmin = localStorage.getItem("adminId")
  },[isAdmin])
  console.log(isAdmin);
  return (
    <div>
      {isAdmin == "admin" ? <AdminNavbar/> : <Navbar/>}
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
