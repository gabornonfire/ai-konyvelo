import { useEffect, useState } from "react";

const navItems = [
  { href: "#vision", label: "Összkép" },
  { href: "#days", label: "Tematika" },
  { href: "#outcomes", label: "Eredmények" },
  { href: "#cta", label: "Next step" },
];

const Topbar = () => {
  const [active, setActive] = useState("vision");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const y = window.scrollY + 140;
      let current = "vision";
      sections.forEach((s) => {
        if ((s as HTMLElement).offsetTop <= y) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/92 backdrop-blur-[10px] border-b border-border">
      <div className="max-w-content mx-auto px-[18px] py-3 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5 min-w-[220px]">
          <strong className="text-sm tracking-wide">
            Minősített mesterséges intelligencia és automatizációs könyvelő szakértő
          </strong>
          <span className="text-xs text-muted-foreground">
            Részletes tematika • lenyíló modulok
          </span>
        </div>

        <nav className="hidden md:flex flex-wrap gap-2 justify-end" aria-label="Szekció navigáció">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href.slice(1) ? "true" : undefined}
              className={`no-underline text-[13px] px-3 py-2 rounded-full border transition-all duration-150 whitespace-nowrap
                ${active === item.href.slice(1)
                  ? "border-primary text-primary bg-primary/[0.06] font-semibold"
                  : "border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
