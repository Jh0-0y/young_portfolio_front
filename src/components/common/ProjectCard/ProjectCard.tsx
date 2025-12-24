import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SkillBadge from '@/components/common/SkillBadge';
import type { ProjectListItem } from '@/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectListItem;
  isHighlighted?: boolean;
}

const ProjectCard = ({ project, isHighlighted = false }: ProjectCardProps) => {
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-');
    return `${year}.${month}`;
  };

  return (
    <article className={`${styles.card} ${isHighlighted ? styles.highlighted : ''}`}>
      <Link to={`/portfolio/${project.id}`} className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.period}>
            {formatDate(project.startDate)} ~ {project.endDate ? formatDate(project.endDate) : '진행중'}
          </span>
        </div>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.skills}>
          {project.skills.slice(0, 5).map((skill) => (
            <SkillBadge key={skill.id} skill={skill} size="sm" />
          ))}
          {project.skills.length > 5 && (
            <span className={styles.moreSkills}>+{project.skills.length - 5}</span>
          )}
        </div>
      </Link>

      <div className={styles.links}>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            onClick={(e) => e.stopPropagation()}
            aria-label="GitHub 저장소"
          >
            <FiGithub size={18} />
            <span>GitHub</span>
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            onClick={(e) => e.stopPropagation()}
            aria-label="데모 사이트"
          >
            <FiExternalLink size={18} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
