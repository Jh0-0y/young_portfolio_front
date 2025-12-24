import { apiClient } from './client';
import type { Profile, Skill, Project, ProjectListItem } from '@/types';

// 실제 API 연동 전에는 목데이터 사용
import { 
  MOCK_PROFILE, 
  MOCK_SKILLS, 
  MOCK_PROJECT_LIST, 
  MOCK_PROJECT_DETAIL,
  QUOTES 
} from '@/constants';

const USE_MOCK = true; // 백엔드 연동 시 false로 변경

// 프로필 정보 조회
export const getProfile = async (): Promise<Profile> => {
  if (USE_MOCK) {
    return Promise.resolve(MOCK_PROFILE);
  }
  const response = await apiClient.get<Profile>('/profile');
  return response.data;
};

// 기술 스택 조회
export const getSkills = async (): Promise<Skill[]> => {
  if (USE_MOCK) {
    return Promise.resolve(MOCK_SKILLS);
  }
  const response = await apiClient.get<Skill[]>('/skills');
  return response.data;
};

// 프로젝트 목록 조회
export const getProjects = async (): Promise<ProjectListItem[]> => {
  if (USE_MOCK) {
    return Promise.resolve(MOCK_PROJECT_LIST);
  }
  const response = await apiClient.get<ProjectListItem[]>('/projects');
  return response.data;
};

// 프로젝트 상세 조회
export const getProject = async (id: number): Promise<Project> => {
  if (USE_MOCK) {
    return Promise.resolve({ ...MOCK_PROJECT_DETAIL, id });
  }
  const response = await apiClient.get<Project>(`/projects/${id}`);
  return response.data;
};

// 하이라이트 프로젝트 조회
export const getHighlightedProject = async (): Promise<ProjectListItem | null> => {
  if (USE_MOCK) {
    const highlighted = MOCK_PROJECT_LIST.find(p => p.isHighlighted);
    return Promise.resolve(highlighted || null);
  }
  const response = await apiClient.get<ProjectListItem>('/projects/highlighted');
  return response.data;
};

// 랜덤 명언 조회
export const getRandomQuote = (): { text: string; author: string } => {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  return QUOTES[randomIndex];
};
