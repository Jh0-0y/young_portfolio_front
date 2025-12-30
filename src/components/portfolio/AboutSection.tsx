import type { AboutData } from '@/types/portfolio';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  data: AboutData;
}

const AboutSection = ({ data }: AboutSectionProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      
      <div className={styles.content}>
        {data.profileImage && (
          <div className={styles.imageWrapper}>
            <img
              src={data.profileImage}
              alt={`${data.name} 프로필`}
              className={styles.profileImage}
            />
          </div>
        )}

        <div className={styles.info}>
          <div className={styles.header}>
            <h3 className={styles.name}>{data.name}</h3>
            <p className={styles.title}>{data.title}</p>
          </div>

          <div className={styles.summary}>
            {data.summary.split('\n').map((line, index) => (
              <p key={index}>{line || <br />}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
