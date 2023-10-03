import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menu, setmenu] = useState(false);

  const handelMenu = () => {
    setmenu((prev) => !prev);
  };

  console.log(menu);
  return (
    <DIV>
      <div className="ham">
        <div className={`menu ${menu ? "active" : ""}`} onClick={handelMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav>
          <ul className={`nav-menu ${menu ? "active" : ""}`}>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="/orders">Orders</Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="/login">Account</Link>
            </li>
            <li className="nav-links bag-number" onClick={handelMenu}>
              <Link to="/cart">Bag</Link>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <h1>
            <Link to={"/"}>GEM GARDEN</Link>
          </h1>
        </div>
        <nav>
          <ul className={`nav-menu ${menu ? "active" : ""}`}>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="/ProductList?category=Rings&category=Brecelets&category=Earrning">
                Jewelry
              </Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
              <Link to="/ProductList?brand=Rolex&brand=OMEGA">Watches</Link>
            </li>
            <li className="nav-links" onClick={handelMenu}>
            <Link className="link"to={"/"}>Gifts</Link>

            </li>
          </ul>
        </nav>
        <div className="bag">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingBag} />
          </Link>
        </div>
      </div>
      
    </DIV>
  );
}

export default Navbar;

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
  a {
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
  .bag {
    display: none;
    margin: 0 20px;
    cursor: pointer;
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
      left: -120%;
      top: 60px;
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
    .bag {
      display: block;
    }
  }
`;