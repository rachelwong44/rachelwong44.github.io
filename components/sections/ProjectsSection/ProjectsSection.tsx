import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { Pill } from "../../ui/Pill/Pill";
import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  return (
    <section className={`${styles.section} container`}>
      <SectionHeading id="projects" title="Projects" />

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Shopify theme builds</h3>
          <p className={styles.cardBody}>
            Liquid + modern front-end work shipping pixel-accurate storefront
            experiences from Figma.
          </p>
          <div className={styles.pills}>
            <Pill>Liquid</Pill>
            <Pill>JavaScript</Pill>
            <Pill>React</Pill>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>React Native + AI keypoints</h3>
          <p className={styles.cardBody}>
            Mobile app integrating a pre-trained Tensorflow keypoint estimation
            model, with a web dashboard backed by GraphQL + Prisma.
          </p>
          <div className={styles.pills}>
            <Pill>React Native</Pill>
            <Pill>GraphQL</Pill>
            <Pill>Prisma</Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
