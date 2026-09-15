import { Trash2 } from "lucide-react";
import QuantityCounter from "../product/QuantityCounter";
import { useCart } from "../../hooks/useCart";

export default function CartItem({ item }) {
  const { id, img, name, size, price, quantity } = item;
  const { dispatch } = useCart();
  return (
    <li className="flex gap-8 py-16">
      <div className="h-60 w-50">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-center bg-red-100"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-4xl">{name}</h4>
        <span className="text-xl opacity-60">{size}</span>
        <span className="text-3xl">&#8377;{Number(price * quantity)}</span>

        <div className="flex mt-auto gap-4">
          <QuantityCounter
            quantity={quantity}
            onIncrease={() =>
              dispatch({
                type: "cart/increaseQuantity",
                payload: { id, size },
              })
            }
            onDecrease={() =>
              dispatch({
                type: "cart/decreaseQuantity",
                payload: { id, size },
              })
            }
          />
          <button
            className="text-xl"
            onClick={() => dispatch({ type: "cart/removeItem", payload: item })}
            aria-label="Remove item from cart"
          >
            <Trash2 className="text-red-900 hover:text-red-500 cursor-pointer" />
          </button>
        </div>
      </div>
    </li>
  );
}
