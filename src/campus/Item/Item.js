import React, { useState } from "react";
import "./Item.css";

function Item(prop) {
  // State to track whether the item is added to the cart
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Function to handle the click event on the "ADD TO CART" button
  const handleAddToCart = () => {
    // Perform actions you want when the item is added to the cart
    // For example, you can update a cart state or show a confirmation message
    // Here, I'm just updating the state to indicate that the item is added to the cart
    setIsAddedToCart(true);
  };

  return (
    <div className="card head">
      <img src={prop.appData.image} alt="" width="140px" />
      <div className="card-body">
        <p className="info">
          {prop.appData.title}
          <br></br>
          <span className="Heading"> Price:</span>
          {prop.appData.price}
          <br></br>
          <span className="Heading">Rating:</span>
          {prop.appData.rating.rate}
          <div>
            <button
              className="btn cart btn-primary display-5"
              onClick={handleAddToCart}
              disabled={isAddedToCart} // Disable the button if the item is already added to the cart
            >
              <b>{isAddedToCart ? "ADDED TO CART" : "ADD TO CART"}</b>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Item;
