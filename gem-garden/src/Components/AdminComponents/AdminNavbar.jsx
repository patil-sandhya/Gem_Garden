import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";

function AdminNavbar() {
  const [menu, setmenu] = useState(false);

  const handelMenu = () => {
    setmenu((prev) => !prev);
  };

  const handelLogout = () => {
    localStorage.removeItem("adminId");
  };

  return (
    <DIV>
      <div class="ham">
        <div class="logo">
          <h1>
            <Link to={"/admin"}>GEM GARDEN</Link>
          </h1>
        </div>
        <nav>
          <ul className={`nav-menu ${menu ? "active" : ""}`}>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="/admin">ProductList</Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <li className="nav-links" onClick={handelMenu}>
                <Link to="/">Users</Link>
              </li>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <Link className="link" to={"/addProduct"}>
                Creat Product
              </Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <Link className="link" to={"/"} onClick={handelLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`menu ${menu ? "active" : ""}`} onClick={handelMenu}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </DIV>
  );
}

export default AdminNavbar;

const DIV = styled.div`
  .ham {
    width: 100%;
    background-color: #292525;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    color: azure;
  }
  .logo {
    margin: 0 20px;
  }
  .logo h1 a {
    text-decoration: none;
    color: #fff;
  }
  nav {
    margin: 0 20px;
  }
  .nav-menu {
    display: flex;
    gap: 60px;
  }
  .nav-links {
    list-style: none;
  }
  .nav-links a {
    text-decoration: none;
    color: #fff;
  }
  .menu {
    display: none;
    margin: 0 20px;
    cursor: pointer;
  }
  .bar {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 780px) {
    .menu {
      display: block;
    }
    .menu.active .bar:nth-child(2) {
      opacity: 0;
    }
    .menu.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .menu.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
    .nav-menu {
      position: fixed;
      left: -200%;
      top: 80px;
      gap: 40px;
      flex-direction: column;
      background-color: #292525;
      width: 100%;
      text-align: center;
      transition: 0.3s;
      z-index: 99;
    }
    .nav-links:last-child {
      padding-bottom: 40px;
    }
    .nav-menu.active {
      left: 0;
    }
  }
`;
