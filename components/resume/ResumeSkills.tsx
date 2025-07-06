import React from 'react';
import ResumeSection from './ResumeSection';

interface SkillCategoryProps {
  category: string;
  skills: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills }) => (
  <li className="mb-3 text-purple-200">
    <strong>{category}:</strong> {skills}
  </li>
);

interface ResumeSkillsProps {
  index: number;
}

const ResumeSkills: React.FC<ResumeSkillsProps> = ({ index }) => {
  const skills = [
    {
      category: 'Programming Languages',
      skills: 'Java, Python, JavaScript/TypeScript, SQL, Rust (Learning), C/C++',
    },
    {
      category: 'Web Technologies & Frameworks',
      skills: 'HTML, React.js, Node.js, Next.js, REST APIs, Microservices, Flask, jQuery, FastAPI',
    },
    {
      category: 'Cloud & DevOps',
      skills: 'AWS, Docker, Kubernetes (Basic), CI/CD, Git, Terraform, Ansible, Jenkins, SVN',
    },
    {
      category: 'Databases',
      skills: 'PostgreSQL, MySQL, MariaDB, MongoDB, Redis, Oracle DB',
    },
    {
      category: 'Professional Skills',
      skills: 'Problem-Solving, Critical Thinking, Decision-Making, Team Collaboration, Communication, Leadership',
    },
    {
      category: 'Other Technologies & Interests',
      skills: 'Machine Learning, Deep Learning, Cybersecurity, IoT, Edge Computing, Embedded Systems, Game Development, Reverse Engineering',
    },
  ];

  return (
    <ResumeSection title="🛠️ Skills" index={index}>
      <ul className="list-disc list-inside text-purple-200 space-y-2">
        {skills.map((skill, idx) => (
          <SkillCategory key={idx} {...skill} />
        ))}
      </ul>
    </ResumeSection>
  );
};

export default ResumeSkills;
