import React, { useContext } from "react";
import Reactmeals from "../assets/meals.jpg";
import CartContext from "../store/cart-context";
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <div className="flex justify-between  h-20 bg-[#8a2b06] items-center text-white px-10 fixed inset-0 z-10">
        <h1 className="text-3xl font-noto font-medium">Reactmeals</h1>
        <button
          onClick={props.onShowCart}
          className="flex justify-between items-center bg-[#4d1601] py-3 px-12 rounded-3xl hover:bg-[#2c0d00] ease-in-out"
        >
          <span className="text-xl inline-block font-medium mr-3">
            <svg
              className=" w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </span>
          <span className="text-xl font-noto font-medium mr-3">Your Cart</span>
          <span className="text-xl font-noto font-medium ">
            {numberofCartItems}
          </span>
        </button>
      </div>
      <div className="w-full h-96 overflow-hidden z-0">
        <img
          className="w-[110%] h-[100%] object-cover transform rotate-[-5deg] translate-y-[-4rem] translate-x-[-1rem]"
          src={Reactmeals}
          alt="React-food"
        />
      </div>
    </>
  );
};

export default Header;
