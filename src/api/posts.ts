import { apiClient } from './client';
import type { Post, PostListItem, Category, PaginatedResponse } from '@/types';

// 실제 API 연동 전에는 목데이터 사용
import { MOCK_CATEGORIES, MOCK_POST_LIST, MOCK_POST_DETAIL } from '@/constants';

const USE_MOCK = true; // 백엔드 연동 시 false로 변경

// 카테고리 목록 조회
export const getCategories = async (): Promise<Category[]> => {
  if (USE_MOCK) {
    return Promise.resolve(MOCK_CATEGORIES);
  }
  const response = await apiClient.get<Category[]>('/categories');
  return response.data;
};

// 블로그 목록 조회
export const getPosts = async (params?: {
  categoryId?: number;
  page?: number;
  size?: number;
}): Promise<PaginatedResponse<PostListItem>> => {
  if (USE_MOCK) {
    const { categoryId, page = 0, size = 10 } = params || {};
    let filteredPosts = MOCK_POST_LIST;
    
    if (categoryId && categoryId !== 1) { // 1은 '전체' 카테고리
      filteredPosts = MOCK_POST_LIST.filter(post => post.categoryId === categoryId);
    }
    
    const totalElements = filteredPosts.length;
    const totalPages = Math.ceil(totalElements / size);
    const start = page * size;
    const content = filteredPosts.slice(start, start + size);
    
    return Promise.resolve({
      content,
      totalPages,
      totalElements,
      currentPage: page,
      size,
      hasNext: page < totalPages - 1,
      hasPrevious: page > 0,
    });
  }
  
  const response = await apiClient.get<PaginatedResponse<PostListItem>>('/posts', { params });
  return response.data;
};

// 블로그 상세 조회
export const getPost = async (id: number): Promise<Post> => {
  if (USE_MOCK) {
    // 목데이터에서는 항상 같은 상세 데이터 반환 (실제로는 id로 조회)
    return Promise.resolve({ ...MOCK_POST_DETAIL, id });
  }
  const response = await apiClient.get<Post>(`/posts/${id}`);
  return response.data;
};

// 최근 글 조회 (홈페이지용)
export const getRecentPosts = async (limit: number = 5): Promise<PostListItem[]> => {
  if (USE_MOCK) {
    return Promise.resolve(MOCK_POST_LIST.slice(0, limit));
  }
  const response = await apiClient.get<PostListItem[]>('/posts/recent', {
    params: { limit },
  });
  return response.data;
};
