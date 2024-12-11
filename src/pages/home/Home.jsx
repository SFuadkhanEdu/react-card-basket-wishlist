import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import PrimaryBtn from "../../components/primaryBtn/PrimaryBtn";
import useLocalStorage from "../../hook/useLocalStorage";
import Loading from "../../components/loading/Loading";
import CardSection from "../../components/cardSection/CardSection";
import HomeCard from "../../components/HomeCard/HomeCard";
import { useProducts } from "../../context/ProductsContext";
import AccessibilityButton from "../../components/AccessibilityButton/AccessibilityButton";
import AccessMenu from "../../components/AccessMenu/AccessMenu";
import { useTheme } from "../../context/ThemeContext";

function Home() {
  const [wishlist] = useLocalStorage("wishlist");
  const [loading, setLoading] = useState(true);
  const { products, setProducts } = useProducts();
  const [showItems, setShowItems] = useState(10);

  const { theme } = useTheme();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const updatedProducts = data.map((item) => ({
          ...item,
          isFav: wishlist.findIndex + 1 ? false : true,
        }));
        setProducts(updatedProducts);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <CardSection className={`home_card_section${theme ? " dark_mode" : ""}`}>
        {loading ? (
          <Loading />
        ) : (
          products.length > 0 &&
          products
            .slice(1, showItems + 1)
            .map((object) => (
              <HomeCard key={object.id} object={object}></HomeCard>
            ))
        )}
        {showItems < products.length && (
          <PrimaryBtn
            className="show_more_btn"
            onClick={() => {
              setShowItems(showItems + 5);
            }}
          >
            Show More
          </PrimaryBtn>
        )}
      </CardSection>
      <AccessMenu></AccessMenu>
      <AccessibilityButton />
    </>
  );
}

export default Home;
