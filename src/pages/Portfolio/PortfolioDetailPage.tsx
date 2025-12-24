import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiExternalLink, FiCalendar } from 'react-icons/fi';
import { getProject } from '@/api';
import SkillBadge from '@/components/common/SkillBadge';
import MarkdownRenderer from '@/components/markdown';
import type { Project } from '@/types';
import styles from './PortfolioDetailPage.module.css';

const PortfolioDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        const data = await getProject(parseInt(id, 10));
        setProject(data);
      } catch (err) {
        console.error('프로젝트를 불러오는데 실패했습니다:', err);
        setError('프로젝트를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    return `${year}년 ${parseInt(month, 10)}월`;
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <span>로딩 중...</span>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className={styles.error}>
        <p>{error || '프로젝트를 찾을 수 없습니다.'}</p>
        <Link to="/portfolio" className={styles.backLink}>
          <FiArrowLeft size={18} />
          포트폴리오로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <article className={styles.container}>
      {/* Back Link */}
      <Link to="/portfolio" className={styles.backLink}>
        <FiArrowLeft size={18} />
        목록으로
      </Link>

      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.meta}>
          <span className={styles.period}>
            <FiCalendar size={16} />
            {formatDate(project.startDate)} ~{' '}
            {project.endDate ? formatDate(project.endDate) : '진행중'}
          </span>
        </div>

        <p className={styles.description}>{project.description}</p>

        {/* Skills */}
        <div className={styles.skills}>
          {project.skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} size="md" />
          ))}
        </div>

        {/* Links */}
        <div className={styles.links}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <FiGithub size={18} />
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkButton} ${styles.primary}`}
            >
              <FiExternalLink size={18} />
              Demo
            </a>
          )}
        </div>
      </header>

      {/* Content */}
      <div className={styles.content}>
        <MarkdownRenderer content={project.content} />
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <Link to="/portfolio" className={styles.backButton}>
          <FiArrowLeft size={18} />
          목록으로 돌아가기
        </Link>
      </footer>
    </article>
  );
};

export default PortfolioDetailPage;
