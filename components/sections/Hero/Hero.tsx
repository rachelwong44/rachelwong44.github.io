import { site } from '../../../lib/site-data';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.header} id="home">
      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          <p className={styles.kicker}>
            {site.location} · {site.title}
          </p>
          <h1 className={styles.h1}>Building modern web &amp; mobile experiences.</h1>
          <p className={styles.lead}>{site.summary}</p>

          <div className={styles.ctas}>
            <a className={styles.primaryBtn} href={`mailto:${site.email}`}>
              Email me
            </a>
            <a
              className={styles.secondaryBtn}
              href={site.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

