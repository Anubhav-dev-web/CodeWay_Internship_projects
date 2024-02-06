import {
  self2,
  herobg,
  l3,
  l2,
  l4,
  l6,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  hoob,
  sumzz,
  news,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Experience",
    title: "Experience",
  },
];

const selfpro = {
  image1: self2,
  imagebg: herobg,
};

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Intern At CodeWay Solutions",
    company_name: "CodeWay Solutions",
    icon: l6,
    iconBg: "#ffffff",
    date: "January 2024 - current",
    points: [
      "CodeWay solutions provided me the oppurtunity to show case my skills",
      "I'm working on varios projects at codeWays ",
      "Learning new approaches and new techniques ",
    ],
  },
  {
    title: "Web development Bootcamp",
    company_name: "Udemy",
    icon: l2,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Learned Responsive Web Development ",
      "Learned fullStack developnent ",
      "The Bootcamp included , advanced Javascripts,CSS and HTML for frontend end including Bootstrap  ",
      "I also acquired knowledge for backend that included Express.js,MongoDB Node.js and a mega project at the end",
      "Course Instructor colt steel",
    ],
  },
  {
    title: "Responsive web designe",
    company_name: "FreeCode Camp",
    icon: l3,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Learned a lot of basics to advance responsive  designing ",
      "created four projects at the end of the course",
      "Course taught me a lot of thigs like flex-box, grid ",
    ],
  },
  {
    title: "Javascript Algorithms and Data Structures",
    company_name: "FreeCode Camp",
    icon: l3,
    iconBg: "#383E56",
    date: "Sep 2023 ",
    points: [
      "This cousre taught me basic to advance level of javascript",
      "It ncludes asynchronous javascript to and other cool stuff with javascript",
      "Javascripts is a great language to work with ",
      "made four project by the end of the project ",
    ],
  },
  {
    title: "React Develpment ",
    company_name: "React.dev",
    icon: l4,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "React is a a great Library to work an provides fast and modular design",
      "JSX paints the canvas bright, components bloom in modular light.",
      "From simple form to grandest screen, React's magic, a developer's dream.",
      " React empowers developers to architect performant UIs with modular ease.",
    ],
  },
];

const projects = [
  {
    name: "Summarizer",
    description:
      "An AI base application that summarizes the articles and web page for you to make reading more fast and saving your valuable time  ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Text-summarizer ",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sumzz,
    source_code_link: "https://github.com/Anubhav-dev-web/AI_Summarizer",
  },
  {
    name: "LightBringer",
    description:
      "Light bringer is a react based web application that provides you with the latest news, keeping you updated , have functionality of category wise filtering ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "newsApi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/Anubhav-dev-web/newsapp",
  },
  {
    name: "BooBank",
    description:
      "Hoobank is a Modern UI designe that features stunning modern designe with a great looking footer section and a call to action component",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hoob,
    source_code_link: "https://hoobank-007.netlify.app/",
  },
];

export { services, technologies, experiences, projects, selfpro };
