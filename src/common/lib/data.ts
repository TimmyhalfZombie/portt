import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/todo.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/dracarys.png';
import auditMasterImg from '@/../public/images/animal.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Education',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Elementary',
    location: 'Los Angeles Elementary School',
    description: [
      "Musician of the Year & Academic Achiever",
    ],
    icon: React.createElement(BriefcaseBusinessIcon),
    date: '2008 - 2014',
  },
  {
    title: 'High School',
    location: 'Danawan National High School',
    description: `Athlete (Sepak Takraw), competed at Regional Division`,
    icon: React.createElement(BookIcon),
    date: '2014 - 2018',
  },
  {
    title: 'Senior High School',
    location: 'Cuyo National High School',
    description: `Academic & Leadership Award (STEM President)`,
    icon: React.createElement(LaptopMinimalIcon),
    date: '2018 - 2020',
  },
  {
    title: 'College',
    location: 'Western Institute of Technology',
    description: `Bachelor of Science in Information Technology`,
    icon: React.createElement(LaptopMinimalIcon),
    date: '2020 - Present',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Awesome Todo App',
    description:
      'A streamlined task management platform that empowers users to organize, prioritize, and track daily activities with ease. It provides seamless task creation, scheduling, and reminders to boost productivity.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Convex',
      'Clerk',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://todo-app-ni-tim.onrender.com/',
  },
  {
    title: 'Dracarys',
    description: `An immersive visual experience that brings dragons to life through stunning 3D animations and interactions.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://dracarys.robertborghesi.is/',
  },
  {
    title: 'Animal Futures',
    description: `A visionary platform that invites users to imagine a future focused on animal welfare through interactive storytelling and gameplay.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
      'OpenAI',
      'SCRUM Methodology',
      'End-to-End Development',
    ],
    imageUrl: auditMasterImg,
    link: 'https://www.rspca.org.uk/webContent/animalfutures/?utm_source=Unseen&utm_medium=Referral&utm_campaign=AnimalFutures&utm_content=Game',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
