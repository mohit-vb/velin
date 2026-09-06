export default function Button({ children, type }) {
  let commonClasses =
    "font-semibold text-2xl px-12 py-6 cursor-pointer transition-all duration-200 ease-in ";
  let classes;
  if (type === "primary")
    classes =
      "border-none bg-amber-700 text-amber-50 hover:bg-amber-700 hover:shadow-md hover:-translate-y-1";
  if (type === "secondary")
    classes = "border-2 border-amber-50 hover:bg-amber-50 hover:text-amber-950";
  if (type === "tertiary")
    classes =
      "text-amber-950 border-b font-semibold text-2xl pb-4 cursor-pointer hover:tracking-wider transition-all";
  return (
    <button className={`${type !== "tertiary" && commonClasses} ${classes}`}>
      {children}
    </button>
  );
}
