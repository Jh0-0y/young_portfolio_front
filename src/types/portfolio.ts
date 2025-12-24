// 기술 스택 카테고리
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'etc';

// 기술 스택
export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
  iconName?: string; // react-icons 아이콘 이름
  level?: 'beginner' | 'intermediate' | 'advanced';
}

// 프로젝트
export interface Project {
  id: number;
  title: string;
  description: string;
  content: string; // 마크다운 상세 설명
  thumbnailUrl?: string;
  skills: Skill[];
  githubUrl?: string;
  demoUrl?: string;
  startDate: string;
  endDate?: string;
  isHighlighted: boolean; // 메인에 보여줄 프로젝트
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

// 프로젝트 목록 조회 시 사용 (content 제외)
export interface ProjectListItem {
  id: number;
  title: string;
  description: string;
  thumbnailUrl?: string;
  skills: Skill[];
  githubUrl?: string;
  demoUrl?: string;
  startDate: string;
  endDate?: string;
  isHighlighted: boolean;
}

// 자기소개 정보
export interface Profile {
  name: string;
  title: string; // 예: "풀스택 개발자"
  bio: string;
  email: string;
  githubUrl?: string;
  linkedInUrl?: string;
  resumeUrl?: string; // PDF 다운로드 링크
}
