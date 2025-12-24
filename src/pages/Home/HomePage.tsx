import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { getRecentPosts, getProfile, getRandomQuote } from '@/api';
import PostItem from '@/components/common/PostItem';
import type { PostListItem, Profile } from '@/types';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [recentPosts, setRecentPosts] = useState<PostListItem[]>([]);
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileData, postsData] = await Promise.all([
          getProfile(),
          getRecentPosts(3),
        ]);
        setProfile(profileData);
        setRecentPosts(postsData);
        setQuote(getRandomQuote());
      } catch (error) {
        console.error('데이터를 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <span>로딩 중...</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.greeting}>안녕하세요, 저는</p>
          <h1 className={styles.name}>{profile?.name}</h1>
          <p className={styles.title}>{profile?.title}</p>
          <p className={styles.bio}>{profile?.bio}</p>
          
          <div className={styles.heroActions}>
            <Link to="/portfolio" className={styles.primaryButton}>
              포트폴리오 보기
              <FiArrowRight size={18} />
            </Link>
            <Link to="/blog" className={styles.secondaryButton}>
              블로그 읽기
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      {quote && (
        <section className={styles.quoteSection}>
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>"{quote.text}"</p>
            <footer className={styles.quoteAuthor}>— {quote.author}</footer>
          </blockquote>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className={styles.recentPosts}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>최근 글</h2>
          <Link to="/blog" className={styles.viewAll}>
            전체 보기
            <FiArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.postList}>
          {recentPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
