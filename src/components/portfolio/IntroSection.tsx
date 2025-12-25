import { FiMail, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import type { IntroData } from '@/constants/portfolioData';
import { SkillBadge } from '@/components/common';
import styles from './IntroSection.module.css';

interface IntroSectionProps {
  data: IntroData;
}

const IntroSection = ({ data }: IntroSectionProps) => {
  return (
    <div className={styles.container}>
      {/* 상단: 프로필 카드 */}
      <div className={styles.profileCard}>
        {data.profileImage && (
          <div className={styles.imageWrapper}>
            <img
              src={data.profileImage}
              alt={`${data.name} 프로필`}
              className={styles.profileImage}
            />
          </div>
        )}

        <div className={styles.profileInfo}>
          <div className={styles.header}>
            <h1 className={styles.name}>{data.name}</h1>
            <p className={styles.title}>{data.title}</p>
          </div>

          <div className={styles.summary}>
            {data.summary.split('\n').map((line, index) => (
              <p key={index}>{line || <br />}</p>
            ))}
          </div>

          <div className={styles.contactLinks}>
            <a href={`mailto:${data.contact.email}`} className={styles.contactLink}>
              <FiMail size={16} />
              <span>{data.contact.email}</span>
            </a>
            {data.contact.github && (
              <a
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <FiGithub size={16} />
                <span>GitHub</span>
              </a>
            )}
            {data.contact.linkedin && (
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <FiLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
            )}
            {data.contact.blog && (
              <a
                href={data.contact.blog}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <FiExternalLink size={16} />
                <span>Blog</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 하단: 기술 스택 */}
      <div className={styles.skills}>
        <h2 className={styles.skillsTitle}>기술 스택</h2>
        <div className={styles.skillGroups}>
          {data.skills.map((group) => (
            <div key={group.category} className={styles.skillGroup}>
              <h3 className={styles.skillCategory}>{group.label}</h3>
              <div className={styles.skillItems}>
                {group.items.map((badgeName) => (
                  <SkillBadge key={badgeName} name={badgeName} size="md" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
