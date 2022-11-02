import React, { useState } from "react";

function Item({ name, category }) {

  const [ inCart, setInCart] = useState(false)

  const handleClick = () => {
    setInCart(!inCart)
  }

  const classNameText = inCart ? "in-cart" : ""

  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"

  
  return (
    <li className={classNameText}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
