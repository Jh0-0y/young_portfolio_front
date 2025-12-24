import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiSpringboot,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiIntellijidea,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import type { Skill } from '@/types';
import styles from './SkillBadge.module.css';

// 아이콘 매핑
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  FaJava,
  SiSpringboot,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiIntellijidea,
};

interface SkillBadgeProps {
  skill: Skill;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const SkillBadge = ({ skill, showIcon = true, size = 'md' }: SkillBadgeProps) => {
  const IconComponent = skill.iconName ? iconMap[skill.iconName] : null;
  const iconSize = size === 'sm' ? 14 : size === 'md' ? 16 : 20;

  return (
    <span className={`${styles.badge} ${styles[size]}`}>
      {showIcon && IconComponent && (
        <IconComponent size={iconSize} />
      )}
      <span className={styles.name}>{skill.name}</span>
    </span>
  );
};

export default SkillBadge;
