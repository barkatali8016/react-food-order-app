import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const totalCartItems = cartCtx.items.length;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItems = cartCtx.items.map((meal) => (
    <CartItem
      key={meal.id}
      price={meal.price}
      name={meal.name}
      summary={meal.description}
      amount={meal.amount}
      onRemove={onRemoveHandler.bind(null, meal.id)}
      onAdd={onAddHandler.bind(null, meal)}
    >
      {meal.name}
    </CartItem>
  ));
  return (
    <Modal onBackdropClk={props.onCloseClk}>
      <div className={classes["cart-items"]}>{cartItems}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onCloseClk}>
          Close
        </button>
        {totalCartItems > 0 && (
          <button className={classes["button"]}>Order</button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
