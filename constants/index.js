import About from "@/components/About";
import Home from "@/components/Home";

export const ASSETS = {
  favicon: "/vajresh.svg",
  logo: "/vajresh.svg",

  homeIcon: "/assets/house-solid.svg",
  plusIcon: "/assets/user-plus-solid.svg",
  graduationCapIcon: "/assets/graduation-cap-solid.svg",
  codeIcon: "/assets/laptop-code-solid.svg",
  phoneIcon: "/assets/phone-solid.svg",
  fileIcon: "/assets/file-lines-solid.svg",
};

export const SECTIONS = [
  { id: "home", comp: <Home /> },
  { id: "about", comp: <About /> },
  { id: "skills", comp: <>Skills</> },
  { id: "projects", comp: <>Projects</> },
  { id: "contact", comp: <>Contact</> },
  { id: "resume", comp: <>Resume</> },
];
