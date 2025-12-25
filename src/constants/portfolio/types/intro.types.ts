// ========================================
// 소개(Intro) 관련 타입 정의
// ========================================

export interface IntroData {
  name: string;
  title: string;
  profileImage?: string;
  summary: string;
  skills: SkillGroup[];
  contact: ContactInfo;
}

export interface SkillGroup {
  category: string;
  label: string;
  items: string[]; // 뱃지 이름 배열 (예: ['react', 'typescript'])
}

export interface ContactInfo {
  email: string;
  github?: string;
  linkedin?: string;
  blog?: string;
}
