const projectsData = [
  {
    id: 1,
    name: "XFIix Frontend",
    image: "/images/test.jpg",
    duration: {
      start: "Jul 2022",
      end: "Aug 2022",
    },
    description:
      "XFIix is a sharing platform which hosts videos for the world to watch...",
    responsibilities: [
      "Built XFIix frontend using React-js from scratch",
      "Created RESTful API for backend",
      "Used MongoDB for database storage",

    ],
    technologies: ["React", 
    "React Hooks", 
    "Rest API",
    "MongoDB",
    "Node.js",
    "Express"

  ],
    projectDetails: "/projects/xfiix-frontend",
    projectLink: "https://xfiix-frontend.herokuapp.com/",
    projectSourceLink: "https://github.com/xfiix-frontend",
  },
  {
    id: 2,
    name: "Q-Desk",
    image: "/images/test.jpg",
    duration: {
      start: "Jul 2022",
      end: "Aug 2022",
    },
    description:
      "Q-Desk is a ticketing system which allows users to raise tickets...",
    responsibilities: [
      "Built Q-Desk frontend using React-js from scratch",
      "Created RESTful API for backend",
      "Used MongoDB for database storage",
    ],
    technologies: ["React", "React Hooks",
    "Rest API",
    "MongoDB",
    "Node.js",
    "Express"
    ],
    projectDetails: "/projects/q-desk",
    projectLink: "https://q-desk.herokuapp.com/",
    projectSourceLink: "https://github.com/iamclutchx/q-desk",
  },
  {
    id: 3,
    name: "MySocial",
    image: "/images/test.jpg",
    duration: {
      start: "Mar 2023",
      end: "Apr 2023",
    },
    description:
      "MySocial is a social media platform which allows users to post, like and comment...",
    responsibilities: [
      "Built the frontend using React",
      "Created RESTful API for backend",
      "Used MongoDB for database storage",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    projectDetails: "/projects/mysocial",
    projectLink: "https://mysocial.herokuapp.com/",
    projectSourceLink: "https://github.com/username/mysocial",
  },
  // Example for an e-commerce project
  {
    id: 4,
    name: "ShopEasy",
    image: "/images/test.jpg",
    duration: {
      start: "May 2023",
      end: "Jun 2023",
    },
    description:
      "ShopEasy is an e-commerce platform that allows users to browse, add to cart and checkout...",
    responsibilities: [
      "Implemented the frontend using Vue.js",
      "Built the backend using Django REST framework",
      "Used SQLite for database storage",
    ],
    technologies: ["Vue.js", "Django", "SQLite" , "Rest API" , "Python"], 
    projectDetails: "/projects/shopeasy",
    projectLink: "https://shopeasy.herokuapp.com/",
    projectSourceLink: "https://github.com/username/shopeasy",
  },
];

export default projectsData;
