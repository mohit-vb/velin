import { Minus, Plus } from "lucide-react";

const btnClasses = `flex h-18 w-22 items-center justify-center rounded-l-lg text-stone-600 hover:bg-amber-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer`;

export default function QuantityCounter({
  min = 1,
  max = 10,
  onChange,
  quantity,
  setQuantity,
  onIncrease,
  onDecrease,
}) {
  const handleDecrement = () => {
    if (quantity <= min) return;

    if (onDecrease) {
      onDecrease();
      return;
    }

    const newQty = quantity - 1;
    setQuantity(newQty);

    if (onChange) onChange(newQty);
  };

  const handleIncrement = () => {
    if (quantity >= max) return;

    if (onIncrease) {
      onIncrease();
      return;
    }

    const newQty = quantity + 1;
    setQuantity(newQty);

    if (onChange) onChange(newQty);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (!isNaN(value)) {
      const clampedValue = Math.min(Math.max(value, min), max);

      if (onChange) {
        onChange(clampedValue);
        return;
      }

      setQuantity(clampedValue);
    } else if (e.target.value === "") {
      setQuantity("");
    }
  };

  return (
    <div className="self-start flex items-start border border-amber-950/10 shadow-sm">
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className={btnClasses}
        aria-label="Decrease quantity"
      >
        <Minus className="h-6" />
      </button>

      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className={`h-18 w-22 border-x border-gray-200 text-center text-xl font-semibold text-gray-800 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
      />

      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className={btnClasses}
        aria-label="Increase quantity"
      >
        <Plus className="h-6" />
      </button>
    </div>
  );
}
