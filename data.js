import About from "@/components/About";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import styles from "@/styles/variables.module.scss";

export const FULLSCREEN_WIDTH = parseInt(styles.tab) + 200;

export const ASSETS = {
  favicon: "/vajresh.svg",
  logo: "/vajresh.svg",

  homeIcon: "/assets/house-solid.svg",
  plusIcon: "/assets/user-plus-solid.svg",
  graduationCapIcon: "/assets/graduation-cap-solid.svg",
  codeIcon: "/assets/laptop-code-solid.svg",
  phoneIcon: "/assets/phone-solid.svg",
  bulbIcon: "/assets/bulb-creative.svg",
  fileIcon: "/assets/file-lines-solid.svg",
  callRingIcon: "/assets/call-ring.svg",
  whatsappIcon: "/assets/whatsapp.svg",
  emailIcon: "/assets/email.svg",
  linkedInIcon: "/assets/linkedin.svg",
  twitterIcon: "/assets/twitter.svg",
  githubIcon: "/assets/github.svg",

  nextjsLogo: "/logo/nextjs.png",
  cssLogo: "/logo/css.png",
  djangoLogo: "/logo/django.png",
  gitLogo: "/logo/git.png",
  javascriptLogo: "/logo/javascript.png",
  jqueryLogo: "/logo/jquery.png",
  mongodbLogo: "/logo/mongodb.png",
  nodejsLogo: "/logo/nodejs.png",
  pythonLogo: "/logo/python.png",
  reactjsLogo: "/logo/react.png",
  sassLogo: "/logo/sass.png",
  htmlLogo: "/logo/html.png",
  bootstrapLogo: "/logo/bootstrap.png",
  mysqlLogo: "/logo/mysql.png",
  expressLogo: "/logo/express.png",

  codeReview: "/illustrations/code-review.svg",
  codeThinking: "/illustrations/code-thinking.svg",
  developerActivity: "/illustrations/developer-activity.svg",
  researching: "/illustrations/researching.svg",
  teaching: "/illustrations/teaching.svg",
  secureLogin: "/illustrations/secure-login.svg",
  programming: "/illustrations/programming.svg",
  onlineConnection: "/illustrations/online-connection.svg",

  tools: "/assets/tools.png",
  slideshow: "/assets/slideshow.png",
  codeSlash: "/assets/code-slash.png",
  testTube: "/assets/test-tube.png",
  rocket: "/assets/rocket.png",

  arrow: "/assets/arrow.png",
};

export const SECTIONS = [
  { id: "home", comp: <Home />, icon: ASSETS?.homeIcon },
  { id: "about", comp: <About />, icon: ASSETS?.plusIcon },
  { id: "skills", comp: <Skills />, icon: ASSETS?.graduationCapIcon },
  {
    id: "experience",
    comp: <Experience />,
    icon: ASSETS?.bulbIcon,
  },
  {
    id: "projects",
    comp: <Projects />,
    icon: ASSETS?.codeSlash,
    isFullWidth: true,
  },
  { id: "contact", comp: <Contact />, icon: ASSETS?.phoneIcon },
  { id: "resume", comp: <>Resume</>, icon: ASSETS?.fileIcon, isHidden: true },
];

export const SOCIAL_MEDIA = [
  {
    id: 1,
    icon: ASSETS?.linkedInIcon,
    link: "https://www.linkedin.com/in/vajresh-patkar-a0634b1aa/",
  },
  { id: 2, icon: ASSETS?.githubIcon, link: "https://github.com/VAJRESH" },
  { id: 3, icon: ASSETS?.twitterIcon, link: "https://twitter.com/Vajreshh" },
];

export const home = {
  title: "Hi,*I am Vajresh!!",
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

export const experience = {
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

const category = {
  personal: "My Personal Project",
  minor: "Personal Minor Projects",
};

export const projects = [
  {
    title: "Media Tracker",
    category: category?.personal,
    isFeatured: true,
    logoPath: "",
    bannerPath: "/assets/media-tracker.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React Js",
      "Node JS",
      "Express",
      "MongoDB",
    ],
    description:
      "It is a full stack website where user can find latest movies and tv series and details about it along with similar movies or series. User can save and manage list of watched movies and tv series. The data is provided by TMDB (https://www.themoviedb.org/).",
    sourceCodePath: "https://github.com/VAJRESH/media-tracker",
    liveDemoPath: "https://media-tracker.onrender.com/home",
  },
  {
    title: "Birthday Notifier",
    category: category?.personal,
    isFeatured: true,
    logoPath: "",
    bannerPath: "/assets/birthday-notifier.PNG",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React Js",
      "Node JS",
      "Express",
      "MongoDB",
    ],
    description:
      "Full stack website to save birthdays and get email reminders on your registered email automatically.",
    sourceCodePath: "https://github.com/VAJRESH/birthday-notifier",
    liveDemoPath: "http://birthday-notifier.onrender.com/",
  },
  {
    title: "Business Landing Page",
    category: category?.minor,
    logoPath: "",
    bannerPath: "/assets/business-landing-page.png",
    tags: ["HTML", "SASS", "Bootstrap"],
    description:
      "Landing page website created to learn Bootstrap and SASS. Tried to replicate the design.",
    sourceCodePath: "https://github.com/VAJRESH/Landing-Page",
    liveDemoPath: "https://vajresh.github.io/Landing-Page/",
  },
  {
    title: "Fylo Landing Page",
    category: category?.minor,
    logoPath: "",
    bannerPath: "/assets/fylo-landing-page.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    description:
      "Created this landing page as a solution to the Fylo dark theme landing page challenge on Frontend Mentor. Took the challenge to improve page layouts with CSS and responsive web design.",
    sourceCodePath: "https://github.com/VAJRESH/fylo-dark-theme-landing-page",
    liveDemoPath: "https://vajresh.github.io/fylo-dark-theme-landing-page/",
  },
  {
    title: "First Portfolio Website",
    category: category?.minor,
    logoPath: "",
    bannerPath: "/assets/portfolio.png",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "This is one of the first website that I created for improving my skills in HTML, CSS and JavaScript.",
    sourceCodePath: "https://github.com/VAJRESH/Vajresh.github.io",
    liveDemoPath: "https://vajresh.github.io/",
  },
];

export const contact = {
  title: "Contact",
  subTitle: "Reach out at light speed",
  myPhoneNumber: "+918356085124",
  myEmail: "vajresh005@gmail.com",
};
