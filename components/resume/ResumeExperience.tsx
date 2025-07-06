import React from "react";
import ResumeSection from "./ResumeSection";

interface ExperienceItemProps {
  title: string;
  role: string;
  techStack: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  role,
  techStack,
  description,
}) => (
  <div className="mb-8 p-6 rounded-lg shadow-sm">
    <h4 className="text-xl font-semibold text-purple-300 mb-2">{title}</h4>
    <p className="text-md text-purple-200 mb-2">
      <strong>Role:</strong> {role}
    </p>
    <p className="text-md text-purple-200 mb-3">
      <strong>Tech Stack:</strong> {techStack}
    </p>
    <ul className="list-disc list-inside text-purple-200 space-y-1">
      {description.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

interface ResumeExperienceProps {
  index: number;
}

const ResumeExperience: React.FC<ResumeExperienceProps> = ({ index }) => {
  const experiences = [
    {
      title: "🔒 Digital Fortress - Hardware Security Module (HSM)",
      role: "Embedded Systems Developer",
      techStack: "Rust, Python, C",
      description: [
        "Modified and added custom modules using the `libtock-rs` library (Googles OpenSK) to make captive fingerprint sensors compatible with the `nRF52840_dongle`, an HSM used for authentication.",
      ],
    },
    {
      title: "🧑‍🏫 Edubot - Student Submission Dashboard",
      role: "Frontend Developer Intern",
      techStack:
        "Node.js, React.js, Tailwind CSS, TanStack Routing, UI libraries",
      description: [
        "Designed and implemented mobile-responsive submission management screens with integrated grading dashboard, PDF viewer (zoom, full-screen, download), and real-time feedback tracking.",
      ],
    },
  ];

  return (
    <ResumeSection title="💼 Experience" index={index}>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </ResumeSection>
  );
};

export default ResumeExperience;
