import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="flex justify-between m-4 pb-4 border-b border-solid border-[#ccc]">
      <div>
        <h3 className="mx-1">{props.name}</h3>
        <div> {props.description} </div>
        <div className="mt-1 font-medium text-[#ad5502] text-xl">{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
