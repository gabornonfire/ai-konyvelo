import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#vision", label: "Összkép" },
  { href: "#days", label: "Tematika" },
  { href: "#outcomes", label: "Eredmények" },
  { href: "#cta", label: "Next step" },
];

const Topbar = () => {
  const [active, setActive] = useState("vision");
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background/92 backdrop-blur-[10px] border-b border-border">
      <div className="max-w-content mx-auto px-[18px] py-3 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5 min-w-0">
          <strong className="text-sm tracking-wide">
            Minősített mesterséges intelligencia és automatizációs könyvelő szakértő
          </strong>
          <span className="text-xs text-muted-foreground">
            Részletes tematika • lenyíló modulok
          </span>
        </div>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü bezárása" : "Menü megnyitása"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background px-[18px] py-3 flex flex-col gap-1" aria-label="Mobil navigáció">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className={`no-underline text-sm px-3 py-2.5 rounded-lg transition-all
                ${active === item.href.slice(1)
                  ? "text-primary bg-primary/[0.06] font-semibold"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Topbar;
