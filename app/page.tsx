import { Hero } from '../components/sections/Hero/Hero';
import { ExperienceSection } from '../components/sections/ExperienceSection/ExperienceSection';
import { ProjectsSection } from '../components/sections/ProjectsSection/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection/SkillsSection';
import { EducationSection } from '../components/sections/EducationSection/EducationSection';
import { ContactSection } from '../components/sections/ContactSection/ContactSection';

export default function Page() {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}

