import { ReactNode } from "react";

interface NoteProps {
  children: ReactNode;
  purple?: boolean;
}

const Note = ({ children, purple }: NoteProps) => (
  <div
    className={`text-[13px] mt-4 p-3 rounded-[10px] border-l-[3px]
      ${purple
        ? "text-white/90 bg-white/10 border-l-white"
        : "text-muted-foreground bg-secondary border-l-primary"
      }`}
  >
    {children}
  </div>
);

export default Note;
