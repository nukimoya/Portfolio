
import studyMateImage from '../assets/react.svg'; // Your local image
import hotelEaseImage1 from '../assets/react.svg';
import fastfoodImage1 from '../assets/react.svg';
import codequestImage1 from '../assets/react.svg';

const projects = [
  {
    tag: 'Research-Based Web App',
    date: 'Feb – April 2025',
    title: 'CodeCraft',
    subtitle: 'Gamified Programming Learning Platform',
    project_link: 'https://code-craft-frontend.vercel.app/',
    project_git: 'https://github.com/nukimoya/CodeCraft',
    images: [codequestImage1, codequestImage1],
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
  {
    tag: 'Full Stack CRUD App',
    date: 'March 2025',
    title: 'HotelEase',
    subtitle: 'Hotel Booking and Management Platform',
    images: [hotelEaseImage1, hotelEaseImage1],
    description: 'A hotel management system allowing customers to book rooms and admins to manage room inventory, bookings, and customer details.',
    features: [
      'Room booking with availability logic',
      'Admin dashboard with stats and customer data',
      'Email notification integration',
      'Secure authentication for admins'
    ],
    technologies: [
      'PHP',
      'MySQL',
      'Bootstrap',
      'JavaScript'
    ]
  },
  {
    tag: 'Database Project ',
    date: 'Nov 2024',
    title: 'Global Fast Foods',
    subtitle: 'Multi-Entity Restaurant Management',
    images: [fastfoodImage1],
    description: 'A relational database project simulating a global fast-food franchise with multiple entities, relational queries, and ERD design.',
    features: [
      'Entity-relationship design and normalization',
      'SQL querying and joins for insights',
      'Sample data insertion for analysis',
      'Frontend form integration (optional)'
    ],
    technologies: [
      'MySQL Workbench',
      'SQL',
      'ER Diagrams'
    ]
  },

];

export default projects;