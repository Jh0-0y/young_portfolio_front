// ========================================
// 포트폴리오 타입 전체 Export
// ========================================

export type {
  IntroData,
  SkillGroup,
  ContactInfo,
} from './intro.types';

export type {
  ProjectData,
  ChallengeItem,
  ProjectLinks,
} from './project.types';

export type {
  AchievementData,
  AchievementCategory,
} from './achievement.types';

// 전체 포트폴리오 데이터 타입
import type { IntroData } from './intro.types';
import type { ProjectData } from './project.types';
import type { AchievementData } from './achievement.types';

export interface PortfolioData {
  intro: IntroData;
  projects: ProjectData[];
  achievements: AchievementData[];
}
