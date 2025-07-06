import React from "react";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeSummary from "@/components/resume/ResumeSummary";
import ResumeExperience from "@/components/resume/ResumeExperience";
import ResumeProjects from "@/components/resume/ResumeProjects";
import ResumeEducation from "@/components/resume/ResumeEducation";
import ResumeSkills from "@/components/resume/ResumeSkills";
import ResumeCertifications from "@/components/resume/ResumeCertifications";
import { Tabs } from "@/components/ui/tabs";

const Resume = () => {
  const tabs = [
    {
      title: "Summary",
      value: "summary",
      content: (
        <ResumeSummary
          summary="A highly motivated Computer Science student who finds genuine joy in the world of Linux and automation—it's my guilty pleasure. My passion lies in the creative process of building, breaking, and rebuilding software to create robust, real-world products. I have a natural affinity for architecting elegant solutions, from designing to deploying applications. I am eager to contribute to a collaborative team, tackling complex challenges and delivering reliable, mission-critical applications."
          index={0}
        />
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: <ResumeExperience index={1} />,
    },
    {
      title: "Projects",
      value: "projects",
      content: <ResumeProjects index={2} />,
    },
    {
      title: "Education",
      value: "education",
      content: <ResumeEducation index={3} />,
    },
    {
      title: "Skills",
      value: "skills",
      content: <ResumeSkills index={4} />,
    },
    {
      title: "Certifications",
      value: "certifications",
      content: <ResumeCertifications index={5} />,
    },
  ];

  return (
    <div className="resume-container backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl max-w-full xl:max-w-7xl m-auto p-4 text-gray-100 border-4 border-pink-900 animate-fade-in">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap");
        body {
          font-family: "JetBrains Mono", monospace;
        }
      `}</style>
      <ResumeHeader
        name="👨‍💻 RAGHAVVRAM JOHNSON"
        phone="+91 8778754856"
        email="raghavvram@gmail.com"
        github="https://github.com/Raghavvram"
        linkedin="https://www.linkedin.com/in/raghavvram"
        medium="https://medium.com/@raghavvram"
      />
      <hr className="my-2 border-purple-500 opacity-50" />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Resume;
