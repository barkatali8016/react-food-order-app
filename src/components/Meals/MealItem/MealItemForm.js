import { useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const amountRef = useRef();
  const formSubmitHandle = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length > 0 &&
      enteredAmountNumber > 0 &&
      enteredAmountNumber < 6
    ) {
      props.onFormSubmit(enteredAmountNumber);
    } else {
      return;
    }
  };
  const inputConfig = {
    id: "amount" + props.mealId,
    name: "amount",
    type: "number",
    min: 1,
    max: 100,
    step: 1,
    defaultValue: 1,
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandle}>
      <Input ref={amountRef} input={inputConfig} label="Amount" />
      <button type="submit">+ Add</button>
    </form>
  );
};
export default MealItemForm;
