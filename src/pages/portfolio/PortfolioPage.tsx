import { portfolioData } from '@/constants/portfolio';
import {
  HeroSection,
  StickyHeader,
  Section,
  AboutSection,
  SkillsSection,
  ArchivingSection,
  ProjectsSection,
} from '@/components/portfolio';
import styles from './PortfolioPage.module.css';

const PortfolioPage = () => {
  return (
    <div className={styles.page}>
      {/* Sticky 헤더 - 스크롤 시 표시 */}
      <StickyHeader />

      {/* Hero - 맥 창 스타일 */}
      <HeroSection data={portfolioData.hero} />

      <main className={styles.main}>
        {/* About Me */}
        <Section id="about">
          <AboutSection data={portfolioData.about} />
        </Section>

        {/* Skills */}
        <Section id="skills">
          <SkillsSection data={portfolioData.skills} />
        </Section>

        {/* Archiving */}
        <Section id="archiving">
          <ArchivingSection data={portfolioData.archiving} />
        </Section>

        {/* Projects */}
        <Section id="projects">
          <ProjectsSection data={portfolioData.projects} />
        </Section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} {portfolioData.about.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
