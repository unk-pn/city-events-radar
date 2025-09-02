"use client";

import React from "react";
import c from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/info", label: "Info" },
  ];

  return (
    <nav className={c.navbar}>
      <ul className={c.navList}>
        {navItems.map(({ href, label }) => {
          const isActive =
            pathname === href || (href !== "/" && pathname.startsWith(href));

          return (
            <li key={href}>
              <Link href={href} className={c.navLink} data-active={isActive}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
