export const portfolioConfig = {
  personal: {
    name: "Anuja S Nair",
    title: "Senior Software Engineer", 
    description: "Passionate about creating scalable web applications and user-friendly interfaces with modern technologies.",
    profileImage: "/profile.png",
    email: "hello@example.com",
    linkedin: "https://www.linkedin.com/in/anuja-nair-32576219b/",
    github: "https://github.com/anujanair0001/"
  },

  about: {
    paragraph1: "I'm a web developer specializing in Laravel and full-stack solutions. I focus on building scalable, user-friendly applications while constantly improving my skills to deliver better results.",
    paragraph2: "When I'm not coding, I like reading about software development trends, experimenting with side projects, and engaging in activities that keep me refreshed and motivated."
  },
  
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Impelsys India Private Limited, Bangalore Urban,Karnataka,India",
      period: "Jan 2020 - Aug 2025", 
      description: "Developed and maintained PHP websites with Laravel, optimizing performance and integrating third-party APIs to enhance functionality. Collaborated with designers to deliver responsive, user-friendly interfaces",
      color: "cyan"
    },
    {
      title: "Software Engineer",
      company: "Smart Management IT Solutions,Bangalore Urban,Karnataka,India", 
      period: "Sept 2018 - July 2019",
      description: "Collaborated with teams to deliver projects on time, ensuring code quality with TDD and developing custom modules and themes to meet client needs.",
      color: "purple"
    },
    {
      title: "Software Engineer",
      company: "Diya Systems Pvt Ltd,Mangalore,Karnataka,India",
      period: "July 2015 - Aug 2018", 
      description: "Built reusable web modules, managed dynamic database-driven websites, and collaborated on database structuring.",
      color: "pink"
    },
    {
      title: "Program Development Manager (Freelancer)",
      company: "Mansion Select - Managlore, India",
      period: "Feb 2015 - June 2015", 
      description: "Designed, developed, and tested system specifications for conversion and development projects. Managed and updated website content to ensure accuracy and consistency.",
      color: "pink"
    },
    {
      title: "Junior Software Developer",
      company: "Muble Solutions Pvt Ltd,kochi,Kerala,India",
      period: "Jan 2014 - Sept 2014", 
      description: "Assisted in designing and implementing web development solutions using JavaScript and MySQL based on project requirements. Reviewed code and provided status updates to senior developers and managers",
      color: "pink"
    }
  ],

  skills: {
    programming: [
      { name: "PHP", icon: "🐘" },
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "⚡" },
      {name : "TypeScript", icon: "🟦" }
    ],
    databases: [
      { name: "MySQL", icon: "🗄️" },
      { name: "SQL", icon: "" },
      { name: "SQLite", icon: "🗃️" }
    ],
    frameworks: [
      { name: "Laravel", icon: "🔥" },
      { name: "Bootstrap", icon: "🎨" },
      { name: "jQuery", icon: "💫" }
    ],
    dataScripting: [
      { name: "Jupyter Notebook", icon: "📓" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Tesseract OCR", icon: "👁️" }
    ],
    practices: [
      { name: "RESTful APIs", icon: "🔗" },
      { name: "JWT Authentication", icon: "🔐" }
    ],
    tools: [
      { name: "Git", icon: "📝" },
      { name: "Composer", icon: "🎼" },
      { name: "Postman", icon: "📮" },
      { name: "VS Code", icon: "💻" }
    ],
    frontend: [
      { name: "React.js", icon: "⚛️" },
      { name: "Angular", icon: "🅰️" }
    ],
    devops: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Jenkins", icon: "🔁" },
      { name: "SonarQube", icon: "🧩" }
    ]
  },

  projects: [
    {
      title: "American Heart Association eLearning Platform",
      description: "Developed a Laravel-based eLearning platform with a focus on scalability, accessibility, security, and responsive design. Collaborated directly with US clients, presenting production issues and ensuring clear communication with stakeholders. Managed both development and production support, resolving live issues to maintain platform stability and user satisfaction.",
      tech: ["Laravel", "Angular", "Mysql", "AWS"],
      demo: "https://elearning.heart.org/", 
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Expense Tracker with OCR Receipt Scanner (Personal Project)",
      description: "Developed a full-stack expense tracker using Laravel, Python (Tesseract OCR), and React.js to scan and log expenses from uploaded receipts. Implemented secure authentication, APIs, and file handling in Laravel with a responsive React.js + Bootstrap frontend.",
      tech: ["Python", "React", "Laravel", "Mysql"],
      github: "https://github.com/anujanair0001/expense_tracker",
      demo: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Interview Prparation Web App (Personal Project)", 
      description: "This project is a modern frontend web application built with React and TypeScript. It uses create-react-app as its foundation, providing standard scripts for starting, building, and testing the application. The project also includes libraries for creating rich user interfaces and animations, such as Framer Motion and Lucide React, and is set up for unit testing with Jest and React Testing Library.",
      tech: ["JavaScript", "React", "TailwindCSS", "TypeScript", "FastAPI","Python", "SQLite"],
      github: "https://github.com/anujanair0001/interview_prep_app",
      demo: "#",
      gradient: "from-purple-500 to-indigo-500"
    },

  ],


  courses: [
    { name: "Type Script Crash Course", provider: "Udemy", year: "2025", link: "Typescript.pdf" },
    { name: "React Bootcamp", provider: "Scaler MasterClass", year: "2025", link: "react_completion.png" },
   
  ],

  awards: [
    { name: "Best Innovation Award", issuer: "Impelsys India", year: "2022", link: "/award.pdf" },
  ],

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Malayalam", level: "Native" }
  ],

  highlights: [
    "Improved application performance by 60% through optimization",
    "Contributed to Agile processes, providing technical input in sprint planning and retrospectives.",
    "Actively participated in client meetings with US-based teams, gathering requirements and providing technical insights.",
    "Created detailed technical documentation and API references to streamline onboarding for future developers.",
    "Conducted code reviews to maintain coding standards, improve code quality, and mentor team members",
    "Led the migration of legacy systems to modern frameworks, enhancing maintainability and scalability.",
    "Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment times by 40%.",
    "Collaborated with cross-functional teams to define project requirements and deliver solutions that meet business needs."
  ],

  certifications: [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023", link: "#" },
    //{ name: "Laravel Certified Developer", issuer: "Laravel", year: "2022", link: "#" },
    //{ name: "Python for Data Science", issuer: "Coursera", year: "2021", link: "#" }
  ],
  
  education: [
    {
      degree: "Master of Computer Applications",
      institution: "Mount Zion College of Engineering and Technology, Kerala, India",
      university: "Mahatma Gandhi University,Kerala, India",
      year: "2010 - 2013",
      grade: "72%"
    },
    {
      degree: "B.Sc in Computer Science",
      institution: "School Of Technology and Applied Science",
      university: "Mahatma Gandhi University,Kerala, India", 
      year: "2007 - 2010",
      grade: "67%"
    }
  ]
};