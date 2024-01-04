import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="m-0 p-0  max-h-80 overflow-auto">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      <div>
        {cartItems}
        <div className="flex justify-between items-center font-noto font-medium text-2xl my-4 mx-0">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="text-right">
          <button
            onClick={props.onClose}
            className="bg-transparent border border-solid border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 hover:bg-[#5a1a01] hover:text-white"
          >
            Close
          </button>
          {hasItem && (
            <button className="bg-transparent border border-solid border-[#8a2b06] py-2 px-8 rounded-3xl ml-4 hover:bg-[#5a1a01] hover:text-white">
              Order
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
