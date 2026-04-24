import { site } from '../../../lib/site-data';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import styles from './ContactSection.module.css';

export function ContactSection() {
  return (
    <section className={`${styles.section} container`}>
      <SectionHeading id="contact" title="Contact" subtitle="Want to work together? Let’s chat." />

      <div className={styles.actions}>
        <a className={styles.primaryBtn} href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a
          className={styles.secondaryBtn}
          href={site.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          CV (PDF)
        </a>
      </div>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} {site.name}
      </footer>
    </section>
  );
}

