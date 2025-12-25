import type { IntroData } from '../types';

export const introData: IntroData = {
  name: '정현영',
  title: '풀스택 개발자',
  profileImage: '/images/profile_img.jpg',

  summary: `사용자 경험을 최우선으로 생각하는 풀스택 개발자입니다.
  
  React와 Spring Boot를 활용한 웹 서비스 개발 경험이 있으며,
  실시간 데이터 처리를 위한 WebSocket + Redis 기반 시스템을 설계하고 구현했습니다.
  
  단순 기능 구현을 넘어, 성능 최적화와 사용자 중심의 문제 해결에 집중합니다.`,

  skills: [
    {
      category: 'frontend',
      label: 'Frontend',
      items: ['react', 'typescript', 'javascript', 'html', 'css'],
    },
    {
      category: 'backend',
      label: 'Backend',
      items: ['java', 'spring-boot', 'spring-security', 'jpa'],
    },
    {
      category: 'database',
      label: 'Database',
      items: ['mariadb', 'postgresql', 'redis'],
    },
    {
      category: 'devops',
      label: 'DevOps',
      items: ['docker', 'github-actions', 'render'],
    },
  ],

  contact: {
    email: 'your-email@example.com',
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    blog: 'https://your-blog.com',
  },
};
