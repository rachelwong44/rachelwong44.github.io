'use client';

import { Navigation } from '../Navigation/Navigation';
import styles from './AppFrame.module.css';

function Background() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <video
        className={styles.bgVideo}
        src="/videos/video1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.bgOverlay} />
    </div>
  );
}

export function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.root}>
      <Background />

      <Navigation />

      <div className={styles.content}>{children}</div>
    </div>
  );
}

