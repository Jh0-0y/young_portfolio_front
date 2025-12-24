import { useParams } from 'react-router-dom';
import styles from './PortfolioDetailPage.module.css';

const PortfolioDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Project Detail</h1>
      <p className={styles.description}>프로젝트 상세 (ID: {id})</p>
    </div>
  );
};

export default PortfolioDetailPage;
