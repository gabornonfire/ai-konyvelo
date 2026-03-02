import { ReactNode } from "react";

interface InfoCardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}

const InfoCard = ({ children, className = "", glass }: InfoCardProps) => (
  <div
    className={`rounded-lg border p-[30px] h-full
      ${glass
        ? "card-glass"
        : "bg-card border-border shadow-[var(--shadow-card)]"
      }
      ${className}`}
  >
    {children}
  </div>
);

export default InfoCard;
