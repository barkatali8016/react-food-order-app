import React, { useReducer } from "react";
import CartContext from "./cart-context";

// CART REDUCER FUNCION
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedCartItems;
    if (cartItemIndex !== -1) {
      const updatedItem = {
        ...state.items[cartItemIndex],
        amount: state.items[cartItemIndex].amount + action.item.amount,
      };

      updatedCartItems = [...state.items];
      updatedCartItems[cartItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  } else if ((action.type = "REMOVE")) {
    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const updatedTotalAmount =
      state.totalAmount - state.items[cartItemIndex].price;
    let updatedCartItems;
    if (state.items[cartItemIndex].amount === 1) {
      updatedCartItems = state.items.filter((item) => item.id != action.id);
    } else {
      const updatedItem = {
        ...state.items[cartItemIndex],
        amount: state.items[cartItemIndex].amount - 1,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[cartItemIndex] = updatedItem;
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

// COMPONENT
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
