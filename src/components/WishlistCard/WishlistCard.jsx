import React from 'react'

function WishlistCard({object}) {
    const x = object
  return (
    <div id={x.id} key={x.id} className="card">
          <img className="card_img" src={x.images[0]} alt="card_img" />
          <p className="card_price">
            {x.price}
            {"$"}
          </p>
          <div className="btn_box"></div>
    </div>
  )
}

export default WishlistCard