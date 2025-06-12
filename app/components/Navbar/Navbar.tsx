'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Next.js Template
        </Link>
        <div className={styles.navLinks}>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
} 