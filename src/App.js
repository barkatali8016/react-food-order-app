import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const hideCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <Fragment>
      {isShowCart && <Cart onCloseClk={hideCartHandler} />}
      <Header onCartClick={setIsShowCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
