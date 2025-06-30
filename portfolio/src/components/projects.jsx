import codequestImage1 from '/projects/codecraft/landing.png';
import codequestImage2 from '/projects/codecraft/login.png';
import codequestImage3 from '/projects/codecraft/dashboard.png';
import codequestImage4 from '/projects/codecraft/not enrolled in any classroom.png';
import codequestImage5 from '/projects/codecraft/javascript essentials section of javascript classroom.png';
import codequestImage6 from '/projects/codecraft/begin test.png';
import codequestImage7 from '/projects/codecraft/quiz question.png';
import codequestImage8 from '/projects/codecraft/test completion.png';
import codequestImage9 from '/projects/codecraft/wrong.png';
import codequestImage10 from '/projects/codecraft/progress.png';
import codequestImage11 from '/projects/codecraft/leaderboard.png';
import codequestImage12 from '/projects/codecraft/profile.png';

import futureforgeImage1 from '/projects/futureforge/homepage.png'
import futureforgeImage2 from '/projects/futureforge/welcome-page.png'
import futureforgeImage3 from '/projects/futureforge/login.png'
import futureforgeImage4 from '/projects/futureforge/test-page.png'
import futureforgeImage5 from '/projects/futureforge/dashboard.png'
import futureforgeImage6 from '/projects/futureforge/dash2.png'

import studyMateImage from '../assets/react.svg';

// import hotelEaseImage1 from '../assets/react.svg';

// import fastfoodImage1 from '../assets/react.svg';

const projects = [
  {
    tag: 'Research-Based Web App',
    date: 'Feb – April 2025',
    title: 'CodeCraft',
    subtitle: 'Gamified Programming Learning Platform',
    project_link: 'https://code-craft-frontend.vercel.app/',
    project_git: 'https://github.com/nukimoya/CodeCraft',
    images: [codequestImage1, codequestImage2, codequestImage3, codequestImage4, codequestImage5, codequestImage6, codequestImage7, codequestImage8, codequestImage9, codequestImage10, codequestImage11, codequestImage12],
    description: 'A gamified e-learning platform for learning Python, Java, and JavaScript via classroom structures with progressive levels and interactive content.',
    features: [
      'Language-specific classrooms with 3 difficulty tiers',
      'Progress tracking and badge system',
      'Interactive quizzes and challenges',
      'Admin panel for content population'
    ],
    technologies: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
      'Framer Motion'
    ]
  },
  {
    tag: 'Research-Based Web App',
    date: 'April – June 2025',
    title: 'FutureForge',
    subtitle: 'AI-Powered Career Path Recommender',
    // project_link: 'https://futureforge.vercel.app/',
    project_git: 'https://github.com/nukimoya/futureforge',
    images: [futureforgeImage1, futureforgeImage2, futureforgeImage3, futureforgeImage4, futureforgeImage5, futureforgeImage6],
    description: 'An AI-powered career recommendation platform that helps students and professionals discover ideal career paths through an interactive aptitude test, psychological profiling, and intelligent matching.',
    features: [
      'AI-driven career suggestions based on user responses',
      'Personalized aptitude tests with open-ended and multiple-choice questions',
      'User dashboards with profile insights and curated learning paths',
      'Token-based signup flow with email verification',
      'Role-based access modes (student/professional)'
    ],
    technologies: [
      'React + Vite',
      'Node.js + Express',
      'PostgreSQL + Sequelize',
      'Tailwind CSS',
      'Lucide Icons'
    ]
  },
  {  
    tag: 'Full-Stack Web App',
    date: 'Nov 2024 – Jan 2025',
    title: 'Study Mate',
    subtitle: 'Centralized Learning Management System',
    images: [studyMateImage, studyMateImage, studyMateImage], // multiple images here
    description: 'A web-based LMS streamlining academic resource sharing and student engagement. Course reps manage materials and AI-powered quizzes while students track progress through gamified learning.',
    features: [
      "AI-powered quiz generation using GroqAI's API",
      'Role-based access control for students and course reps',
      'Course material management (lecture slides, past exams, PDFs)',
      'Streak system & leaderboard to encourage consistent study habits',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'GroqAI API',
      'Tailwind CSS',
    ]
  },
  // {
  //   tag: 'Full Stack CRUD App',
  //   date: 'March 2025',
  //   title: 'HotelEase',
  //   subtitle: 'Hotel Booking and Management Platform',
  //   images: [hotelEaseImage1, hotelEaseImage1],
  //   description: 'A hotel management system allowing customers to book rooms and admins to manage room inventory, bookings, and customer details.',
  //   features: [
  //     'Room booking with availability logic',
  //     'Admin dashboard with stats and customer data',
  //     'Email notification integration',
  //     'Secure authentication for admins'
  //   ],
  //   technologies: [
  //     'PHP',
  //     'MySQL',
  //     'Bootstrap',
  //     'JavaScript'
  //   ]
  // },
  // {
  //   tag: 'Database Project ',
  //   date: 'Nov 2024',
  //   title: 'Global Fast Foods',
  //   subtitle: 'Multi-Entity Restaurant Management',
  //   images: [fastfoodImage1],
  //   description: 'A relational database project simulating a global fast-food franchise with multiple entities, relational queries, and ERD design.',
  //   features: [
  //     'Entity-relationship design and normalization',
  //     'SQL querying and joins for insights',
  //     'Sample data insertion for analysis',
  //     'Frontend form integration (optional)'
  //   ],
  //   technologies: [
  //     'MySQL Workbench',
  //     'SQL',
  //     'ER Diagrams'
  //   ]
  // },

];

export default projects;