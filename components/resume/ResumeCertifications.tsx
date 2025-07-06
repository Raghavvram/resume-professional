import React from 'react';
import ResumeSection from './ResumeSection';

interface CertificationItemProps {
  title: string;
  items: { name: string; link?: string }[];
}

const CertificationItem: React.FC<CertificationItemProps> = ({
  title,
  items,
}) => (
  <div className="mb-6 p-6 rounded-lg shadow-sm">
    <h4 className="text-xl font-semibold text-purple-300 mb-2">{title}</h4>
    <ul className="list-disc list-inside text-purple-200 space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          {item.link ? (
            <a href={item.link} className="text-pink-400 hover:underline">
              {item.name}
            </a>
          ) : (
            item.name
          )}
        </li>
      ))}
    </ul>
  </div>
);

interface ResumeCertificationsProps {
  index: number;
}

const ResumeCertifications: React.FC<ResumeCertificationsProps> = ({ index }) => {
  const certifications = [
    {
      title: '📘 NPTEL',
      items: [
        { name: 'Introduction to Internet of Things (Jul–Oct 2023)' },
      ],
    },
    {
      title: '🤖 Artificial Intelligence & Machine Learning',
      items: [
        { name: 'Artificial Intelligence using Google TensorFlow', link: 'https://drive.google.com/file/d/17brZ1Qvs-VYqR-rUsIfWZr9BKf2uiMyu/view?usp=sharing' },
      ],
    },
    {
      title: '🧠 NVIDIA Deep Learning Institute (DLI)',
      items: [
        { name: 'Fundamentals of Deep Learning', link: 'https://learn.nvidia.com/certificates?id=x7gc1C9tR-mdSnrpQsyM1w' },
        { name: 'Applications of AI for Predictive Maintenance', link: 'https://learn.nvidia.com/certificates?id=04pQI7KJQuy8PduoXxd9zQ' },
        { name: 'Building Transformer-Based Natural Language Processing Applications', link: 'https://learn.nvidia.com/certificates?id=Hv3OeWo2Sw2y4NWwegHrvQ' },
        { name: 'Fundamentals of Accelerated Computing with CUDA C', link: 'https://learn.nvidia.com/certificates?id=hSF92iLBRJ21b3wRf3bxOw' },
        { name: 'Fundamentals of Accelerated Computing with CUDA Python', link: 'https://learn.nvidia.com/certificates?id=KY9tYl8PSsqBjx2wUTHeKA' },
      ],
    },
    {
      title: '☁️ Google Cloud Skill Boost',
      items: [
        { name: 'View Google Cloud Skill Boost Profile', link: 'https://www.cloudskillsboost.google/public_profiles/770fd0fd-9fac-4687-9917-c464f8aaea18' },
        { name: 'Introduction to Generative AI' },
        { name: 'Gemini for Google Cloud' },
        { name: 'Generative AI for Developers' },
      ],
    },
    {
      title: '🌩️ Amazon Web Services (AWS)',
      items: [
        { name: 'AWS Digital Badges Profile', link: 'https://www.credly.com/users/raghavvram-johnson/badges#credly' },
        { name: 'AWS Academy Cloud Foundations', link: 'https://drive.google.com/file/d/1woxthl9mV4RJINqFvi90YeE4rhJ7H0Hi/view' },
        { name: 'AWS Academy Cloud Architecting', link: 'https://drive.google.com/file/d/1v_3rMq4_0e1RljPPE1fz9w4ZdSNzxAiU/view' },
      ],
    },
  ];

  return (
    <ResumeSection title="🏅 Achievements and Certifications" index={index}>
      {certifications.map((cert, index) => (
        <CertificationItem key={index} {...cert} />
      ))}
    </ResumeSection>
  );
};

export default ResumeCertifications;
