import React from "react";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="flex justify-between items-center border-b-2 border-solid border-[#8a2b06] py-4 my-4">
      <div>
        <h2 className="text-[#363636] font-noto mb-2">{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-medium font-noto text-[#8a2b06]">{price}</span>
          <span className="font-medium border border-solid border-[#ccc] py-1 px-1 rounded-md text-[#363636]">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex ">
        <button
          className="font-medium text-xl text-[#8a2b06] border border-solid border-[#8a2b06] w-12 text-center rounded-md bg-transparent cursor-pointer  ml-1 m-1 hover:bg-[#8a2b06] hover:text-white"
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className="font-medium text-xl text-[#8a2b06] border border-solid border-[#8a2b06] w-12 text-center rounded-md bg-transparent cursor-pointer  ml-1 m-1 hover:bg-[#8a2b06] hover:text-white"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
