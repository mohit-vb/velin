import { Trash2 } from "lucide-react";
import QuantityCounter from "../product/QuantityCounter";

export default function CartItem() {
  return (
    <li className="flex gap-8 py-16">
      <div className="h-60 w-50">
        <img
          src=""
          alt=""
          className="w-full h-full object-cover object-center bg-red-100"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-4xl">Title</h4>
        <span className="text-xl opacity-60">30ml</span>
        <span className="text-3xl">&#8377;3000</span>

        <div className="flex mt-auto gap-4">
          <QuantityCounter />
          <button className="text-xl">
            <Trash2 className="text-red-900 hover:text-red-500 cursor-pointer" />
          </button>
        </div>
      </div>
    </li>
  );
}
