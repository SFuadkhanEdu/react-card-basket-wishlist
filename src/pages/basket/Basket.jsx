import React from "react";
import useLocalStorage from "../../hook/useLocalStorage";

import "./index.css";
import CardSection from "../../components/cardSection/CardSection";
import BasketCard from "../../components/BasketCard/BasketCard";
import { useBasket } from "../../context/BasketContext";
import { useTheme } from "../../context/ThemeContext";
function Basket() {
  const {basket} = useBasket();
  const { theme } = useTheme();
  return (
    <CardSection className={`home_card_section${theme ? " dark_mode" : ""}`}>
        {basket.map((object) => (
        <BasketCard key={object.id} object = {object}></BasketCard>
      ))}
    </CardSection>
  );
}

export default Basket;
