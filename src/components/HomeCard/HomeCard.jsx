import React, { useState } from "react";
import useLocalStorage from "../../hook/useLocalStorage";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";

function HomeCard({ object }) {
  const x = object;
  const [basket, setBasket] = useLocalStorage("basket");
  const [wishlist, setWishlist] = useLocalStorage("wishlist");
  const [products, setProducts] = useState([]);

  function favClickHandle(x) {
    const itemIndex = wishlist.findIndex((item) => item.id === x.id);

    if (itemIndex !== -1) {
      setWishlist((list) => list.filter((item) => item.id !== x.id));
    } else {
      setWishlist((list) => [...list, x]);
    }

    setProducts((products) =>
      products.map((item) =>
        item.id === x.id ? { ...item, isFav: !item.isFav } : item
      )
    );
  }

  function basketClickHandle(x) {
    const index = basket.findIndex((item) => item.id === x.id);

    if (index === -1) {
      setBasket((basket) => [...basket, { ...x, count: 1 }]);
    } else {
      setBasket((basket) =>
        basket.map((item) =>
          item.id === x.id ? { ...item, count: item.count + 1 } : item
        )
      );
    }
  }

  return (
    <div id={x.id} key={x.id} className="card">
      {wishlist.findIndex((item) => item.id === x.id) === -1 ? (
        <i
          onClick={() => favClickHandle(x)}
          className="fa-regular fa-heart card_icon"
        ></i>
      ) : (
        <i
          onClick={() => favClickHandle(x)}
          className="fa-solid fa-heart card_icon"
        ></i>
      )}
      <img className="card_img" src={x.images[0]} alt="card_img" />
      <p className="card_price">
        {x.price}
        {"$"}
      </p>
      <PrimaryBtn
        onClick={() => {
          basketClickHandle(x);
        }}
      >
        ADD
      </PrimaryBtn>
    </div>
  );
}

export default HomeCard;
