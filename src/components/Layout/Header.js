import classes from "./Header.module.css";
import mainImg from "../../assets/meals.jpeg";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order Food Online</h1>
        <HeaderCartButton onCartClick={props.onCartClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImg} alt="A table full of foods" />
      </div>
    </Fragment>
  );
};
export default Header;
