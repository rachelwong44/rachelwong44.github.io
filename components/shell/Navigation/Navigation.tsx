'use client';

import { site } from '../../../lib/site-data';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <a className={styles.brand} href="#home">
        {site.name}
      </a>

      <div className={styles.navItems} aria-label="Sections">
        <a className={styles.navItem} href="#experience">
          Experience
        </a>
        <a className={styles.navItem} href="#projects">
          Projects
        </a>
        <a className={styles.navItem} href="#skills">
          Skills
        </a>
        <a className={styles.navItem} href="#education">
          Education
        </a>
        <a className={styles.navItem} href="#contact">
          Contact
        </a>
      </div>

      <a className={styles.cvLink} href={site.cvUrl} target="_blank" rel="noopener noreferrer">
        View CV
      </a>
    </nav>
  );
}

