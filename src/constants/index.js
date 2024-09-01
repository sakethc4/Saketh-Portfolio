import {
    mobile,
    backend,
    creator,
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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
  } from "../assets";


  


  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Frontend",
      icon: mobile,
    },
    {
        title: "Backend",
        icon: backend,
      },
      {
        title: "Machine Learning",
        icon: creator,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
},
{
  name: "figma",
  icon: figma,
},
{
  name: "docker",
  icon: docker,
},
];

const experiences = [
{
  title: "Software Engineer Intern",
  company_name: "WebstaurantStore",
  icon: web,
  iconBg: "#383E56",
  date: "Summer 2024",
  points: [
    "Independently developed and deployed 13 feature releases for customer facing e-commerce site, WebstaurantStore.com, which serves millions of users.",
    "Improved page load-times on 6 high traffic pages across the solution by transitioning site meta data calls to catalog calls. Mocked and added unit tests increasing unit test coverage by 15%.",
    "Spearheaded 7 user-facing features/modals using TypeScript, React, Tailwind CSS, C#,  and Client-Side/Server-Side Validation that are all in production.",
  ],
},
{
    title: "Quantum Machine Learning Researcher",
    company_name: "University of Maryland, College Park",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Spring 2024",
    points: [
      "Conducting research on reinforcement learning in the context of variational quantum circuits in collaboration with the National Quantum Laboratory at Maryland (QLAB) under Dr. Shabnam Jabeen. ",
    ],
  },
  
  

];

const testimonials = [
  {
    testimonial:
      "N/A",
    name: "N/A",
    designation: "N/A",
    company: "N/A",
},
];

const projects = [
    {
      name: "Crime-Aid",
      description:
        "1st (Data Science) & Best Data Science Hack at HooHacks (UVA's Premier Hackathon) 2024",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Data Science (Python, Pandas, NumPy, Scikit-Learn)",
          color: "green-text-gradient",
        },
        {
          name: "Frontend Development (HTML, JavaScript)",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://devpost.com/software/crime-aid",
    },
    {
      name: "MedScribe",
      description:
      "1st Place at George Hacks & Best Overall Hack (George Washington University's Premier Hackathon) 2024",
      tags: [
        {
          name: "Frontend Development (React JS, JavScript, MUI CORE)",
          color: "blue-text-gradient",
        },
        {
          name: "Backend Development (Python (Flask), OpenAI API, Google Translate API)",
          color: "green-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/sakethc4/MedScribe-Public",
  },
];

export { services, technologies, experiences, testimonials, projects };
