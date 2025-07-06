import React from 'react';
import ResumeSection from './ResumeSection';

interface ResumeSummaryProps {
  summary: string;
  index: number;
}

const ResumeSummary: React.FC<ResumeSummaryProps> = ({ summary, index }) => {
  return (
    <ResumeSection title="🧾 Summary" index={index}>
      <p className="text-purple-200 leading-relaxed">{summary}</p>
    </ResumeSection>
  );
};

export default ResumeSummary;
