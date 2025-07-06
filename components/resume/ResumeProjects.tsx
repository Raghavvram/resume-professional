import React from 'react';
import ResumeSection from './ResumeSection';

interface ProjectItemProps {
  title: string;
  techStack: string;
  description: string[];
  githubLinks: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  techStack,
  description,
  githubLinks,
}) => (
  <div className="mb-8 p-6 rounded-lg shadow-sm">
    <h4 className="text-xl font-semibold text-purple-300 mb-2">{title}</h4>
    <p className="text-md text-purple-200 mb-3"><strong>Tech Stack:</strong> {techStack}</p>
    <ul className="list-disc list-inside text-purple-200 mb-4 space-y-1">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {githubLinks.length > 0 && (
      <div className="flex flex-wrap gap-4">
        {githubLinks.map((link, index) => (
          <a key={index} href={link} className="text-pink-400 hover:underline text-sm">
            GitHub {githubLinks.length > 1 ? index + 1 : ''}
          </a>
        ))}
      </div>
    )}
  </div>
);

interface ResumeProjectsProps {
  index: number;
}

const ResumeProjects: React.FC<ResumeProjectsProps> = ({ index }) => {
  const projects = [
    {
      title: '🌦️ Multivariate Climate Time Series Forecasting',
      techStack: 'Python, TensorFlow, Flask, Pandas, Scikit-learn',
      description: [
        'Developed and deployed a scalable ML pipeline for climate forecasting, utilizing LSTM, RNN, and GRU models.',
        'Automated data ingestion and preprocessing for large-scale multivariate time-series datasets.',
        'Containerized a Flask web app for real-time trend predictions.',
      ],
      githubLinks: ['https://github.com/Raghavvram/Unveiling-Climate-Change-Dynamics-through-Earth-Surface-Temperature-Analysis-'],
    },
    {
      title: '💡 Li-Fi – Light Fidelity Communication',
      techStack: 'Arduino, Android Studio, Java, Kotlin, C',
      description: [
        'Designed a real-time, point-to-point communication system using visible light (Li-Fi).',
        'Transmitted ASCII data from Android to Arduino using a custom error-correction protocol.',
      ],
      githubLinks: ['https://github.com/Raghavvram/TTF2.0', 'https://github.com/Raghavvram/LiFi-project'],
    },
    {
      title: '💸 Offline Payment System – Bluetooth Peer-to-Peer Payments',
      techStack: 'React Native, Node.js, PostgreSQL, Kotlin, Android APIs',
      description: [
        'Built a secure offline-first payment system using Bluetooth for P2P transactions.',
        'Designed a device-level distributed ledger with reconciliation logic.',
        'Focused on ensuring data integrity in disconnected networks.',
      ],
      githubLinks: [], // GitHub link missing
    },
    {
      title: '🧠 Resonar – AI Research Assistant',
      techStack: 'Node.js, Python, React.js, PostgreSQL, Neo4J',
      description: [
        'Developed a scalable backend for an AI research assistant using PathRAG.',
        'Optimized Neo4J traversal and API response times for complex academic queries.',
      ],
      githubLinks: ['https://github.com/Raghavvram/Research-Reasoner'],
    },
  ];

  return (
    <ResumeSection title="🚀 Projects" index={index}>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </ResumeSection>
  );
};

export default ResumeProjects;
