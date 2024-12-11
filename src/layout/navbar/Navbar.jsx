import React from "react";
import LIGHT_LOGO from "../../imgs/logo_light.png";
import DARK_LOGO from "../../imgs/logo_dark.png";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import useLocalStorage from "../../hook/useLocalStorage";
import { useBasket } from "../../context/BasketContext";
import { useWishlist } from "../../context/WishlistContext";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { basket } = useBasket();
  const { wishlist } = useWishlist();
  console.log("basket");
  
    const {theme} = useTheme();
  return (
    <nav className={theme?"dark_mode":""}>
      <div className="nav_logo_div">
        <Link to={"/"}>
          <img src={theme?DARK_LOGO:LIGHT_LOGO} alt="logo" />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <NavLink className={"navlink"} to={"/"}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className={"navlink"} to={"/basket"}>
              BASKET <span className="nav_span">{basket.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={"navlink"} to={"/wishlist"}>
              WISHLIST <span className="nav_span">{wishlist.length}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
