import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DayAccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const DayAccordion = ({ title, children, isOpen = false, onToggle }: DayAccordionProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = onToggle ? isOpen : internalOpen;
  const toggle = onToggle || (() => setInternalOpen(!internalOpen));

  return (
    <div
      className={`rounded-lg border border-l-[5px] p-4 mt-3.5 transition-all duration-200
        ${open
          ? "bg-[#fdfcff] border-primary shadow-[0_6px_16px_rgba(123,97,255,0.12)]"
          : "bg-card border-border border-l-primary shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
        }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between cursor-pointer font-semibold text-[15px] text-primary bg-transparent border-none outline-none text-left"
      >
        <span>{title}</span>
        <ChevronDown
          size={16}
          className={`text-primary transition-transform duration-200 shrink-0 ml-2 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="pt-3 text-foreground">{children}</div>}
    </div>
  );
};

export default DayAccordion;
