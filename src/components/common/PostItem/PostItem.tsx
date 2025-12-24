import { Link } from 'react-router-dom';
import type { PostListItem } from '@/types';
import styles from './PostItem.module.css';

interface PostItemProps {
  post: PostListItem;
}

const PostItem = ({ post }: PostItemProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className={styles.item}>
      <Link to={`/blog/${post.id}`} className={styles.link}>
        <div className={styles.meta}>
          {post.category && (
            <span className={styles.category}>{post.category.name}</span>
          )}
          <time className={styles.date} dateTime={post.createdAt}>
            {formatDate(post.createdAt)}
          </time>
        </div>

        <h3 className={styles.title}>{post.title}</h3>

        <p className={styles.summary}>{post.summary}</p>

        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag.id} className={styles.tag}>
                #{tag.name}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
};

export default PostItem;
