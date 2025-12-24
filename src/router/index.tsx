import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/Home';
import { BlogListPage, BlogDetailPage } from '@/pages/Blog';
import { PortfolioPage, PortfolioDetailPage } from '@/pages/Portfolio';
import NotFoundPage from '@/pages/NotFound';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'blog',
          element: <BlogListPage />,
        },
        {
          path: 'blog/:id',
          element: <BlogDetailPage />,
        },
        {
          path: 'portfolio',
          element: <PortfolioPage />,
        },
        {
          path: 'portfolio/:id',
          element: <PortfolioDetailPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
