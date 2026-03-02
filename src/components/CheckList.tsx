interface CheckListProps {
  items: React.ReactNode[];
  purple?: boolean;
}

const CheckList = ({ items, purple }: CheckListProps) => (
  <ul className="mt-4 space-y-2.5 list-none p-0">
    {items.map((item, i) => (
      <li key={i} className="relative pl-7">
        <span
          className={`absolute left-0 top-0 font-bold ${
            purple ? "text-white" : "text-primary"
          }`}
        >
          ✓
        </span>
        {item}
      </li>
    ))}
  </ul>
);

export default CheckList;
