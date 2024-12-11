import React from "react";
import useLocalStorage from "../../hook/useLocalStorage";
import "./index.css";
import CardSection from "../../components/cardSection/CardSection";
import { useWishlist } from "../../context/WishlistContext";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import { useTheme } from "../../context/ThemeContext";
function Wishlist() {
    const{wishlist} = useWishlist();

const { theme } = useTheme();
  return (
    <CardSection className={`wishlist_container ${theme?"dark_mode":""}`}>
      {wishlist.map((object) => (
        <WishlistCard key={object.id} object={object}></WishlistCard>
      ))}
    </CardSection>
  );
}

export default Wishlist;
