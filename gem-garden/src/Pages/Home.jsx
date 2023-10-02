import React, { useState } from "react";
import styled from "styled-components";
import product_1 from "../Assets/new-collection-product-1.jpg";
import product_2 from "../Assets/new-collection-product-2.jpg";
import product_3 from "../Assets/new-collection-product-3.jpg";
import product_4 from "../Assets/new-collection-product-4.jpg";
import Collectioncard from "../Components/Collectioncard";
import collection_1 from "../Assets/collection-1.jpg";
import collection_2 from "../Assets/collection-2.jpg";
import collection_3 from "../Assets/collection-3.jpg";
import collection_4 from "../Assets/collection-4.jpg";
import collection_5 from "../Assets/collection-5.jpg";
import collection_6 from "../Assets/collection-6.jpg";
import { Link } from "react-router-dom";
import HeroSection from "../Components/HeroSection";
import BestSellerCard from "../Components/BestSellerCard";
import best_seller_1 from "../Assets/bestSeller-1.jpg";
import best_seller_2 from "../Assets/bestSeller-2.jpg";
import best_seller_3 from "../Assets/bestSeller-3.jpg";
import best_seller_4 from "../Assets/bestSeller-4.jpg";
import gift from "../Assets/gift.jpg";
import about from "../Assets/about.jpg";

function Home() {
  const [count, setCount] = useState(3);

  const handelCount = (val) => {
    setCount(val);
  };

  console.log(count);
  return (
    <DIV>
      <HeroSection />

      {/* hero part complete */}

      <div className="new-collections">
        <div className="new-collections-heading">
          <div>
            <h2>New Collections</h2>
            <p>Check Out the New Collections of Famous Brands</p>
          </div>
          <div className="new-collections-heading-right">
            <p>
              <Link to="/ProductList"> ALL COLLLECTIONS</Link>
            </p>
          </div>
        </div>
        <div className="new-collection-products">
          <Collectioncard
            image={product_1}
            title={"Messika"}
            desc={"Move Uno Collection"}
          />
          <Collectioncard
            image={product_2}
            title={"Cartier"}
            desc={"Love Collection"}
          />
          <Collectioncard
            image={product_3}
            title={"Garrard"}
            desc={"1735 Colection"}
          />
          <Collectioncard
            image={product_4}
            title={"Messika"}
            desc={"Lucky move collection"}
          />
        </div>
      </div>

      {/* New Collection Done */}

      <div className="categories">
        <div className="categories-left">
          <div className="categories-heading">
            <h2>Categories</h2>
            <p>Discover Our collection of Jewelry by categories</p>
          </div>
          <div className="categories-items">
            <h4
              onClick={() => {
                handelCount(1);
              }}
            >
              Rings
            </h4>
            <h4
              onClick={() => {
                handelCount(2);
              }}
            >
              Bracelets
            </h4>
            <h4
              onClick={() => {
                handelCount(3);
              }}
            >
              Earrings
            </h4>
            <h4
              onClick={() => {
                handelCount(4);
              }}
            >
              Neckless & Pendants
            </h4>
            <h4
              onClick={() => {
                handelCount(5);
              }}
            >
              Watches
            </h4>
            <h4
              onClick={() => {
                handelCount(6);
              }}
            >
              Men's Jewelry
            </h4>
          </div>
          <div className="categories-end">
            <p>
              <Link to="/ProductList"> ALL COLLLECTIONS</Link>
            </p>
          </div>
        </div>
        <div className="categories-right">
          {count == 1 ? (
            <img src={collection_1} />
          ) : count == 2 ? (
            <img src={collection_2} />
          ) : count == 3 ? (
            <img src={collection_3} />
          ) : count == 4 ? (
            <img src={collection_4} />
          ) : count == 5 ? (
            <img src={collection_5} />
          ) : (
            <img src={collection_6} />
          )}
        </div>
      </div>

      {/* Categories done */}

      <div className="best_seller">
        <div className="best_seller-heading">
          <div>
            <h2>Bessellers</h2>
            <p>Check Out the New Collections of Famous Brands</p>
          </div>
          <div className="best_seller-heading-right">
            <p>
              <Link to="/ProductList">VIEW ALL</Link>
            </p>
          </div>
        </div>
        <div className="best_seller-products">
          <BestSellerCard
            image={best_seller_1}
            title={"Messika"}
            desc={"White Gold Diamond Ring"}
            price={"1.390"}
          />
          <BestSellerCard
            image={best_seller_2}
            title={"Tiffani"}
            desc={"Silver Necklace"}
            price={"750"}
          />
          <BestSellerCard
            image={best_seller_3}
            title={"Bulgari"}
            desc={"White Gold Diamond Earrings"}
            price={"7.250"}
          />
          <BestSellerCard
            image={best_seller_4}
            title={"Cartier"}
            desc={"White Gold Ring"}
            price={"1.950"}
          />
        </div>
      </div>

      {/* Best Seller Done */}

      <div className="gift">
        <img src={gift} />
        <div className="gift-text">
          <h2>Gifts</h2>
          <p>Looking for the prefect gift?</p>
          <p>Look no further! Our extensive collection of jewelry gifts</p>
          <p>includes something for everyone - from elegent and timeless</p>
          <p>prices for her to bold and sophisticated desings for him</p>
          <div className="gift-text-end">
            <p>SHOP GIFTS</p>
          </div>
        </div>
      </div>

      {/* gift done  */}

      <div className="about">
        <div className="about-left">
          <div className="about-heading">
            <h2>About</h2>
            <p>Gem Garden is More Then Just Gilding</p>
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod
              harum architecto <br /> tempora temporibus vitae unde rerum
              repellendus similique commodi, quam, <br />
              aliquam inventore quasi cumque ,Lorem ipsum dolor sit amet
              consectetur adipisicing elit. <br />
              Officia fuga voluptatum omnis in, eveniet illum?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod
              harum architecto similique <br />
              commodi, quam,aliquam inventore quasi cumque sit amet consectetur
              adipisicing elit. <br />
              Officia fuga voluptatum omnis in, eveniet illum?
            </p>
          </div>
          <div className="about-end">
            <p>OURS STORES</p>
          </div>
        </div>
        <div className="about-right">
          <img src={about} />
        </div>
      </div>
    </DIV>
  );
}

export default Home;
// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Oswald', sans-serif;
const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");

  .new-collections,
  .categories,
  .best_seller {
    margin: 80px auto;
    width: 90%;
  }
  .new-collections-heading,
  .best_seller-heading {
    display: flex;
    justify-content: space-between;
  }
  .new-collections-heading > div > h2,
  .categories-heading > h2,
  .best_seller-heading > div > h2 {
    font-family: "Nunito Sans", sans-serif;
    font-size: 30px;
  }
  .new-collections-heading > div > p {
    font-family: "Nunito Sans", sans-serif;
  }
  .new-collections-heading-right,
  .categories-end,
  .best_seller-heading-right {
    letter-spacing: 3px;
    font-family: "Nunito Sans", sans-serif;
  }
  .new-collections-heading-right p a,
  .categories-end p a,
  .best_seller-heading-right p a {
    text-decoration: none;
    color: black;
  }
  .new-collection-products,
  .best_seller-products {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .categories {
    display: flex;
  }
  .categories-left {
    width: 60%;
  }
  .categories-right {
    width: 50%;
    padding: 10px;
  }
  .categories-right img {
    width: 100%;
  }
  .categories-items {
    font-family: "Nunito Sans", sans-serif;
    cursor: pointer;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .categories-items > h4 {
    transition: 0.3s;
  }
  .categories-items > h4:hover {
    font-size: large;
  }
  .gift {
    margin: 100px 0;
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
  }
  .gift img {
    object-fit: cover;
    width: 100%;
    object-position: center;
  }
  .gift-text {
    position: absolute;
    top: 30%;
    right: 15%;
    color: white;
  }
  .gift-text h2 {
    font-family: "Nunito Sans", sans-serif;
    font-size: 35px;
  }
  .gift-text p {
    font-family: "Nunito Sans", sans-serif;
  }
  .gift-text-end {
    margin-top: 30px;
    letter-spacing: 3px;
    font-family: "Nunito Sans", sans-serif;
  }
  .about {
    width: 90%;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
  }
  .about-left {
    width: 50%;
  }
  .about-right {
    width: 40%;
  }
  .about-heading h2 {
    font-family: "Nunito Sans", sans-serif;
    font-size: 30px;
  }
  .about-heaing p {
    font-family: "Nunito Sans", sans-serif;
  }
  .about-text {
    margin: 30px 0;
    color: #5d5959;
    font-family: "Nunito Sans", sans-serif;
    line-height: 30px;
  }
  .about-right img {
    width: 100%;
  }
  .about-end {
    margin: 30px 0;
    letter-spacing: 3px;
    font-family: "Nunito Sans", sans-serif;
  }

  @media (max-width: 780px) {
    .new-collection-products,
    .best_seller-products {
      grid-template-columns: repeat(2, 1fr);
    }
    .categories {
      flex-direction: column;
    }
    .categories-left {
      width: 100%;
    }
    .categories-right {
      width: 100%;
    }
    .gift-text {
      top: 15%;
      right: 5%;
    }
    .gift-text h2 {
      font-size: 18px;
    }
    .gift-text p {
      font-size: 12px;
    }
    .about {
      flex-direction: column;
    }
    .about-left {
      width: 100%;
    }
    .about-right {
      width: 100%;
    }
  }
`;
