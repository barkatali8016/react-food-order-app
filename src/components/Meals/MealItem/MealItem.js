import CartContext from "../../../store/cart-context";
import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const formSubmitHandler = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
      description: props.description,
    };
    cartCtx.addItem(item);
  };
  return (
    <li className={classes["meal"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm onFormSubmit={formSubmitHandler} mealId={props.id} />
    </li>
  );
};
export default MealItem;
