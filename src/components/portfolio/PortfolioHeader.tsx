import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiDownload } from 'react-icons/fi';
import { useDarkMode } from '@/hooks';
import { PORTFOLIO_SECTIONS, portfolioData } from '@/constants/portfolioData';
import styles from './PortfolioHeader.module.css';

const PortfolioHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState('intro');
  const [isScrolled, setIsScrolled] = useState(false);

  const isDetailPage = location.pathname.includes('/portfolio/project/');

  useEffect(() => {
    if (isDetailPage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = PORTFOLIO_SECTIONS.map(({ id }) => ({
        id,
        element: document.getElementById(id),
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDetailPage]);

  const scrollToSection = (id: string) => {
    if (isDetailPage) {
      navigate('/portfolio');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const top = element.offsetTop - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const top = element.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (isDetailPage) {
      navigate('/portfolio');
    } else {
      scrollToSection('intro');
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = `${portfolioData.intro.name}_이력서.pdf`;
    link.click();
  };

  return (
    <header className={`${styles.header} ${isScrolled || isDetailPage ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button className={styles.logo} onClick={handleLogoClick}>
          {portfolioData.intro.name}
        </button>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {PORTFOLIO_SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <button
                  className={`${styles.navItem} ${!isDetailPage && activeSection === id ? styles.active : ''}`}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.downloadButton}
            onClick={handleDownloadResume}
            title="이력서 다운로드"
          >
            <FiDownload size={18} />
            <span className={styles.downloadText}>이력서</span>
          </button>

          <button
            className={styles.themeToggle}
            onClick={toggleDarkMode}
            aria-label={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
