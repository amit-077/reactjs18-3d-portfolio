import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

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
  education4ol1,
  cognifyz,
  dassault,
  burdenoff,
  nextjs,
  chakra,
  mysql,
  prisma,
  graphql,
  postman,
  redis,
  aws,
  github,
  reactnative,
  android,
  cpp,
  java,
  python,
  solidity,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Blockchain Developer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'github',
    icon: github,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
  {
    name: 'chakra',
    icon: chakra,
  },
  {
    name: 'Android',
    icon: android,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'prisma',
    icon: prisma,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postman',
    icon: postman,
  },
  {
    name: 'redis',
    icon: redis,
  },
  {
    name: 'aws',
    icon: aws,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'c++',
    icon: cpp,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'solidity',
    icon: solidity,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Android Developer Intern',
    companyName: 'Education4ol',
    icon: education4ol1,
    iconBg: '#E6DEDD',
    date: 'Dec 2023 - Feb 2024',
    points: [
      'Built a cross-platform mobile app with React Native, integrating RESTful APIs using Express and Node.js.',
      'Enhanced data management and performance through advanced MongoDB optimization techniques.',
      'Advanced UI/UX design by addressing complex usability issues in collaboration with design teams.',
    ],
  },
  {
    title: 'Web Developer Intern',
    companyName: 'Cognifyz Technologies',
    icon: cognifyz,
    iconBg: '#383E56',
    date: 'Jan 2024 - Feb 2024',
    points: [
      'Developed dynamic, responsive user interfaces using React.js to ensure performance and accessibility.',
      'Collaborated with UX/UI designers to convert design mockups into interactive website components',
      'Implemented React.js best practices and state management for scalable and maintainable frontend solutions.',
    ],
  },
  {
    title: 'Project Intern',
    companyName: 'Dassault Systeme`s La Fondation',
    icon: dassault,
    iconBg: '#E6DEDD',
    date: 'Aug 2024 - Present',
    points: [
      'Training a machine learning model to identify and categorize various types of e-waste for robotic processing.',
      'Developing and coding control systems for robotic arm using Arduino to automate e-waste handling tasks.',
      'Implementing and testing algorithms for robotic arm movement in e-waste management.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    companyName: 'BurdenOff Consulting Services',
    icon: burdenoff,
    iconBg: '#c6c6c6',
    date: 'Nov 2024 - Present',
    points: [
      'Developing scalable web applications using Next.js, Prisma, and GraphQL for seamless functionality.',
      'Integrated Plausible, Kibana, and Elasticsearch to enhance analytics and performance monitoring.',
      'Optimized PostgreSQL database operations to ensure high efficiency and data reliability.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
