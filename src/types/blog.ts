// 카테고리
export interface Category {
  id: number;
  name: string;
  slug: string;
  postCount?: number;
}

// 태그
export interface Tag {
  id: number;
  name: string;
}

// 블로그 포스트
export interface Post {
  id: number;
  title: string;
  content: string;
  summary: string;
  categoryId: number;
  category?: Category;
  tags: Tag[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

// 블로그 목록 조회 시 사용 (content 제외)
export interface PostListItem {
  id: number;
  title: string;
  summary: string;
  categoryId: number;
  category?: Category;
  tags: Tag[];
  createdAt: string;
}

// 페이지네이션 응답
export interface PaginatedResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  currentPage: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}
