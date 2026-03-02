interface ChipProps {
  label: string;
  purple?: boolean;
}

const Chip = ({ label, purple }: ChipProps) => (
  <span
    className={`text-xs px-2.5 py-1.5 rounded-full border font-semibold
      ${purple
        ? "bg-white/10 border-white/20 text-white/90"
        : "bg-secondary border-border text-muted-foreground"
      }`}
  >
    {label}
  </span>
);

export default Chip;
