import {
  // mobile,
  // backend,
  // creator,
  // web,
  javascript,
  typescript,
  html,
  css,
  // reactjs,
  // redux,
  // tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
  awscloudfoundations,
  awscloudarchitecting,
  awsclouddev,
  streamfy,
  swipe,
  // onlinestore,
  medium,
  linkedin,
  github2,
  python,
  aws,
  azure,
  gcp,
  java,
  sql,
  // spark,
  cloud,
  data,
  fullstack,
  // etl_airflow,
  airflow,
  pyproject,
  search,
  erd,
  // reub,
  // profile,
  nanaB

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "about",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "certifications",
    title: "Certs",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "feedbacks",
    title: "References",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: fullstack,
  },
  {
    title: "Big Data Engineer",
    icon: data,
  },
  {
    title: "Cloud Architecting",
    icon: cloud,
  },

];

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    icon: awscloudarchitecting,
        url:"https://www.credly.com/badges/78f5aa97-95d1-48b3-a51e-b10710f559da/public_url"
      },
      {
        title: "AWS Developer Associate",
        icon: awsclouddev,
        url:"https://www.credly.com/badges/e31a169f-d751-48de-b68c-cb9026767e41/public_url"


  },
  {
    title: "AWS Certified Cloud Practitioner",  
    icon: awscloudfoundations,
    url: "https://www.credly.com/badges/3173203b-8765-4dd1-ad42-ffb050940170/public_url"
  }
];





const technologies = [

  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // // {
  // //   name: "Redux Toolkit",
  // //   icon: redux,
  // // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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
    {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  
];

const programming = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python ",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
// {
//    name: "SQL",
//     icon: sql,
// }
]

const cloudtech = [
    {
    name: "AWS",
    icon: aws,
  },
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "gcp",
    icon: gcp,
  },
]


const experiences = [
   {
    title: "Freelance Software Developer",
    company_name: "1949 Barber Shop(football)",
    icon: java,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Designed the overall microservice architecture for the application, integrating backend and frontend components for scalability and security.",
      "Designed and deployed microservice-based backend using AWS EC2, Docker, and Spring Boot, with SSL-enabled HTTPS via AWS Certificate Manager and Apache Server as a reverse proxy.",
      "Configured Application Load Balancer and Route 53 for efficient traffic distribution, domain management, and failover support.",
      "Developed secure user management with sign-in, sign-up, role-based access control, and route protection, including CRUD operations on user profiles.",
      "Containerized Spring Boot API in Docker, delivering RESTful services and managing API access with custom user security.",
    ],
    },
   {
    title: "Chief Technology Officer/Developer",
    company_name: "Ciana Insights (Startup)",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
     "Developed a backend server with Node and GPT-4 APIs for an AI voice assistant with real-time data.",
     "Designed a responsive frontend using React, TypeScript, and for seamless server interaction",
    ],
    },
    // {
    // title: "Software Engineer (Full Stack)",
    // company_name: "Streamfy",
    // icon: nodejs,
    // iconBg: "#E6DEDD",
    // date: "Jan 2022 - Present",
    // points: [
    // "Developed and maintained full-stack applications using Next.js, MongoDB, and TypeScript, improving user experience and engagement by 30%",
    // "Implemented user authentication and authorization using Clerk.io and Stripe, enhancing security and privacy for user data",
    // "Created RESTful APIs for data retrieval and manipulation, enabling seamless data integration and ensuring data consistency",
    // "Designed and implemented responsive UI components using Tailwind CSS, improving user interface and experience by 40%",
    // "Integrated third-party APIs for data retrieval and processing, enabling real-time data updates and enhancing user engagement by 20%"
    // ],
    // },
  {
    title: "Software Enigeneer (Data)",
    company_name: "D1g1t",
    icon: python,
    iconBg: "#383E56",
    date: "May 2022 - Dec 2023",
    points: [
    "Spearheaded the development of backend SQL functions and Python scripts for data transformation, significantly enhancing data reporting and analytics capabilities.",
    "Employed GitHub Actions for CI/CD, markedly reducing integration errors and improving deployment efficiency.",
    "Enhanced data model designs for complex reporting requirements, achieving a 25% improvement in efficiency.",
    "Optimized SSRS reports and implemented best practices in SQL development for performance tuning.",
    "Conducted regular technical training sessions for non-technical team members, improving collaboration and understanding of reporting feature implementation by 40%"

    ],
  },
  // {
  //   title: "Data Engineer",
  //   company_name: "Staples",
  //   icon: spark,
  //   iconBg: "#E6DEDD",
  //   date: "Feb 2020 - Jan 2022  ",
  //   points: [ 
  //   "Led cross-functional teams to build and optimize data flows using Azure Synapse and Databricks spark clusters, improving productivity by 20%",
  //   "Designed automated ETL processes with Azure Data Factory, achieving seamless data integration and a 90% accuracy rate in data deployments",
  //   "Conducted thorough data quality checks on source systems, to track and identify bugs in code ensuring about 90% deployment of valid data to the warehouse, maintaining integrity and reliability",
  //   "Enhanced pipeline efficiency by utilizing Spark Structured Streaming API for micro-batch data ingestions within predefined time windows, optimizing data load and diminishing storage contention by 40%",
  //   "Refined Spark codebase by implementing caching and minimizing shuffle operations through Broadcast joins and deduplication, accelerating processing speed by 60%"
  //   ],
  // },
  // {
  //   title: "SQL Developer",
  //   company_name: "Newark Community Health Center Inc",
  //   icon: sql,
  //   iconBg: "#383E56",
  //   date: "Jan 2016 - Dec 2018",
  //   points: [
  //   "Developed and optimized Tableau reports, driving a 30% increase in data-driven decision-making.",
  //   "Streamlined the reporting process, resulting in a 25% faster turnaround for data insights.",
  //   "Defined Key Performance Indicators (KPIs) and metrics for performance tracking, resulting in improved business evaluation and alignment with strategic goals",
  //   "Resolved 60% of reporting and design issues, ensuring seamless data visualization and maintaining high data accuracy" 
  //   ],
  // },
  {
    title: "Data Analyst",
    company_name: "Student Life, MUN ",
    icon: sql,
    iconBg: "#383E56",
    date: "Jan 2020 - Feb 2021",
    points: [
"Collaborated with stakeholders to gather requirements for project planning and execution, ensuring alignment with business objectives and data needs",
"Optimized large student enrollment datasets applying statistical and data validation techniques to ensure data accuracy and integrity",
"Created visualizations for presentation and summarized recommendations to support strategic decisions to improve student skill development initiatives",

    ],
  }
  // {
  //   title: "Full stack Developer",
  //   company_name: "1949 Barber Shop",
  //   icon: nodejs,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using node js and other related technologies.",
  //     "Collaborating with cross-functional teams including CEO, Team managers, to create a fully responsive web app.",
  //     "Implementing user authentication with passport.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //   "An expert data analyst with proficiency in Python and SQL, delivering actionable business insights through advanced statistical and predictive analysis.",
  //   name: "Reuben Addisson",
  //   designation: "Assistant Professor of Kinesiology ",
  //   company: "Depauw University",
  //   image: reub,
  //   profile: "https://www.linkedin.com/in/reuben-newton-addison-ph-d-04394870/",
  // },
  // {
  //   testimonial:
  //     "A skilled data engineer with a strong background in cloud computing and data architecture, adept at optimizing data workflows for business intelligence and analytics.",
  //   name: "Felix Ayesu",
  //   designation: "Professor of Psychology & Data Engineer",
  //   company: "HomeStars",
  //   // image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   profile: "https://www.linkedin.com/in/felix-a-38b55423b/",
  // },
  {
    testimonial:
      "A highly skilled software engineer with a keen eye for detail and a passion for creating innovative data  and api integrations.",
    name: "Nana Yaw Bediako",
    designation: "Senior Data Analyst",
    company: "Air Canada",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
    image: nanaB,
    profile: "https://www.linkedin.com/in/nana-yaw-donkor/",
  },
  {
    testimonial:
      "A highly skilled software engineer with a keen eye for detail and a passion for creating innovative data  and api integrations.",
    name: "Felix Ayesu",
    designation: "Prof Psychology",
    company: "MUN",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
    image: nanaB,
    profile: "https://www.linkedin.com/in/nana-yaw-donkor/",


  }


];

const projects = [
  {
    name: "Event Manager",
    description:
      "Event management platform that allows users to create, manage, and promote events, facilitating seamless event planning and execution.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
         color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: streamfy,
    source_code_link: "https://streamfy.vercel.app/",
    github_link: "https://github.com/Proj-Valentine/event_platform",
  },
  {
    name: "Social App",
    description:
      "Social media platform that allows users to create, share, and engage with content, fostering a sense of community and connection among users",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwritecloud",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: swipe,
    source_code_link: "https://swipe.vkampah-app.com/sign-in",
    github_link: "https://github.com/Proj-Valentine/mymobileapp",
  },
  // {
  //   name: "eCommerce Platform",
  //   description:
  //     "online clothing store that allows users to browse, search, and purchase products, providing a seamless shopping experience for customers.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Tailwind CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: onlinestore,
  //   source_code_link: "https://main.d2zkxheui2vt8a.amplifyapp.com/",
  //   github_link: "https://github.com/Proj-Valentine/onlinestore",
  // },
  {
    name: "Search Engine",
    description:
      "Search engine that allows authenticated users to dual search from postgres or Mongodb or both, providing relevant search results based on user queries and filters.",
    tags: [
      {
        name: "postgress",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB Atlas",
        color: "green-text-gradient",
      },

      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "api integration",
         color: "green-text-gradient",

      },
      {
        name: "node js",
         color: "blue-text-gradient",
     
      }
    ],
    image: search,
    // source_code_link: "https://github.com/VK-Ampah/FinalSprint_S3",
    github_link: "https://github.com/VK-Ampah/FinalSprint_S3"
  },

  {
    name: "Python Automation",
    description:
      "Tool that automates processing log files and generating reports, saving time and effort for data analysts.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Bash",
        color: "green-text-gradient",
      },
      {
        name: "unittest",
        color: "pink-text-gradient",
      },
    ],
    image: pyproject,
    // source_code_link: "https://github.com/Proj-Valentine/Python_Projects",
    github_link: "https://github.com/Proj-Valentine/Python_Projects",
  },

  {
    name: "ETL_python_airflow",
    description:
      "ETL pipeline that extracts data from CSV files, transforms it using Python scripts, and loads it into a database using Apache Airflow for task orchestration.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "airflow",
        color: "green-text-gradient",
      },
      {
        name: "csv",
        color: "pink-text-gradient",
      },
    ],
    image: airflow,
    // source_code_link: "https://github.com/Proj-Valentine/ETL_AIRFLOW",
    github_link: "https://github.com/Proj-Valentine/ETL_AIRFLOW",
  },

{
    name: "Data Modeling ERD",    
    description:
      "Database design project that models the relationships between entities in a database using an Entity-Relationship Diagram (ERD-crow's feet) for data visualization and analysis",
    tags: [
      {
        name: "lucidchart",
        color: "blue-text-gradient",
      },
      {
        name: "crow's feet",
        color: "green-text-gradient",
      },
      {
        name: "ERD",
        color: "pink-text-gradient",
      },
    ],
    image: erd,
    // source_code_link: "https://github.com/Proj-Valentine/database_design_erd",
    github_link: "https://github.com/Proj-Valentine/database_design_erd",
}

];

const FooterData = 
 [
    {
      id: 1,
      name: "github",
      url: "https://github.com/Proj-Valentine",
      icon: github2,
    },
    {
      id: 2,
      name: "github2",
      url: "https://github.com/VK-Ampah/",
      icon: git,
    },
    {
      id: 2,
      name: "linkedin",
      url: "https://www.linkedin.com/in/valentine-kwame-ampah-b92a0198/",
      icon: linkedin,
    },
    {
      id: 3,
      name: "meduim",
      url: "https://medium.com/@vkampah28",
      icon: medium,
    },
  ]

export { services, technologies,cloudtech, programming, experiences, testimonials, projects, certificates, FooterData};