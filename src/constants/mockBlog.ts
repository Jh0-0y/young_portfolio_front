import type { Category, Post, PostListItem } from '@/types';

// 카테고리 목데이터
export const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: '전체', slug: 'all', postCount: 10 },
  { id: 2, name: 'React', slug: 'react', postCount: 4 },
  { id: 3, name: 'Spring Boot', slug: 'spring-boot', postCount: 3 },
  { id: 4, name: 'TypeScript', slug: 'typescript', postCount: 2 },
  { id: 5, name: 'DevOps', slug: 'devops', postCount: 1 },
];

// 블로그 목록 목데이터
export const MOCK_POST_LIST: PostListItem[] = [
  {
    id: 1,
    title: 'React 18의 새로운 기능들',
    summary: 'React 18에서 도입된 Concurrent Features, Suspense, Transition 등의 새로운 기능들을 알아봅니다.',
    categoryId: 2,
    category: MOCK_CATEGORIES[1],
    tags: [{ id: 1, name: 'React' }, { id: 2, name: 'Frontend' }],
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    title: 'Spring Boot 3.x 마이그레이션 가이드',
    summary: 'Spring Boot 2.x에서 3.x로 마이그레이션할 때 주의해야 할 사항들과 변경점을 정리합니다.',
    categoryId: 3,
    category: MOCK_CATEGORIES[2],
    tags: [{ id: 3, name: 'Spring Boot' }, { id: 4, name: 'Java' }],
    createdAt: '2024-01-10',
  },
  {
    id: 3,
    title: 'TypeScript 제네릭 완벽 가이드',
    summary: 'TypeScript의 제네릭을 활용한 타입 안전한 코드 작성법을 예제와 함께 설명합니다.',
    categoryId: 4,
    category: MOCK_CATEGORIES[3],
    tags: [{ id: 5, name: 'TypeScript' }, { id: 2, name: 'Frontend' }],
    createdAt: '2024-01-05',
  },
  {
    id: 4,
    title: 'Docker로 개발환경 구축하기',
    summary: 'Docker와 Docker Compose를 활용하여 일관된 개발환경을 구축하는 방법을 알아봅니다.',
    categoryId: 5,
    category: MOCK_CATEGORIES[4],
    tags: [{ id: 6, name: 'Docker' }, { id: 7, name: 'DevOps' }],
    createdAt: '2024-01-01',
  },
  {
    id: 5,
    title: 'Zustand로 상태관리 간단하게',
    summary: 'Redux의 복잡함 없이 Zustand를 사용하여 간단하고 효율적인 상태관리를 구현합니다.',
    categoryId: 2,
    category: MOCK_CATEGORIES[1],
    tags: [{ id: 1, name: 'React' }, { id: 8, name: 'Zustand' }],
    createdAt: '2023-12-28',
  },
];

// 블로그 상세 목데이터
export const MOCK_POST_DETAIL: Post = {
  id: 1,
  title: 'React 18의 새로운 기능들',
  content: `
# React 18의 새로운 기능들

React 18은 많은 새로운 기능들을 도입했습니다. 이 글에서는 주요 기능들을 살펴보겠습니다.

## 1. Concurrent Features

Concurrent 렌더링은 React가 여러 버전의 UI를 동시에 준비할 수 있게 해줍니다.

\`\`\`javascript
import { startTransition } from 'react';

function handleClick() {
  startTransition(() => {
    setSearchQuery(input);
  });
}
\`\`\`

## 2. Automatic Batching

React 18에서는 모든 업데이트가 자동으로 배칭됩니다.

\`\`\`javascript
// React 18에서는 이 두 setState가 자동으로 배칭됨
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
}, 1000);
\`\`\`

## 3. Suspense 개선

서버 사이드 렌더링에서도 Suspense를 사용할 수 있게 되었습니다.

## 결론

React 18은 성능과 사용자 경험을 크게 개선하는 많은 기능들을 제공합니다.
`,
  summary: 'React 18에서 도입된 Concurrent Features, Suspense, Transition 등의 새로운 기능들을 알아봅니다.',
  categoryId: 2,
  category: MOCK_CATEGORIES[1],
  tags: [{ id: 1, name: 'React' }, { id: 2, name: 'Frontend' }],
  isPublished: true,
  createdAt: '2024-01-15',
  updatedAt: '2024-01-15',
};
