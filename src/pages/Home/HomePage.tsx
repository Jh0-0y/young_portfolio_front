import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.description}>홈페이지 콘텐츠가 여기에 들어갑니다.</p>
    </div>
  );
};

export default HomePage;
