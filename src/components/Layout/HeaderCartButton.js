import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const Button = (props) => {
  const [cartBtnHighlighted, setCartBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  let noOfCartItems = 0;
  if (items && items.length) {
    const cartItems = [...items];
    noOfCartItems = cartItems.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
  }
  const btnClasses = `${classes["button"]} ${
    cartBtnHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setCartBtnHighlighted(true);
    const timer = setTimeout(() => {
      setCartBtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button type="button" className={btnClasses} onClick={props.onCartClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};
export default Button;
