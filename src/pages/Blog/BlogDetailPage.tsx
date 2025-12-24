import { useParams } from 'react-router-dom';
import styles from './BlogDetailPage.module.css';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Detail</h1>
      <p className={styles.description}>블로그 상세 (ID: {id})</p>
    </div>
  );
};

export default BlogDetailPage;
