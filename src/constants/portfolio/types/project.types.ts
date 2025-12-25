// ========================================
// 프로젝트(Project) 관련 타입 정의
// ========================================

export interface ProjectData {
  id: string;
  title: string;
  period: string;
  role: string;
  shortDescription: string; // 카드에 표시될 짧은 설명
  description: string; // 상세 페이지 설명
  techStack: string[]; // 뱃지 이름 배열
  highlights: string[];
  // 상세 페이지용 추가 정보
  background?: string; // 프로젝트 배경
  challenges?: ChallengeItem[]; // 문제 해결 과정
  results?: string[]; // 결과/성과
  learned?: string[]; // 배운 점
  thumbnailUrl?: string; // 썸네일 이미지
  images?: string[]; // 상세 페이지 이미지들
  links: ProjectLinks;
  isTeamProject: boolean;
  teamSize?: number;
}

export interface ChallengeItem {
  problem: string;
  solution: string;
  result?: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  notion?: string;
}
