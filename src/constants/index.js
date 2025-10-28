const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "", label: "Years of Experience" },
  { value: 12, suffix: "", label: "Completed Projects" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/C#_icon.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];
const projects = [
  {
    id: 1,
    title: "UseCaseReportGeneratorAI",
    description:
      "A modern, AI-powered Use Case Report Generator built with Next.js, React, and TypeScript. This application provides an intuitive interface for generating comprehensive use case reports with AI assistance and exporting them to professional Excel documents.",
    image: "/images/prj10.png",
    link: "testcasegenerator-lemon.vercel.app",
    category: "AI",
    bgColor: "bg-[#FFE7EB]",
  },
  {
    id: 2,
    title: "Lovink",
    description:
      "An application that for couple to connect and share special moments together, featuring private memories, taking note for special events, and photo streaks like LOCKET.",
    image: "/images/prj11.jpg",
    link: "https://github.com/XuHo-IT/Lovink_App",
    category: "WPF/App",
    bgColor: "bg-[#FFE7EB]",
  },
  {
    id: 3,
    title: "EcoGenz Platform",
    description:
      "A global platform for creating and joining environmental projects, inspiring green challenges, and sharing eco journeys to build a worldwide sustainability community.",
    image: "/images/prj3.png",
    link: "https://github.com/XuHo-IT/EcoGenz_API",
    category: "Web",
    bgColor: "bg-[#FFE7EB]",
  },
  {
    id: 4,
    title: "PawnHub",
    description:
      "A wpf application for managing pawn shop operations, including inventory management, customer records, and transaction processing.",
    image: "/images/prj4.png",
    link: "https://github.com/XuHo-IT/PawnHub",
    category: "WPF/App",
    bgColor: "bg-[#FFE7EB]",
  },
  {
    id: 5,
    title: "Dating App",
    description:
      "A modern dating application with user profiles, matching algorithms, and real-time chat functionality, built using contemporary development frameworks.",
    image: "/images/prj5.png",
    link: "https://github.com/XuHo-IT/DatingApp_API",
    category: "Web",
    bgColor: "bg-[#FFE7EB]",
  },
  {
    id: 6,
    title: "Quiz App",
    description:
      "An interactive quiz application that offers various quizzes across different topics, featuring timed questions and score tracking.",
    image: "/images/prj7.png",
    link: "https://github.com/XuHo-IT/QuizApp",
    category: "Web",
    bgColor: "bg-[#FFE7EB]",
  },
  {
    id: 7,
    title: "Hotel Management System",
    description:
      "An hotel management system that streamlines booking, check-in, and customer service processes using advanced technologies.",
    image: "/images/prj6.png",
    link: "https://github.com/XuHo-IT/ManageVilla",
    category: "Web",
    bgColor: "bg-[#FFE7EB]",
  },
  {
    id: 8,
    title: "InfoAIChatApp",
    description:
      "InfoAIChatApp is a C# desktop application that lets you upload a PDF file and interact with its content using AI. You can ask questions or extract specific information directly from the document, making it a powerful tool for fast, intelligent PDF understanding",
    image: "/images/prj8.png",
    link: "https://github.com/XuHo-IT/Info_AI",
    category: "AI",
    bgColor: "bg-[#FFE7EB]",
  },
  {
    id: 9,
    title: "LanguageDetectorAI",
    description:
      "LanguageDetectorAI is a C# desktop application that detects the language of user input and helps correct grammar or spelling mistakes. It’s designed to assist users in improving their writing accuracy across multiple languages through intelligent AI suggestions",
    image: "/images/prj9.png",
    link: "https://github.com/XuHo-IT/LanguageDetector_AI",
    category: "AI",
    bgColor: "bg-[#FFE7EB]",
  },
   {
    id: 10,
    title: "FusionNews Platform",
    description:
      "A News platform with several languages from all countries, secure login, and chatbot support 24/24. Built using modern web technologies and APIs.",
    image: "/images/prj1.png",
    link: "https://github.com/XuHo-IT/FusionNews_API",
    category: "Web",
    bgColor: "bg-[#FFEFDB]",
  },
  {
    id: 11,
    title: "Ornamental Fish Platform",
    description:
      "An online platform for showcasing and selling ornamental fish, featuring product listings, user authentication, and a responsive design.",
    image: "/images/prj2.png",
    link: "https://github.com/XuHo-IT/Ornamental_Fish_API",
    category: "Web",
    bgColor: "bg-[#FFEFDB]",
  },
  {
    id: 12,
    title: "NFT Market Place",
    description:
      "A modern NFT Marketplace application built with React and Solidity, allowing users to browse, buy, and sell NFTs securely on the blockchain.",
    image: "/images/prj12.png",
    link: "https://github.com/XuHo-IT/NFT_Market_Place",
    category: "WPF/App",
    bgColor: "bg-[#FFE7EB]",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "C# Developer",
    modelPath: "/models/CSharp_Icon.glb",
    scale: 0.08,
    rotation: [0, -Math.PI / 2, 0],
  },

  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Team Work",
    modelPath: "/models/conservation.glb",
    scale: 3,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Problem Solving",
    modelPath: "/models/question_block.glb",
    scale: 1.5,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "XuHo is hardworking and dedicated to his work, he is a great developer and a great team player.",
    imgPath: "/images/logo4.png",
    logoPath: "/images/logo4.png",
    title: "Backend Developer",
    date: "December 2024 - April 2025",
    responsibilities: [
      "Contributed as a C# Development Developer on a financial support system project",
      "Designed and implemented features using C# and Entity Framework Core with a Code First approach to ensure efficient database interaction",
      "Developed desktop application modules in WPF (Windows Presentation Foundation) with MVVM design pattern, enhancing maintainability and user experience",
    ],
  },
];



const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url:"https://www.instagram.com/_.xuho._/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url:"https://www.facebook.com/hoa.ngotran.986?locale=vi_VN",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url:"https://www.linkedin.com/in/xuan-hoa-b581102b7/",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects
};
