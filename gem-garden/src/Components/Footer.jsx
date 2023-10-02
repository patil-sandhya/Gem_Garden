import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <DIV>
      <div className="parent">
        <div className="container">
          <div className="child-1">
            <h1><Link to={"/"}>GEM GARDEN</Link></h1>
            <div className="socialMediaLinks">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
          <div className="child-2">
            <p>Contact Us</p>
            <p>Servise</p>
            <p>Return</p>
            <p>Sterms of use</p>
            <p>How to Order?</p>
          </div>
          <div className="child-3">
            <p>Rings</p>
            <p>Bracelets</p>
            <p>Earring</p>
            <p>Necklaces & Pendants</p>
            <p>Watches</p>
          </div>
          <div className="child-4">
            <div>
              <p className="child-4-heading">
                Discover the latest collections,news <br />
                and exclusive launches
              </p>
              <div className="bar"></div>
            </div>
            <div className="child-4-buttom">
              <p>Legal notice</p>
              <p>Privacy policy</p>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
}

export default Footer;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");

  .parent {
    display: grid;
    background-color: #2e2c2d;
  }
  .container {
    display: grid;
    width: 90%;
    margin: 70px auto;
    grid-template-columns: repeat(4, 1fr);
  }
  .child-1 {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .child-1 h1 a{
    text-decoration: none;
    color: white;
  }
  .socialMediaLinks {
    width: 200px;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    cursor: pointer;
  }
  .socialMediaLinks :hover {
    color: #9a9296;
  }
  .child-2,
  .child-3 {
    font-family: "Nunito Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #938c90;
    cursor: pointer;
  }
  .child-4{
    color: white;
    font-family: "Nunito Sans", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
  }
  .child-4-heading{
    letter-spacing: 1px;
    font-weight: 400;
    line-height: 30px;
    font-size: 20px;
  }
  .bar{
    height: 2px;
    background-color: white;
  }
  .child-4-buttom{
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  @media (max-width: 780px) {
    .container{
      grid-template-columns: repeat(2,1fr);
      gap: 15px;
    }
  }
`;
