"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-4 z-50 w-full px-4 sm:px-6 transition-all duration-300">
        <nav
          aria-label="Main Navigation"
          className={`mx-auto max-w-6xl rounded-full border border-[#E2E2DE] bg-white/85 backdrop-blur-md transition-shadow duration-300 ${
            scrolled ? "shadow-md shadow-[#1A1C20]/5" : "shadow-sm"
          }`}
        >
          <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E04D2D] rounded-lg"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1C20] transition-colors group-hover:text-[#E04D2D]">
                Abrar<span className="italic font-normal">Yeasir</span>
              </span>
            </Link>

            {/* Desktop Navigation Links with animated layout indicator */}
            <div className="hidden md:flex items-center gap-1 relative">
              {NAV_LINKS.map((link) => {
                const isHovered = hoveredLink === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="relative px-4 py-2 text-sm font-medium text-[#1A1C20] transition-colors hover:text-[#1A1C20] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E04D2D] rounded-full"
                  >
                    {isHovered && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-[#F4F4F0] border border-[#E2E2DE]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Action */}
            <div className="flex items-center gap-3">
              <Button
                href="#contact"
                variant="filled"
                size="md"
                magnetic
                icon={<ArrowUpRight className="h-4 w-4" />}
                className="hidden sm:inline-flex"
              >
                Let&apos;s Discuss
              </Button>

              {/* Mobile Hamburger Toggle (Min 44x44px touch target) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E2DE] text-[#1A1C20] hover:bg-[#F4F4F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E04D2D] md:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-4 top-22 z-40 rounded-3xl border border-[#E2E2DE] bg-white/95 p-6 shadow-xl backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 items-center rounded-2xl px-4 text-lg font-medium text-[#1A1C20] hover:bg-[#F4F4F0] transition-colors active:bg-[#E2E2DE]"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-[#E2E2DE]">
                <Button
                  href="#contact"
                  variant="filled"
                  size="md"
                  onClick={() => setMobileMenuOpen(false)}
                  icon={<ArrowUpRight className="h-4 w-4" />}
                  className="w-full h-12"
                >
                  Let&apos;s Discuss
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
