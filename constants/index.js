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
};

export const SECTIONS = [
  { id: "home", comp: <Home /> },
  { id: "about", comp: <About /> },
  { id: "skills", comp: <Skills /> },
  { id: "projects", comp: <>Projects</> },
  { id: "contact", comp: <>Contact</> },
  { id: "resume", comp: <>Resume</> },
];
