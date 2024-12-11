import React from 'react'
import useLocalStorage from '../../hook/useLocalStorage';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import { useBasket } from '../../context/BasketContext';

function BasketCard({object}) {
    const x = object
    const {basket,setBasket} = useBasket();

  function removeClickHandle(x) {
    if (x.count === 1) {
      setBasket((basket) => basket.filter((item) => item.id !== x.id));
      return;
    }
    setBasket(
      basket.map((item) =>
        item.id === x.id ? { ...item, count: item.count - 1 } : item
      )
    );
  }
  function addClickHandle(x) {
    setBasket(
      basket.map((item) =>
        item.id === x.id ? { ...item, count: item.count + 1 } : item
      )
    );
  }

  return (
    <div id={x.id} key={x.id} className="card">
    <img className="card_img" src={x.images[0]} alt="card_img" />
    <p className="card_price">
      {x.price}
      {"$"}
    </p>
    <div className="btn_box">
      <PrimaryBtn onClick={() => removeClickHandle(x)}>-</PrimaryBtn>
      <PrimaryBtn>{x.count}</PrimaryBtn>
      <PrimaryBtn onClick={() => addClickHandle(x)}>+</PrimaryBtn>
    </div>
  </div>
  )
}

export default BasketCard