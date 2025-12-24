// API 응답 공통 타입
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// API 에러 응답
export interface ApiError {
  success: false;
  message: string;
  errorCode?: string;
}

// 네비게이션 아이템
export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}
