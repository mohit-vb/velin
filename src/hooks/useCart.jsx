import { useContext, createContext } from "react";
const CartContext = createContext();

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart is used outside of the CartContext");
  }
  return context;
}

export { CartContext, useCart };
