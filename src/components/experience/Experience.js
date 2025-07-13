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
    title: "AI Full Stack Engineering",
    position: "AI Integration & RAG Systems",
    time: "2023 - Present",
    location: "Pakistan",
    description:
      "Specializing in building AI-powered applications with focus on RAG-based systems, LLM fine-tuning, and intelligent data pipelines. I design and implement scalable architectures that seamlessly integrate AI capabilities with full-stack applications, from conversational AI assistants to automated data processing systems.",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "LangChain",
      "OpenAI",
      "Vector DBs",
      "RAG",
      "LLM Fine-tuning",
    ],
  },
  {
    title: "Full Stack Development",
    position: "React & Node.js",
    time: "2022 - 2023",
    location: "Pakistan",
    description:
      "Built responsive and scalable web applications using ReactJS and Node.js. Leveraged modern frameworks and tools to create efficient, maintainable codebases with excellent user experiences. Integrated various APIs and databases to deliver robust solutions.",
    tech: ["React", "Node.js", "Firebase", "MongoDB", "Express", "Git", "GitHub"],
  },
  {
    title: "Mobile Development",
    position: "React Native",
    time: "2021 - 2022",
    location: "Pakistan",
    description:
      "Developed cross-platform mobile applications using React Native, creating native-like experiences for both iOS and Android platforms. Focused on performance optimization and user experience while maintaining code reusability across platforms.",
    tech: [
      "React Native",
      "iOS",
      "Android",
      "Firebase",
      "Navigation",
      "State Management",
    ],
  },
];
