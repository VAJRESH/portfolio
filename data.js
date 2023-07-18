import About from "@/components/About";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export const ASSETS = {
  favicon: "/vajresh.svg",
  logo: "/vajresh.svg",

  homeIcon: "/assets/house-solid.svg",
  plusIcon: "/assets/user-plus-solid.svg",
  graduationCapIcon: "/assets/graduation-cap-solid.svg",
  codeIcon: "/assets/laptop-code-solid.svg",
  phoneIcon: "/assets/phone-solid.svg",
  fileIcon: "/assets/file-lines-solid.svg",

  nextJsLogo: "/logo/nextjs.png",
  cssLogo: "/logo/css.png",
  djangoLogo: "/logo/django.png",
  gitLogo: "/logo/git.png",
  javaScriptLogo: "/logo/javaScript.png",
  jqueryLogo: "/logo/jquery.png",
  mongodbLogo: "/logo/mongodb.png",
  nodejsLogo: "/logo/nodejs.png",
  pythonLogo: "/logo/python.png",
  reactLogo: "/logo/react.png",
  sassLogo: "/logo/sass.png",
  htmlLogo: "/logo/html.png",

  codeReview: "/illustrations/code-review.svg",
  codeThinking: "/illustrations/code-thinking.svg",
  developerActivity: "/illustrations/developer-activity.svg",
  researching: "/illustrations/researching.svg",
  teaching: "/illustrations/teaching.svg",
  secureLogin: "/illustrations/secure-login.svg",
  programming: "/illustrations/programming.svg",

  tools: "/assets/tools.png",
  slideshow: "/assets/slideshow.png",
  codeSlash: "/assets/code-slash.png",
  testTube: "/assets/test-tube.png",
  rocket: "/assets/rocket.png",

  arrow: "/assets/arrow.png",
};

export const SECTIONS = [
  { id: "home", comp: <Home />, icon: "/assets/house-solid.svg" },
  { id: "about", comp: <About />, icon: "/assets/user-solid.svg" },
  { id: "skills", comp: <Skills />, icon: "/assets/graduation-cap-solid.svg" },
  {
    id: "projects",
    comp: <Projects />,
    icon: "/assets/laptop-code-solid.svg",
  },
  { id: "contact", comp: <>Contact</>, icon: "/assets/phone-solid.svg" },
  { id: "resume", comp: <>Resume</>, icon: "/assets/file-lines-solid.svg" },
];

export const home = {
  title: "Hi,*I am Vajresh!",
};

export const about = {
  title: "Self-Taught Developer",
  subTitle: "MERN Stack Dev",
  details: `Started my journey during lockdown in March 2020, landed my first job as a
    full stack web developer in August 2021. *I am a MERN stack developer who is
    passionate about software solutions. I like to learn new stuff related to
    technology and use the knowledge to create awesome projects. *I like
    travelling and new experiences. Big fan of TV Series, Movies and Animes. In my
    free time, I like to watch YouTube videos about new technologies and features,
    read articles or work on side projects.`,
  skills: [
    "HTML",
    "CSS",
    "Bootstrap",
    "SASS",
    "SCSS",
    "JavaScript",
    "React JS",
    "React Native",
    "Recoil",
    "Next JS",
    "Node JS",
    "Express",
    "Angular JS",
    "npm",
    "git",
    "Github",
    "Python",
    "Django",
    "Flask",
    "MongoDB",
    "MySQL",
    "Java",
  ],
};

export const skills = {
  title: "Expertise & Skills",
  subTitle: "Languages I Excel At",
  details: `I love JavaScript and related tech stack. I have worked with NodeJS and
    Express as backend tech along with ReactJS or NextJS as frontend and MongoDB
    as database.*I build software applications which are easy to use, responsive
    and modern using best practices. Languages which I have worked with are
    JavaScript, Python, Java and C.*Creating landing pages, website, web
    applications is what I am best at. I can design, animate, develop and deploy
    web applications.`,
};

export const projects = {
  title: "Work & Experience",
  subTitle: "Skills in Action",
  details: `I have alway believed that active learning is more impactful than passive
    learning. I learn new languages with project based learnings. I love to build
    amazing softwares.*I have build multiple softwares for myself as well as for
    others. I have worked with different teams to solve different problems.`,
  process: [
    { id: 1, name: "plan", icon: ASSETS?.tools },
    { id: 2, name: "design", icon: ASSETS?.slideshow },
    { id: 3, name: "develop", icon: ASSETS?.codeSlash },
    { id: 4, name: "test", icon: ASSETS?.testTube },
    { id: 5, name: "launch", icon: ASSETS?.rocket },
  ],
};
