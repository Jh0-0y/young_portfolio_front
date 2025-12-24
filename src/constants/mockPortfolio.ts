import type { Profile, Skill, Project, ProjectListItem } from '@/types';

// 프로필 정보
export const MOCK_PROFILE: Profile = {
  name: '홍길동',
  title: '풀스택 개발자',
  bio: `안녕하세요! 사용자 경험을 중시하는 풀스택 개발자입니다.
  
React와 Spring Boot를 주력으로 사용하며, 
클린 코드와 테스트 주도 개발을 지향합니다.

새로운 기술을 배우고 적용하는 것을 즐기며,
팀과의 협업을 통해 더 나은 결과물을 만들어가고자 합니다.`,
  email: 'example@email.com',
  githubUrl: 'https://github.com/username',
  linkedInUrl: 'https://linkedin.com/in/username',
  resumeUrl: '/resume.pdf',
};

// 기술 스택
export const MOCK_SKILLS: Skill[] = [
  // Frontend
  { id: 1, name: 'React', category: 'frontend', iconName: 'SiReact', level: 'advanced' },
  { id: 2, name: 'TypeScript', category: 'frontend', iconName: 'SiTypescript', level: 'advanced' },
  { id: 3, name: 'Next.js', category: 'frontend', iconName: 'SiNextdotjs', level: 'intermediate' },
  { id: 4, name: 'HTML/CSS', category: 'frontend', iconName: 'SiHtml5', level: 'advanced' },
  
  // Backend
  { id: 5, name: 'Java', category: 'backend', iconName: 'FaJava', level: 'advanced' },
  { id: 6, name: 'Spring Boot', category: 'backend', iconName: 'SiSpringboot', level: 'advanced' },
  { id: 7, name: 'Node.js', category: 'backend', iconName: 'SiNodedotjs', level: 'intermediate' },
  
  // Database
  { id: 8, name: 'MySQL', category: 'database', iconName: 'SiMysql', level: 'advanced' },
  { id: 9, name: 'PostgreSQL', category: 'database', iconName: 'SiPostgresql', level: 'intermediate' },
  { id: 10, name: 'Redis', category: 'database', iconName: 'SiRedis', level: 'intermediate' },
  
  // DevOps
  { id: 11, name: 'Docker', category: 'devops', iconName: 'SiDocker', level: 'intermediate' },
  { id: 12, name: 'AWS', category: 'devops', iconName: 'SiAmazonaws', level: 'beginner' },
  { id: 13, name: 'GitHub Actions', category: 'devops', iconName: 'SiGithubactions', level: 'intermediate' },
  
  // Tools
  { id: 14, name: 'Git', category: 'tools', iconName: 'SiGit', level: 'advanced' },
  { id: 15, name: 'VS Code', category: 'tools', iconName: 'SiVisualstudiocode', level: 'advanced' },
  { id: 16, name: 'IntelliJ IDEA', category: 'tools', iconName: 'SiIntellijidea', level: 'advanced' },
];

// 프로젝트 목록
export const MOCK_PROJECT_LIST: ProjectListItem[] = [
  {
    id: 1,
    title: '실시간 코딩 교육 플랫폼',
    description: '강사와 학생이 실시간으로 코드를 공유하고 협업할 수 있는 온라인 교육 플랫폼입니다.',
    thumbnailUrl: undefined,
    skills: [
      MOCK_SKILLS[0], // React
      MOCK_SKILLS[1], // TypeScript
      MOCK_SKILLS[5], // Spring Boot
      MOCK_SKILLS[9], // Redis
    ],
    githubUrl: 'https://github.com/username/coding-platform',
    demoUrl: 'https://demo.example.com',
    startDate: '2024-01',
    endDate: undefined,
    isHighlighted: true,
  },
  {
    id: 2,
    title: '개인 블로그 & 포트폴리오',
    description: '기술 블로그와 포트폴리오를 통합한 개인 웹사이트입니다.',
    thumbnailUrl: undefined,
    skills: [
      MOCK_SKILLS[0], // React
      MOCK_SKILLS[1], // TypeScript
      MOCK_SKILLS[5], // Spring Boot
    ],
    githubUrl: 'https://github.com/username/portfolio',
    demoUrl: undefined,
    startDate: '2024-02',
    endDate: '2024-03',
    isHighlighted: false,
  },
  {
    id: 3,
    title: 'Todo 앱',
    description: 'React와 Spring Boot로 만든 간단한 Todo 애플리케이션입니다.',
    thumbnailUrl: undefined,
    skills: [
      MOCK_SKILLS[0], // React
      MOCK_SKILLS[5], // Spring Boot
      MOCK_SKILLS[7], // MySQL
    ],
    githubUrl: 'https://github.com/username/todo-app',
    demoUrl: undefined,
    startDate: '2023-12',
    endDate: '2024-01',
    isHighlighted: false,
  },
];

// 프로젝트 상세 (하이라이트 프로젝트)
export const MOCK_PROJECT_DETAIL: Project = {
  id: 1,
  title: '실시간 코딩 교육 플랫폼',
  description: '강사와 학생이 실시간으로 코드를 공유하고 협업할 수 있는 온라인 교육 플랫폼입니다.',
  content: `
# 실시간 코딩 교육 플랫폼

## 프로젝트 소개

강사와 학생이 실시간으로 코드를 공유하고 협업할 수 있는 온라인 교육 플랫폼입니다.

## 주요 기능

- **실시간 코드 동기화**: WebSocket을 활용한 실시간 코드 공유
- **역할 기반 권한 관리**: 강사/학생 역할에 따른 기능 제한
- **코드 잠금 기능**: 동시 편집 충돌 방지
- **버전 관리**: 코드 변경 이력 추적

## 기술적 도전

### Delta 기반 전송

전체 코드 대신 변경된 부분만 전송하여 네트워크 효율성을 높였습니다.

\`\`\`typescript
interface CodeDelta {
  type: 'insert' | 'delete' | 'replace';
  position: number;
  content: string;
}
\`\`\`

### Redis Pub/Sub

여러 서버 인스턴스 간 실시간 메시지 동기화를 위해 Redis Pub/Sub을 활용했습니다.

## 배운 점

- WebSocket 연결 관리와 재연결 전략
- 실시간 시스템에서의 동시성 제어
- 효율적인 상태 동기화 패턴
`,
  thumbnailUrl: undefined,
  skills: [
    MOCK_SKILLS[0], // React
    MOCK_SKILLS[1], // TypeScript
    MOCK_SKILLS[5], // Spring Boot
    MOCK_SKILLS[9], // Redis
  ],
  githubUrl: 'https://github.com/username/coding-platform',
  demoUrl: 'https://demo.example.com',
  startDate: '2024-01',
  endDate: undefined,
  isHighlighted: true,
  isPublished: true,
  createdAt: '2024-01-01',
  updatedAt: '2024-03-15',
};

// 명언 목록
export const QUOTES = [
  {
    text: "코드는 사람이 읽기 위해 작성되고, 우연히 기계가 실행할 수 있을 뿐이다.",
    author: "Harold Abelson",
  },
  {
    text: "단순함은 궁극의 정교함이다.",
    author: "Leonardo da Vinci",
  },
  {
    text: "먼저 동작하게 만들고, 그 다음에 올바르게 만들고, 마지막으로 빠르게 만들어라.",
    author: "Kent Beck",
  },
];
