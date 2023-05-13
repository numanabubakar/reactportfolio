import { SectionHeader } from "../utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Application Development",
    position: "React Native",
    time: "2022 - Present",
    location: "Pakistan",
    description:
      "React Native, allowing me to extend my expertise to mobile app development. React Native enables me to build cross-platform apps using a single codebase, saving time and effort. I appreciate the ability to leverage the power of ReactJS to create native-like mobile experiences for both iOS and Android platforms.",
    tech: [
      "React Native",
      "Ios",
      "Andriod",
      "Git",
      "GitHub",
      "Firebase",
      "Auth",
      "Sass",
    ],
  },
  {
    title: "Web Applications",
    position: "React Js",
    time: "2021 - 2022",
    location: "Pakistan",
    description:
      "With ReactJS, I enjoy crafting responsive and scalable web applications. Leveraging the component-based architecture, I can create reusable UI components that enhance code maintainability and facilitate a smooth development process.",
    tech: ["React", "Node", "Firebase", "Sass", "Github", "Git"],
  },
  {
    title: "Website Development",
    position: "Landing Pages",
    time: "2021 - 2022",
    location: "Pakistan",
    description:
      "I continuously stay updated with the latest advancements in ReactJS and React Native, as well as other relevant technologies and best practices. This ensures that I deliver high-quality, modern, and user-friendly applications to meet the evolving needs of clients and end-users.",
    tech: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "BOOTSTRAP",
      "SASS",
      "TAILWIND",
      "MUI",
    ],
  },
];
