"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";

const navItems = [
  { name: "Home", href: "/", sectionId: "home" },
  { name: "Projects", href: "/projects", sectionId: "projects" },
  { name: "Services", href: "/service", sectionId: "services" },
  
  { name: "Skills", href: "/skills", sectionId: "skills" },
  { name: "Contact", href: "/contact", sectionId: "contact" },
] as const;

const sectionHref: Record<string, string> = {
  home: "/",
  projects: "/projects",
  services: "/service",
  skills: "/skills",
  contact: "/contact",
};

export default function Navbar() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activePill, setActivePill] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const { t } = useLanguage();

  const isOpen = openPath === pathname;
  const activeHref = pathname === "/" ? (sectionHref[activeSection] ?? "/") : pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


/* Close mobile menu when switching to desktop */
useEffect(() => {
  const desktopMedia = window.matchMedia("(min-width: 1024px)");

  const handleBreakpointChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      setOpenPath(null);
    }
  };

  // Handle initial desktop state
  if (desktopMedia.matches) {
    setOpenPath(null);
  }

  desktopMedia.addEventListener("change", handleBreakpointChange);

  return () => {
    desktopMedia.removeEventListener("change", handleBreakpointChange);
  };
}, []);

/* Close menu after route navigation */
useEffect(() => {
  setOpenPath(null);
}, [pathname]);


  /* On the homepage the nav follows the visible section; on other routes it follows the route. */
  useEffect(() => {
    if (pathname !== "/") return;

    const ids = ["home", "projects", "about", "services", "skills", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const update = () => {
      const threshold = window.innerHeight * 0.35;
      let current = "home";

      for (const element of elements) {
        if (element.getBoundingClientRect().top <= threshold) {
          current = element.id;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      ) {
        current = "contact";
      }

      setActiveSection(current === "about" ? "home" : current);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const frame = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  /* The active pill is measured from the real link so its slide follows every state change. */
  useEffect(() => {
    const list = navListRef.current;
    if (!list) return;

    let active = true;
    const update = () => {
      if (!list.getClientRects().length) {
        if (active) setActivePill(null);
        return;
      }

      const link = list.querySelector<HTMLAnchorElement>('a[data-active="true"]');
      if (!link) {
        if (active) setActivePill(null);
        return;
      }

      const listRect = list.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      if (active) {
        setActivePill({
          left: linkRect.left - listRect.left,
          width: linkRect.width,
        });
      }
    };

    const frame = requestAnimationFrame(update);
    window.addEventListener("resize", update);
    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    observer?.observe(list);

    if (document.fonts?.ready) {
      document.fonts.ready.then(update).catch(() => {});
    }

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", update);
      observer?.disconnect();
    };
  }, [activeHref]);

  const handleNavClick = (href: string) => {
    setOpenPath(null);
    if (pathname === "/" && href === "/") {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-50" data-scrolled={scrolled}>
      <nav
        aria-label="Main navigation"
        className="page-shell flex h-[68px] items-center justify-between gap-3 md:h-[72px]"
      >
        <Link
          href="/"
          onClick={() => handleNavClick("/")}
          className="group flex min-w-0 items-center gap-2.5"
          aria-label="Thurein MyoMin — Home"
        >
          <span className="brand-mark shrink-0" aria-hidden="true">
            TM
          </span>
          <span className="hidden truncate text-sm font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-highlight min-[360px]:inline">
            Thurein <span className="text-foreground-muted">MyoMin</span>
          </span>
        </Link>

        <ul ref={navListRef} className="relative hidden items-center gap-0.5 lg:flex">
          <span
            aria-hidden="true"
            className={`nav-active-pill ${activePill ? "is-visible" : ""}`}
            style={{
              left: activePill?.left ?? 0,
              width: activePill?.width ?? 0,
            }}
          />
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className="nav-link"
                  data-active={isActive}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <LanguageToggle className="hidden sm:inline-flex" />
          <ThemeToggle />

          {/* Placeholder: add public/resume.pdf when the CV is available. */}
          <Link
            href="/resume.pdf"
            download
            title="CV coming soon"
            className="btn-secondary hidden xl:inline-flex"
          >
            {t("Download CV", "CV ဖောင်ဒေါင်းရန်")}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => setOpenPath(isOpen ? null : pathname)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="icon-button mobile-menu-button lg:hidden"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`mobile-nav border-t border-line ${isOpen ? "is-open" : ""}`}
      >
        <div className="page-shell py-5">
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item, index) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? "page" : undefined}
                    data-active={isActive}
                    className="mobile-link"
                  >
                    <span className="mono text-highlight">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{item.name}</span>
                    <ArrowUpRight
                      className="ml-auto h-3.5 w-3.5 shrink-0 text-foreground-subtle"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
            <LanguageToggle />
            {/* Placeholder: add public/resume.pdf when the CV is available. */}
            <a
              href="/resume.pdf"
              download
              title="CV coming soon"
              onClick={() => setOpenPath(null)}
              className="btn-secondary"
            >
              {t("Download CV", "CV ဖောင်ဒေါင်းရန်")}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
