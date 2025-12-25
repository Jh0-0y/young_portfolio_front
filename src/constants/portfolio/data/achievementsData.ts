import type { AchievementData } from '../types';

export const achievementsData: AchievementData[] = [
  // ------------------------------------
  // 성능 개선 (Performance)
  // ------------------------------------
  {
    id: 'ach-1',
    category: 'performance',
    title: '실시간 동기화 성능 최적화',
    description:
      '전체 코드 전송 방식에서 Delta 기반 전송으로 변경하여 네트워크 효율성을 크게 개선했습니다.',
    metrics: '네트워크 트래픽 85% 감소, 응답 시간 200ms → 50ms',
    projectRef: 'realtime-coding-platform',
  },
  {
    id: 'ach-2',
    category: 'performance',
    title: '프론트엔드 렌더링 최적화',
    description:
      '대용량 테이블 렌더링 시 발생하는 성능 저하를 가상 스크롤링으로 해결했습니다.',
    metrics: '초기 로딩 시간 3초 → 0.5초',
    projectRef: 'admin-dashboard',
  },

  // ------------------------------------
  // 협업 (Collaboration)
  // ------------------------------------
  {
    id: 'ach-3',
    category: 'collaboration',
    title: '백엔드-프론트엔드 API 설계 협업',
    description:
      'API 명세서를 먼저 정의하고 Mock 데이터로 병렬 개발을 진행하여 개발 기간을 단축했습니다.',
    metrics: '개발 기간 2주 단축',
    projectRef: 'realtime-coding-platform',
  },

  // ------------------------------------
  // 성장 (Growth)
  // ------------------------------------
  {
    id: 'ach-4',
    category: 'growth',
    title: 'WebSocket & Redis 학습 및 적용',
    description:
      '실시간 기능 요구사항을 위해 WebSocket과 Redis Pub/Sub을 학습하고 프로젝트에 적용했습니다.',
    projectRef: 'realtime-coding-platform',
  },
  {
    id: 'ach-5',
    category: 'growth',
    title: 'CI/CD 파이프라인 구축 경험',
    description:
      'GitHub Actions를 활용한 자동 배포 환경을 처음부터 구축하며 DevOps 역량을 키웠습니다.',
    projectRef: 'portfolio-blog',
  },
];
