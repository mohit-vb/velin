import { useEffect, useReducer } from "react";
import { CartContext } from "../hooks/useCart";

const initialState = {
  cartItems: [],
};

const getInitialState = function (initialState) {
  const storedCart = localStorage.getItem("cart");

  return {
    ...initialState,
    cartItems: storedCart ? JSON.parse(storedCart) : [],
  };
};

const reducer = function (state, action) {
  switch (action.type) {
    case "cart/addItem": {
      const itemExists = state.cartItems.some(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload }],
      };
    }

    case "cart/increaseQuantity": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }

    case "cart/decreaseQuantity": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };
    }

    case "cart/removeItem": {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) =>
            !(
              item.id === action.payload.id && item.size === action.payload.size
            ),
        ),
      };
    }

    default:
      throw new Error("Unknown Action");
  }
};

export default function CartProvider({ children }) {
  const [{ cartItems }, dispatch] = useReducer(
    reducer,
    initialState,
    getInitialState,
  );

  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    },
    [cartItems],
  );

  return <CartContext value={{ cartItems, dispatch }}>{children}</CartContext>;
}
