// ========================================
// 🎯 Archiving 데이터
// ========================================

import type { ArchivingItem } from '@/types/portfolio';

export const archivingData: ArchivingItem[] = [
  {
    type: 'github',
    title: 'GitHub',
    url: 'https://github.com/your-username',
    description: '소스 코드 저장소',
    highlights: [
      '개인/팀 프로젝트 소스 코드',
      '알고리즘 문제 풀이',
      '학습 내용 정리',
    ],
  },
  {
    type: 'blog',
    title: 'Tech Blog',
    url: 'https://your-blog.com',
    description: '기술 블로그',
    highlights: [
      '개발하면서 배운 내용 정리',
      '트러블슈팅 경험 공유',
      '기술 관련 글 작성',
    ],
  },
];
