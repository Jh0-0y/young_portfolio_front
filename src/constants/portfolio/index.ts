// ========================================
// 포트폴리오 상수 메인 Export
// ========================================

// Types
export type {
  PortfolioData,
  IntroData,
  SkillGroup,
  ContactInfo,
  ProjectData,
  ChallengeItem,
  ProjectLinks,
  AchievementData,
  AchievementCategory,
} from './types';

// Data
export { introData, projectsData, achievementsData } from './data';

// Helpers
export {
  getProjectById,
  getAchievementsByProjectId,
  getAchievementsByCategory,
  PORTFOLIO_SECTIONS,
} from './helpers';

export type { PortfolioSectionId } from './helpers';

// 통합 데이터 객체 (기존 호환성 유지)
import { introData, projectsData, achievementsData } from './data';
import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  intro: introData,
  projects: projectsData,
  achievements: achievementsData,
};
