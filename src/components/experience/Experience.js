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
    title: "Amal Academy",
    position: "Career-Prep Fellowship",
    time: "Apr 2026 - Jul 2026",
    location: "Faisalabad, Punjab, Pakistan · On-site",
    description:
      "Completed a competitive written application and interview process to be selected from over 4,500 applicants for an intensive 3-month Fellowship funded by Stanford University. Invested 150 hours in developing business skills (e.g., communication, leadership, problem solving, teamwork, etc.) that will help me make a deeper impact on the job.",
    tech: [
      "Communication",
      "Leadership",
      "Problem Solving",
      "Teamwork",
      "Professional Development",
    ],
  },
  {
    title: "Meshlogix Solutions",
    position: "Artificial Intelligence Engineer",
    time: "Feb 2025 - Jan 2026",
    location: "Lahore, Punjab, Pakistan · Hybrid",
    description:
      "Developed intelligent AI backend architectures and conversational wrappers using OpenAI's GPT-4o and Bland AI, automating complex data workflows and outbound interactions for 4 corporate platforms. Engineered structured prompt templates and sequential chained flows using LangChain, reducing manual content creation costs by 70% and boosting email marketing open rates by 25%. Optimized database and retrieval pipelines utilizing Supabase and Qdrant hybrid vector search, improving AI context retention and semantic search accuracy for over 15,000 tokens of technical documentation. Built user-friendly AI translation and SQL query rewriting tools, completely eliminating the need for technical SQL skills among non-technical users and accelerating data insight delivery.",
    tech: [
      "OpenAI GPT-4o",
      "LangChain",
      "Bland AI",
      "Supabase",
      "Qdrant",
      "Python",
      "Vector Search",
    ],
  },
];
