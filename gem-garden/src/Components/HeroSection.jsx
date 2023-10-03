import React from 'react'
import styled from 'styled-components'
import heroimg from "../Assets/Hero_image.jpg";

function HeroSection() {
  return (
    <DIV>
      <div className="hero-img">
        <img src={heroimg} />
        <div className="hero-text">
          <h1>
            Your Jewlry Search <br />
            Starts Here
          </h1>
          <p>
            Discover the perfect jewlry pieces <br />
            for your uique style at our store
          </p>
        </div>
      </div>
    </DIV>
  )
}

export default HeroSection

const DIV = styled.div`
     @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");
     /* margin: 0; */
     /* padding: 0; */
width: 100%;
.hero-img {
  width: 100%;
  object-position: center;
  position: relative;
  z-index: -1;
}
img {
  object-fit: cover;
  width: 100%;
  /* object-position: center; */
}
.hero-text {
  position: absolute;
  top: 35%;
  left: 5%;
  color: white;
}
.hero-text h1 {
  font-family: "Oswald", sans-serif;
  line-height: 50px;
  letter-spacing: 3px;
}
.hero-text p {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 400;
  line-height: 30px;
  font-size: medium;
  letter-spacing: 1px;
}
`
