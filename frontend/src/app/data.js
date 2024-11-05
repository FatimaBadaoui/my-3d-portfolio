/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)


*/

// projects data for the projects page
export const projectsData = [
  {
    id: 1,
    name: "My Portfolio",
    description: "Personal portfolio website. Built with only HTML and CSS.",
    date: "2023-09-29",
    demoLink: "https://fatimabadaoui.github.io/my-portfolio/",
    codeLink: "https://github.com/FatimaBadaoui/my-portfolio",
  },
  {
    id: 2,
    name: "RPG Game",
    description: "Role-playing game built with JavaScript.",
    date: "2023-12-12",
    demoLink: null,
    codeLink: "https://github.com/FatimaBadaoui/javascript-project-rpg-game",
  },
  {
    id: 3,
    name: "The Projects",
    description:
      "A collection of projects built with HTML, CSS, and Vanilla JavaScript.",
    date: "2023-09-10",
    demoLink: "https://pilag6.github.io/the-projects/",
    codeLink: "https://github.com/Pilag6/the-projects",
  },
  {
    id: 4,
    name: "React Games",
    description:
      "A single-page application with multiple games built with React.",
    date: "2024-05-30",
    demoLink: "https://react-games-spa.onrender.com/",
    codeLink: "https://github.com/FatimaBadaoui/react-games-spa",
  },
  {
    id: 5,
    name: "Restaurant Management System",
    description:
      "A full stack project designed to create a mobile application for restaurant workers. The app aims to simplify, accelerate, and digitalize their tasks.",
    date: "2024-07-04",
    demoLink: null,
    codeLink: "https://github.com/chimikoo/TapTrack",
  },
  {
    id: 6,
    name: "GoPool",
    description:
      "An App for car pooling from and to airport done with React Native and Expo.",
    date: "2024-09-16",
    demoLink: "https://gopool.app/",
    codeLink: null,
  },
];

// social media links for the home page
export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/FatimaBadaoui",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/fatima-badaoui/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Slack",
    link: "https://e06-23.slack.com/team/U05FHBA9C48",
    icon: "slack",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/files/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
