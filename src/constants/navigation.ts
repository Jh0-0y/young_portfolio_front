import type { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Blog', path: '/blog' },
  { label: 'Portfolio', path: '/portfolio' },
];

export const SITE_CONFIG = {
  title: 'Dev Portfolio',
  description: '풀스택 개발자 포트폴리오 & 기술 블로그',
  author: 'Your Name',
} as const;
