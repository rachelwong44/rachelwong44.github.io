import { site } from '../../../lib/site-data';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import styles from './EducationSection.module.css';

export function EducationSection() {
  const edu = site.education[0];

  return (
    <section className={`${styles.section} container`}>
      <SectionHeading id="education" title="Education" />

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>
          {edu.school} — {edu.degree}
        </h3>
        <p className={styles.cardMeta}>
          {edu.start} — {edu.end}
        </p>
        <ul className={styles.bullets}>
          {edu.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

