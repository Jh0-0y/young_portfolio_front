import { portfolioData } from '@/constants/portfolioData';
import {
  PortfolioHeader,
  Section,
  IntroSection,
  ProjectsSection,
} from '@/components/portfolio';
import styles from './PortfolioPage.module.css';

const PortfolioPage = () => {
  return (
    <div className={styles.page}>
      <PortfolioHeader />

      <main className={styles.main}>
        {/* 소개 섹션 */}
        <Section id="intro">
          <IntroSection data={portfolioData.intro} />
        </Section>

        {/* 프로젝트 섹션 */}
        <Section id="projects">
          <ProjectsSection data={portfolioData.projects} />
        </Section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} {portfolioData.intro.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
