import React from 'react'
import c from './Navbar.module.css'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className={c.navbar}>
      <ul className={c.navList}>
        <li>
          <Link href="/" className={c.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/events" className={c.navLink}>
            Events
          </Link>
        </li>
        <li>
          <Link href="/info" className={c.navLink}>
            Info
          </Link>
        </li>
      </ul>
    </div>
  );
}
