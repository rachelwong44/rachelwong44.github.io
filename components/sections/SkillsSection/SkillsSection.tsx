import { site } from "../../../lib/site-data";
import { SectionHeading } from "../../ui/SectionHeading/SectionHeading";
import { Pill } from "../../ui/Pill/Pill";
import styles from "./SkillsSection.module.css";

export function SkillsSection() {
  return (
    <section className={`${styles.section} container`}>
      <SectionHeading
        id="skills"
        title="Skills"
        subtitle="Tools and technologies I've used."
      />
      <div className={styles.pills}>
        {site.skills.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </section>
  );
}
