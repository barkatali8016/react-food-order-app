import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const hideCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <CartProvider>
      {isShowCart && <Cart onCloseClk={hideCartHandler} />}
      <Header onCartClick={setIsShowCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
