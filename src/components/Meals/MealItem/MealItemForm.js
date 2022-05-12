import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
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
    <form className={classes.form}>
      <Input input={inputConfig} label="Amount" />
      <button type="submit">+ Add</button>
    </form>
  );
};
export default MealItemForm;
