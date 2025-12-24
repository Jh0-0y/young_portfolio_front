import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPosts, getCategories } from '@/api';
import PostItem from '@/components/common/PostItem';
import Pagination from '@/components/common/Pagination';
import type { PostListItem, Category, PaginatedResponse } from '@/types';
import styles from './BlogListPage.module.css';

const BlogListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<PaginatedResponse<PostListItem> | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const currentCategoryId = parseInt(searchParams.get('category') || '1', 10);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('카테고리를 불러오는데 실패했습니다:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const data = await getPosts({
          categoryId: currentCategoryId,
          page: currentPage - 1, // API는 0-based
          size: 10,
        });
        setPosts(data);
      } catch (error) {
        console.error('글 목록을 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, currentCategoryId]);

  const handleCategoryChange = (categoryId: number) => {
    setSearchParams({ category: categoryId.toString(), page: '1' });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({
      category: currentCategoryId.toString(),
      page: page.toString(),
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>카테고리</h2>
        <ul className={styles.categoryList}>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                className={`${styles.categoryItem} ${
                  currentCategoryId === category.id ? styles.active : ''
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <span className={styles.categoryName}>{category.name}</span>
                {category.postCount !== undefined && (
                  <span className={styles.categoryCount}>{category.postCount}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.description}>
            개발하면서 배운 것들을 정리합니다.
          </p>
        </header>

        {loading ? (
          <div className={styles.loading}>
            <span>로딩 중...</span>
          </div>
        ) : posts && posts.content.length > 0 ? (
          <>
            <div className={styles.postList}>
              {posts.content.map((post) => (
                <PostItem key={post.id} post={post} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={posts.totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className={styles.empty}>
            <p>아직 작성된 글이 없습니다.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogListPage;
