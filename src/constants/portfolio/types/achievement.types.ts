// ========================================
// 성과(Achievement) 관련 타입 정의
// ========================================

export type AchievementCategory = 'performance' | 'collaboration' | 'growth';

export interface AchievementData {
  id: string;
  category: AchievementCategory;
  title: string;
  description: string;
  metrics?: string;
  projectRef?: string; // 연결된 프로젝트 ID
}
