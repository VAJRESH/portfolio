import About from "@/components/About";
import Home from "@/components/Home";
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
};

export const SECTIONS = [
  { id: "home", comp: <Home />, icon: "/assets/house-solid.svg" },
  { id: "about", comp: <About />, icon: "/assets/user-solid.svg" },
  { id: "skills", comp: <Skills />, icon: "/assets/graduation-cap-solid.svg" },
  {
    id: "projects",
    comp: <>Projects</>,
    icon: "/assets/laptop-code-solid.svg",
  },
  { id: "contact", comp: <>Contact</>, icon: "/assets/phone-solid.svg" },
  { id: "resume", comp: <>Resume</>, icon: "/assets/file-lines-solid.svg" },
];
