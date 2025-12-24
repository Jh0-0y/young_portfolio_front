import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { MOCK_PROFILE } from '@/constants';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          {MOCK_PROFILE.githubUrl && (
            <a
              href={MOCK_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
          )}
          {MOCK_PROFILE.linkedInUrl && (
            <a
              href={MOCK_PROFILE.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          )}
          {MOCK_PROFILE.email && (
            <a
              href={`mailto:${MOCK_PROFILE.email}`}
              className={styles.socialLink}
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          )}
        </div>

        <p className={styles.copyright}>
          © {currentYear} {MOCK_PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
