import type { SkillGroup } from '@/types/portfolio';
import { SkillBadge } from '@/components/common';
import styles from './SkillsSection.module.css';

interface SkillsSectionProps {
  data: SkillGroup[];
}

const SkillsSection = ({ data }: SkillsSectionProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      
      <div className={styles.skillGroups}>
        {data.map((group) => (
          <div key={group.category} className={styles.skillGroup}>
            <h3 className={styles.skillCategory}>{group.label}</h3>
            <div className={styles.skillItems}>
              {group.items.map((badgeName) => (
                <SkillBadge key={badgeName} name={badgeName} size="lg" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
