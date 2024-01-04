import { useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShow, setcartIsShow] = useState(false);
  const showCartHandler = () => {
    setcartIsShow(true);
  };
  const hideCartHandler = () => {
    setcartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
