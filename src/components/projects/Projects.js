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
    tech: ["ReactJS", "Sass", "Firebase",'CRUD Operation' ],
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
  {
    title: "A Landing Page",
    imgSrc: "assets/img/website.png",
    code: "https://github.com/numanabubakar",
    projectLink: "https://global-internet-numan.web.app/",
    tech: ["HTML", "CSS", "BOOTSTRAP"],
    description:
      "This a simple landing page ,created to learn html and bootstrap framework .",
    modalContent: (
      <>
        <p>
        This a simple landing page ,created to learn html and bootstrap framework 
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt. {":)"}
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
    title: "Huas Of Holder",
    imgSrc: "assets/img/react2.jpeg",
    code: "https://github.com/numanabubakar",
    projectLink: "https://drive.google.com/drive/folders/1cGlvd5vtgF42FQ-wWBls3j3L-fslBf4H?usp=share_link",
    tech: ["React Native", "Firebase", "React Navigator","Skeleton Effect "],
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
