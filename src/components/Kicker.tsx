interface KickerProps {
  text: string;
  purple?: boolean;
}

const Kicker = ({ text, purple }: KickerProps) => (
  <div
    className={`inline-flex items-center gap-2.5 text-[13px] font-semibold px-3.5 py-1.5 rounded-full border mb-[18px]
      ${purple
        ? "bg-white/10 border-white/20 text-white/90"
        : "bg-secondary border-border text-muted-foreground"
      }`}
  >
    <span
      className={`w-2 h-2 rounded-full ${
        purple
          ? "bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.18)]"
          : "bg-primary shadow-[0_0_0_3px_hsl(253_100%_69%/0.18)]"
      }`}
      aria-hidden="true"
    />
    {text}
  </div>
);

export default Kicker;
