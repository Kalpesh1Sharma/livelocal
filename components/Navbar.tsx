"use client";

import { useState } from "react";

const links = [
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 sm:top-5">
      <nav
        className="
          rounded-full
          border border-black/5
          bg-white/90
          px-4 py-3
          shadow-sm
          backdrop-blur-md
          sm:px-5
          md:px-7
        "
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-semibold tracking-tight sm:text-xl"
          >
            Livelocal
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-black/70 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#enquire"
              className="
                rounded-full
                bg-[var(--accent)]
                px-6 py-3
                text-sm
                font-medium
                text-white
                transition-colors
                hover:bg-[var(--accent-dark)]
              "
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-black/10
              text-lg
              transition-colors
              hover:bg-black/5
              md:hidden
            "
          >
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`
            overflow-hidden
            transition-all
            duration-300
            md:hidden
            ${
              open
                ? "max-h-96 border-t border-black/10 pt-4 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="flex flex-col gap-1 pb-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="
                  rounded-xl
                  px-3 py-3
                  text-sm
                  text-black/70
                  transition-colors
                  hover:bg-black/5
                  hover:text-black
                "
              >
                {link.label}
              </a>
            ))}

            <a
              href="#enquire"
              onClick={closeMenu}
              className="
                mt-2
                rounded-full
                bg-[var(--accent)]
                px-5 py-3
                text-center
                text-sm
                font-medium
                text-white
                transition-colors
                hover:bg-[var(--accent-dark)]
              "
            >
              Enquire Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}