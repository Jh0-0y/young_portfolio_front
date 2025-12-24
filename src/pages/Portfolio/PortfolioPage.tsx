import { useEffect, useState } from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { getProfile, getSkills, getProjects } from '@/api';
import SkillBadge from '@/components/common/SkillBadge';
import ProjectCard from '@/components/common/ProjectCard';
import type { Profile, Skill, ProjectListItem, SkillCategory } from '@/types';
import styles from './PortfolioPage.module.css';

const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  devops: 'DevOps',
  tools: 'Tools',
  etc: '기타',
};

const PortfolioPage = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<ProjectListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileData, skillsData, projectsData] = await Promise.all([
          getProfile(),
          getSkills(),
          getProjects(),
        ]);
        setProfile(profileData);
        setSkills(skillsData);
        setProjects(projectsData);
      } catch (error) {
        console.error('데이터를 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 카테고리별 스킬 그룹화
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, Skill[]>);

  // 하이라이트 프로젝트와 나머지 프로젝트 분리
  const highlightedProject = projects.find((p) => p.isHighlighted);
  const otherProjects = projects.filter((p) => !p.isHighlighted);

  if (loading) {
    return (
      <div className={styles.loading}>
        <span>로딩 중...</span>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Profile Section */}
      <section className={styles.profileSection}>
        <div className={styles.profileContent}>
          <h1 className={styles.name}>{profile?.name}</h1>
          <p className={styles.title}>{profile?.title}</p>
          <p className={styles.bio}>{profile?.bio}</p>

          <div className={styles.contactLinks}>
            {profile?.email && (
              <a
                href={`mailto:${profile.email}`}
                className={styles.contactLink}
              >
                <FiMail size={18} />
                <span>{profile.email}</span>
              </a>
            )}
            {profile?.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <FiGithub size={18} />
                <span>GitHub</span>
              </a>
            )}
            {profile?.linkedInUrl && (
              <a
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <FiLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          {profile?.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className={styles.downloadButton}
            >
              <FiDownload size={18} />
              이력서 다운로드
            </a>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <h2 className={styles.sectionTitle}>기술 스택</h2>
        <div className={styles.skillGroups}>
          {(Object.keys(SKILL_CATEGORY_LABELS) as SkillCategory[]).map(
            (category) =>
              groupedSkills[category] && (
                <div key={category} className={styles.skillGroup}>
                  <h3 className={styles.skillCategory}>
                    {SKILL_CATEGORY_LABELS[category]}
                  </h3>
                  <div className={styles.skillList}>
                    {groupedSkills[category].map((skill) => (
                      <SkillBadge key={skill.id} skill={skill} size="md" />
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>프로젝트</h2>

        {/* Highlighted Project */}
        {highlightedProject && (
          <div className={styles.highlightedProject}>
            <h3 className={styles.subsectionTitle}>🔥 주요 프로젝트</h3>
            <ProjectCard project={highlightedProject} isHighlighted />
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className={styles.otherProjects}>
            <h3 className={styles.subsectionTitle}>다른 프로젝트</h3>
            <div className={styles.projectGrid}>
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PortfolioPage;
