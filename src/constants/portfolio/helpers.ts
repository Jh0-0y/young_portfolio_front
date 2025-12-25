// ========================================
// 포트폴리오 헬퍼 함수
// ========================================

import { projectsData } from './data';
import { achievementsData } from './data';
import type { ProjectData, AchievementData } from './types';

/**
 * 프로젝트 ID로 프로젝트 찾기
 */
export const getProjectById = (id: string): ProjectData | undefined => {
  return projectsData.find((project) => project.id === id);
};

/**
 * 프로젝트 ID로 해당 프로젝트의 성과 목록 가져오기
 */
export const getAchievementsByProjectId = (projectId: string): AchievementData[] => {
  return achievementsData.filter((ach) => ach.projectRef === projectId);
};

/**
 * 카테고리별 성과 그룹화
 */
export const getAchievementsByCategory = () => {
  return achievementsData.reduce(
    (acc, achievement) => {
      if (!acc[achievement.category]) {
        acc[achievement.category] = [];
      }
      acc[achievement.category].push(achievement);
      return acc;
    },
    {} as Record<string, AchievementData[]>
  );
};

// 섹션 네비게이션 정보
export const PORTFOLIO_SECTIONS = [
  { id: 'intro', label: '소개' },
  { id: 'projects', label: '프로젝트' },
] as const;

export type PortfolioSectionId = (typeof PORTFOLIO_SECTIONS)[number]['id'];
