import React from 'react';
import ResumeSection from './ResumeSection';

interface EducationItemProps {
  institution: string;
  degree?: string;
  cgpa?: string;
  graduated?: string;
  percentage?: string;
  coursework?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  degree,
  cgpa,
  graduated,
  percentage,
  coursework,
}) => (
  <div className="mb-6 p-6 rounded-lg shadow-sm">
    <h4 className="text-xl font-semibold text-purple-300 mb-2">{institution}</h4>
    {degree && <p className="text-md text-purple-200 mb-1">📚 {degree} {cgpa && `(CGPA: ${cgpa})`}</p>}
    {graduated && percentage && (
      <p className="text-md text-purple-200 mb-1">{degree ? '' : ''}Graduated: {graduated} | Percentage: {percentage}</p>
    )}
    {coursework && <p className="text-md text-purple-200">Coursework: {coursework}</p>}
  </div>
);

interface ResumeEducationProps {
  index: number;
}

const ResumeEducation: React.FC<ResumeEducationProps> = ({ index }) => {
  const education = [
    {
      institution: 'Vellore Institute of Technology, Amaravathi',
      degree: 'B.Tech Computer Science Engineering',
      cgpa: '8.92',
      graduated: '2022–Present',
    },
    {
      institution: 'SBOA School and Junior College, Chennai, India',
      degree: 'Intermediate / 12th Grade',
      graduated: 'May 2022',
      percentage: '80%',
      coursework: 'Mathematics, Physics, Chemistry, Computer Science',
    },
    {
      institution: 'SBOA School and Junior College, Chennai, India',
      degree: '10th Grade',
      graduated: 'June 2020',
      percentage: '92%',
    },
  ];

  return (
    <ResumeSection title="🎓 Education" index={index}>
      {education.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </ResumeSection>
  );
};

export default ResumeEducation;
