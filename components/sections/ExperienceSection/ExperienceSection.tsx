import { site } from '../../../lib/site-data';
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  return (
    <section className={`${styles.section} container`}>
      <SectionHeading
        id="experience"
        title="Experience"
        subtitle="Recent roles and the kinds of problems I’ve been working on."
      />

      <div className={styles.grid}>
        {site.experience.map((role) => (
          <div key={`${role.company}-${role.role}`} className={styles.card}>
            <div className={styles.cardTop}>
              <div>
                <h3 className={styles.cardTitle}>
                  {role.role} · {role.company}
                </h3>
                <p className={styles.cardMeta}>{role.location}</p>
              </div>
              <p className={styles.cardMeta}>
                {role.start} — {role.end}
              </p>
            </div>
            <ul className={styles.bullets}>
              {role.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

