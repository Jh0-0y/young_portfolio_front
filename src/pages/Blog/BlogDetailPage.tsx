import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiFolder } from 'react-icons/fi';
import { getPost } from '@/api';
import MarkdownRenderer from '@/components/markdown';
import type { Post } from '@/types';
import styles from './BlogDetailPage.module.css';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        const data = await getPost(parseInt(id, 10));
        setPost(data);
      } catch (err) {
        console.error('글을 불러오는데 실패했습니다:', err);
        setError('글을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <span>로딩 중...</span>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className={styles.error}>
        <p>{error || '글을 찾을 수 없습니다.'}</p>
        <Link to="/blog" className={styles.backLink}>
          <FiArrowLeft size={18} />
          블로그 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <article className={styles.container}>
      {/* Back Link */}
      <Link to="/blog" className={styles.backLink}>
        <FiArrowLeft size={18} />
        목록으로
      </Link>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.meta}>
          {post.category && (
            <span className={styles.category}>
              <FiFolder size={14} />
              {post.category.name}
            </span>
          )}
          <time className={styles.date} dateTime={post.createdAt}>
            <FiCalendar size={14} />
            {formatDate(post.createdAt)}
          </time>
        </div>

        <h1 className={styles.title}>{post.title}</h1>

        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag.id} className={styles.tag}>
                #{tag.name}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div className={styles.content}>
        <MarkdownRenderer content={post.content} />
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <Link to="/blog" className={styles.backButton}>
          <FiArrowLeft size={18} />
          목록으로 돌아가기
        </Link>
      </footer>
    </article>
  );
};

export default BlogDetailPage;
