import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "IdeaForge Pakistan - AI Startup Validator",
    imgSrc: "assets/img/ideaforge.png",
    code: "https://github.com/numanabubakar/AI-Startup-Validator",
    projectLink: "https://ai-startup-validator-pearl.vercel.app/",
    tech: ["Next.js", "TypeScript", "Google Gemini AI", "Supabase", "Tailwind CSS", "Recharts"],
    description:
      "An AI-driven platform that validates startup ideas specifically for the Pakistani market, providing analytical reports and market insights.",
    modalContent: (
      <>
        <p>
          IdeaForge Pakistan is a cutting-edge platform designed to empower Pakistani entrepreneurs by providing AI-driven validation for their startup ideas.
        </p>
        <p>
          The system utilizes Google Gemini 1.5 Flash to perform deep market analysis, sentiment analysis, and risk assessment tailored to the local economic landscape.
        </p>
        <p>
          Key features include an interactive Pakistan SVG map highlighting opportunity scores by province, dynamic analytical charts using Recharts, and automated PDF report generation.
        </p>
        <p>
          Built with Next.js 15 and TypeScript, the application ensures high performance and type safety. It leverages Supabase for secure data persistence and user authentication with Row Level Security (RLS).
        </p>
      </>
    ),
  },
  {
    title: "NoteHub - AI Study Assistant",
    imgSrc: "assets/img/notehub.png",
    code: "https://github.com/numanabubakar/NoteTube",
    projectLink: "#",
    tech: ["Next.js", "React", "Gemini Pro", "Supabase", "Framer Motion", "Radix UI"],
    description:
      "An AI-powered study platform that transforms YouTube videos into structured study notes, quizzes, and analytical progress reports.",
    modalContent: (
      <>
        <p>
          NoteHub revolutionizes the way students learn from online video content. It automatically extracts transcripts from YouTube videos and uses Gemini Pro to generate comprehensive study materials.
        </p>
        <p>
          The platform features a sophisticated UI built with Radix UI and Shadcn/UI, with smooth animations powered by Framer Motion. Users can track their learning progress through a detailed dashboard with Recharts visualization.
        </p>
        <p>
          Integrated features include AI-generated quizzes to test subject mastery, "Learning Streaks" to encourage consistency, and the ability to export notes to high-quality PDF documents.
        </p>
        <p>
          NoteHub uses a modern 3-tier architecture with Next.js App Router and Supabase, ensuring a scalable and secure environment for academic growth.
        </p>
      </>
    ),
  },
  {
    title: "LULC Recognition Dashboard",
    imgSrc: "assets/img/lulc_web.png",
    code: "https://github.com/numanabubakar/lulc_classifier",
    projectLink: "https://lulc-classifier.vercel.app/",
    tech: ["Next.js", "FastAPI", "PyTorch", "Tailwind CSS", "Satellite Imagery"],
    description:
      "A research-oriented Deep Learning dashboard for Land Use & Land Cover classification using satellite imagery and PyTorch.",
    modalContent: (
      <>
        <p>
          The LULC Recognition Dashboard is a professional ML system designed for classifying land use and land cover from satellite images.
        </p>
        <p>
          It features a scientific laboratory aesthetic with a Slate-950 dark theme. The backend is powered by FastAPI and PyTorch, supporting multiple benchmark datasets like EuroSAT and MLRSNet.
        </p>
        <p>
          The dashboard provides real-time inference with detailed confidence gauges, inference latency tracking, and technical specifications of the explainable CNN architecture.
        </p>
        <p>
          This project demonstrates high-level software engineering practices for ML systems, including model caching, modular preprocessing pipelines, and a mobile-first responsive design.
        </p>
      </>
    ),
  },
  {
    title: "LULC Mobile Classifier",
    imgSrc: "assets/img/lulc_mobile.png",
    code: "https://github.com/numanabubakar/LULC-Recognition-App",
    projectLink: "#",
    tech: ["React Native", "TypeScript", "Deep Learning", "Lottie Animations"],
    description:
      "A mobile application for real-time satellite imagery classification with an integrated AI chatbot for geographical analysis.",
    modalContent: (
      <>
        <p>
          LULC Mobile Classifier brings the power of Deep Learning land classification to mobile devices, allowing users to analyze satellite imagery on the go.
        </p>
        <p>
          Built with React Native and TypeScript, the app features a smooth user experience with Lottie splash screens and a modern deep space navy aesthetic.
        </p>
        <p>
          Users can select images from their camera or gallery to classify land cover types with high precision. The app also features an integrated AI chatbot to help interpret classification results.
        </p>
        <p>
          The system connects to a robust backend service for real-time inference, providing instant feedback on land cover patterns and geographical trends.
        </p>
      </>
    ),
  },
  {
    title: "Automated Multi-Source Data Pipeline",
    imgSrc: 'assets/img/n8n.png',
    code: "https://github.com/numanabubakar",
    projectLink: "#",
    tech: ["n8n", "Supabase", "Slack", "Airtable", "pgvector", "RAG"],
    description:
      "A no-code/low-code data pipeline that automates collection, transformation, and delivery of data across platforms with semantic search capabilities.",
    modalContent: (
      <>
        <p>
          Designed and implemented a comprehensive no-code/low-code data pipeline using n8n to automate the collection, transformation, and delivery of data across multiple platforms.
        </p>
        <p>
          The system features automated data ingestion from various sources including APIs, webhooks, and user inputs, with intelligent data processing and transformation workflows.
        </p>
        <p>
          Integrated Supabase with pgvector store for advanced semantic similarity search and RAG-based querying, enabling intelligent data retrieval and analysis capabilities.
        </p>
        <p>
          Connected with Slack and Airtable for seamless data flow and collaboration, creating a unified ecosystem for data management and team communication.
        </p>
        <p>
          The pipeline significantly reduced manual data processing time and improved data accuracy through automated validation and transformation processes.
        </p>
      </>
    ),
  },
  {
    title: "AI Medical Consultant",
    imgSrc: "assets/img/medical.png",
    code: "https://github.com/numanabubakar",
    projectLink: "https://aidocconsultant.netlify.app/",
    tech: ["Next.js", "FastAPI", "Python", "LangChain", "Firebase", "LLM"],
    description:
      "An intelligent web-based assistant providing conversational support for medical queries with LangChain-powered reasoning.",
    modalContent: (
      <>
        <p>
          Built an intelligent web-based assistant designed to provide conversational support for medical queries, featuring a modern Next.js frontend and robust FastAPI backend.
        </p>
        <p>
          Implemented LangChain to orchestrate LLM-driven reasoning, enabling the system to understand context, process medical information, and provide relevant responses with appropriate disclaimers.
        </p>
        <p>
          Integrated Firebase for comprehensive user authentication, session history management, and secure data handling, ensuring privacy and compliance with medical data regulations.
        </p>
        <p>
          Developed a sophisticated LangChain-powered pipeline for contextual understanding and tool calling, allowing the system to access relevant medical databases and provide evidence-based responses.
        </p>
        <p>
          The system provides real-time chat history and user management through Firebase Auth and Firestore, creating a seamless user experience for medical consultation support.
        </p>
      </>
    ),
  },
  {
    title: "Talk with Your PDF",
    imgSrc: "assets/img/talkpdf.png",
    code: "https://github.com/numanabubakar",
    projectLink: "https://askfrompdf.streamlit.app/",
    tech: ["Python", "FastAPI", "Streamlit", "LangChain", "FAISS", "OpenAI"],
    description:
      "A PDF-based AI assistant enabling users to upload documents and interact with them conversationally using semantic search.",
    modalContent: (
      <>
        <p>
          Developed a sophisticated PDF-based AI assistant that enables users to upload documents and interact with them conversationally, providing instant access to document content through natural language queries.
        </p>
        <p>
          Built with Streamlit for an intuitive and responsive user interface, combined with FastAPI for robust backend processing. Utilized LangChain for sophisticated prompt orchestration and OpenAI models for natural language responses.
        </p>
        <p>
          Integrated FAISS (Facebook AI Similarity Search) for efficient document embedding and semantic retrieval, enabling fast and accurate search across large document collections.
        </p>
        <p>
          Implemented a conversational chat interface that allows users to ask questions directly from uploaded PDFs, with the system providing contextually relevant answers based on document content.
        </p>
        <p>
          The system supports multiple document formats and provides real-time processing, making it ideal for research, document analysis, and knowledge extraction from large text corpora.
        </p>
      </>
    ),
  },
  {
    title: "AI Roaster",
    imgSrc: "assets/img/roast.png",
    code: "https://github.com/numanabubakar",
    projectLink: "#",
    tech: ["Chainlit", "OpenAI SDK", "Gemini", "Python", "UV"],
    description:
      "An engaging AI-based conversation app that playfully 'roasts' users with humorous and witty responses using multiple LLMs.",
    modalContent: (
      <>
        <p>
          Created an engaging AI-based conversation app designed to playfully "roast" users with humorous and witty responses, providing entertainment through intelligent AI interactions.
        </p>
        <p>
          Built using Chainlit for real-time chat UI, providing a smooth and responsive conversational experience with instant message delivery and dynamic interface updates.
        </p>
        <p>
          Integrated both OpenAI and Gemini models to dynamically generate diverse and entertaining outputs, ensuring varied and creative responses that keep conversations engaging and unpredictable.
        </p>
        <p>
          Implemented real-time conversational roasting using advanced LLMs, with sophisticated prompt engineering to ensure responses are humorous while maintaining appropriate boundaries and user safety.
        </p>
        <p>
          The application demonstrates advanced AI integration capabilities, showcasing how multiple language models can be orchestrated to create engaging and interactive user experiences.
        </p>
      </>
    ),
  },
  {
    title: "Employee Management System",
    imgSrc: "assets/img/employeeadmin.png",
    code: "https://github.com/numanabubakar",
    projectLink: "https://employeetracker-admin-panel.netlify.app",
    tech: ["React Native", "Next.js", "React Navigation", "Leaflet Maps", "Context API"],
    description:
      "A comprehensive employee management system with React Native mobile app for check-in/out and Next.js admin portal for location tracking and history management.",
    modalContent: (
      <>
        <p>
          Developed a comprehensive employee management system featuring a React Native mobile application for employees and a Next.js-based admin portal for management oversight and location tracking.
        </p>
        <p>
          <strong>Mobile App (React Native):</strong> Built with React Native CLI featuring React Navigation v6 for seamless navigation between authentication, employee, and admin screens. Integrated react-native-maps for location services and React Native Elements for consistent UI components.
        </p>
        <p>
          <strong>Key Mobile Features:</strong> Role-based authentication system, employee check-in/out functionality with GPS location capture, location history tracking, and real-time status updates. Implemented Context API for global state management across AuthContext and LocationContext.
        </p>
        <p>
          <strong>Admin Portal (Next.js):</strong> Comprehensive web dashboard built with React and React Router v6, featuring Leaflet maps integration for real-time employee location visualization, employee management interface, and detailed analytics dashboard.
        </p>
        <p>
          <strong>Core Functionality:</strong> Employees can check in/out with automatic location capture, view their attendance history, and update their status. Admins can monitor all employee locations in real-time, manage employee data, view detailed attendance reports, and track historical check-in/out patterns.
        </p>
        <p>
          The system maintains complete audit trails of all check-in/out activities with timestamps and GPS coordinates, providing comprehensive oversight for workforce management and attendance tracking.
        </p>
      </>
    ),
  },
  {
    title: "My Surah Playlist",
    imgSrc: 'assets/img/surah.png',
    code: "https://github.com/numanabubakar",
    projectLink: "https://mysurahplaylist.web.app/",
    tech: ["HTML", "CSS", "JS"],
    description:
      "This is a Quranic Playlist . This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
          My Surah Playlist is a Quranic Playlist
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of JavaScrip ,
          connected to a Html & Css,
          deployed on Firebase.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Firebase CRUD",
    imgSrc: "assets/img/crud.png",
    code: "https://github.com/numanabubakar",
    projectLink: "https://firebasecrudbynuman.netlify.app",
    tech: ["ReactJS", "Sass", "Firebase", 'CRUD Operation'],
    description:
      "This is a crud operation using firebase and reactjs. User can Login and Register ,Data is stored primarily in Firebase Firestore",
    modalContent: (
      <>
        <p>
          This is a crud operation using firebase and reactjs. User can Login and Register and Edit Profile and Delete Account Permanently
        </p>
        <p>
          I work primarily on the backend, a collection of Node & Express
          microservices. Data is stored primarily in Firebase Firestore .
        </p>
        <p>
          The team in total consists of 5 developers. This is a passion project
          for all of us.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  // {
  //   title: "A Landing Page",
  //   imgSrc: "assets/img/website.png",
  //   code: "https://github.com/numanabubakar",
  //   projectLink: "https://global-internet-numan.web.app/",
  //   tech: ["HTML", "CSS", "BOOTSTRAP"],
  //   description:
  //     "This a simple landing page ,created to learn html and bootstrap framework .",
  //   modalContent: (
  //     <>
  //       <p>
  //       This a simple landing page ,created to learn html and bootstrap framework 
  //       </p>
  //       <p>
  //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt. {":)"}
  //       </p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt.
  //       </p>
  //       <p>
  //         Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
  //         rerum dolorum. Deserunt soluta modi culpa animi.
  //       </p>
  //     </>
  //   ),
  // },
  {
    title: "Huas Of Holder",
    imgSrc: "assets/img/react2.jpeg",
    code: "https://github.com/numanabubakar",
    projectLink: "https://drive.google.com/drive/folders/1cGlvd5vtgF42FQ-wWBls3j3L-fslBf4H?usp=share_link",
    tech: ["React Native", "Firebase", "React Navigator", "Skeleton Effect "],
    description:
      "Huas Of Holder is an Real State APP Developed by using React Native and Firebase For storing data . in this app user can... 🌈",
    modalContent: (
      <>

        <Reveal>
          <p>Alright, </p>
        </Reveal>
        <Reveal>

          <p>
            Huas Of Holder is an Real State APP Developed by using React Native and Firebase For storing data . in this app user can.
          </p>
        </Reveal>
        <Reveal>

          <p>You get the idea. Now more lorem {":)"}</p>
        </Reveal>
        <Reveal>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            quia officia odio nulla consectetur aperiam ad tempora magni magnam
            nesciunt.
          </p>
        </Reveal>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
