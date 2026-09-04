export default function Button({ children, type }) {
  let commonClasses =
    "border-2 font-semibold text-2xl px-12 py-6 cursor-pointer transition-all duration-200 ease-in ";
  let classes;
  if (type === "primary")
    classes =
      "border-none bg-amber-700 hover:bg-amber-700 hover:shadow-md hover:-translate-y-1";
  if (type === "secondary") classes = "border-amber-700";
  return <button className={`${commonClasses} ${classes}`}>{children}</button>;
}
