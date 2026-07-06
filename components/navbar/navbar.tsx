"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../common/container";

const navItems = [
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Community",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Primary Navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">♛</span>

            <span className="text-xl font-bold tracking-wide">
              XLChess
            </span>
          </Link>

          {/* Desktop Menu */}

          <ul className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-indigo-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}

          <Link
            href="#"
            className="hidden rounded-xl bg-indigo-600 px-5 py-3 font-medium transition hover:bg-indigo-500 md:block"
          >
            Get Started
          </Link>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle Navigation"
          >
            <Menu />
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col p-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-4"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <Link
                  href="#"
                  className="mt-4 rounded-xl bg-indigo-600 px-4 py-3 text-center"
                >
                  Get Started
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}