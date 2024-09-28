const about = {
  name: 'Jihane Zouahri',
  role: 'Software Engineering Student at ENSIAS',
  company: '',
  description: [
    `Passionate final year engineering student at ENSIAS with a strong interest in Full-stack Development and Software Engineering.  My knack for problem-solving, coupled with a solid foundation in engineering principles, fuels my desire to tackle real-world projects and make a positive impact. \n I'm actively seeking opportunities to leverage my skills alongside experienced professionals while expanding my knowledge in the field.
    `,
  ],
  image : 'images/jihane.jpeg' ,
  resume: '../documents/jihane_zouahri_CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/jihane-zouahri-118788251/',
    github: 'https://github.com/ZJihane',
  },
  greetingEmoji: '👩‍💻',
}

const professionalExperiences = [
  {
    position : 'Software Engineer Intern' ,
    company : 'Attijariwafa Bank' ,
    logo : 'images/attijariLogo.png',
    startDate : 'July 2024',
    endDate : 'September 2024',
    details : 'Development of a Document Generation Solution Tailored for Banking Distribution: I developed a generic PDF template builder with real-time data integration, optimizing the document generation process for forms, notices, and subscription bulletins. This significantly reduced the time-to-market (TTM) by streamlining the creation of templates and automating workflows that previously required manual intervention or complex systems like StreamServe.',
    tools : ['Framework Spring' , 'Spring boot ', 'React Js'] 


  },

  {
    position : 'Full-stack Developer Intern' ,
    company : 'Viatoile company ' ,
    logo:'images/viatoileLogo.png',
    startDate : 'July 2023',
    endDate : 'September 2023',
    details : 'I was responsible for designing and developing responsive user interfaces for web and mobile dashboards that display real-time sensor data for industrial boiler maintenance. These intuitive dashboards allow managers and technicians to monitor and visualize critical data effectively. The project involved integrating real-time data collection via an IoT API, along with database/API connectivity, front-end integration, and the creation of dynamic charts for both platforms.',
    tools : ['asp.net ' , 'Mongo DB', 'Flutter'] 

   
  }
]

const projects = [

  {
    thumbnail: '/images/SmartFridge.png',
    name: 'Smart Fridge',
    description: [
      `SmartFridge is an innovative project designed to reduce food waste and enhance stock management by integrating IoT, machine learning, and mobile technologies for efficient refrigerator management. Using sensors to monitor temperature, humidity, and gas levels, it provides real-time tracking of food freshness and alerts users when items are running low. A supervised learning algorithm, Random Forest, predicts food spoilage based on environmental data, helping to preserve quality. The mobile app offers features such as recipe suggestions based on available ingredients, calorie calculation, and fridge locking control. With cloud integration via Firebase.
      `,
    ],
    stack:[ 'Arduino', 'RaspberryPi', 'Node-red', 'Python', 'Flask', 'Firebase', 'Android', 'EDAMAM API'],
    sourceCode: ' https://github.com/ZJihane/SmartFridge',
   
  },

  {
    thumbnail: '/images/Learn2Earn.png',
    name: 'Lear2Earn',
    description: [
      `Learn2Earn is an innovative platform designed to connect students with professional opportunities. It aims to bridge the gap between non-graduate students and companies by offering paid missions. This platform allows students to gain valuable work experience while earning an income, which helps them meet their financial needs. For companies, Learn2Earn provides a cost-effective way to access promising talents for short-term tasks.

       Students can create profiles, browse available missions, and apply based on their interests and skills, while recruiters can publish and manage job offers, and handle candidate applications efficiently.

       The project fosters financial and professional inclusion for students, making their transition into the job market smoother while addressing companies' recruitment needs at a lower cost​`,
    ],
    stack: [ 'Java EE' , 'Java Servlet' , 'Jakarta Server Pages' , 'SCSS' , 'Bootstrap'],
    sourceCode: 'https://github.com/ZJihane/Learn2Earn',
  },

  {
    thumbnail: '/images/painCare.png',
    name: 'Pain Care',
    description: [
      'The platform facilitates personalized account creation and authentication, comprehensive diagnostic assessments, and pain tracking functionalities. Users can engage in a community blog, participate in informative quizzes, and access reliable medical articles for continuous education. Additionally, the platform offers tailored recipes to address dietary needs, fostering comprehensive support for individuals managing endometriosis.',
    ],
    stack: ['Java EE' , 'Java Servlet' , 'Jakarta Server Pages' , 'SCSS' , 'Bootstrap'],
    sourceCode: 'https://github.com/ZJihane/Pain_Care',
    
  },
 
  
  {
    thumbnail: '/images/ToDoApp.png',
    name: 'ToDoApp',
    description: [
      ` A Java-based ToDo list and notes android application designed to enhance task management and productivity. The application allows users to create, edit, delete, and categorize tasks while providing functionalities to track their completion status. With a user-friendly interface, it enables efficient organization of tasks and progress monitoring. 
      `,
    ],
    stack:[ 'Android', 'Java',  'Firebase'],
    sourceCode: 'https://github.com/ZJihane/ToDoApp',
   
  },

  {
    thumbnail: '/images/MyAttendance.png',
    name: 'My Attendance',
    description: [
      ` My-Attendance is a web platform designed to streamline attendance management in educational institutions. Built with modern technologies such as Laravel, Livewire, Jetstream, and Bootstrap, this application provides an intuitive and responsive interface. Administrators can easily manage students, classes, subjects, and sessions, while teachers can take and track student attendance in real-time. Additionally, students and parents have access to attendance information, fostering transparent communication between the school and families. This application aims to enhance administrative efficiency and ensure accurate attendance tracking, contributing to a better learning environment.
      `,
    ],
    stack:[ 'Laravel', 'Livewire', 'Jetstream' , 'Bootstrap' , 'Tailwind CSS'],
    sourceCode: 'https://github.com/ZJihane/My-Attendance',
   
  },

  {
    thumbnail: '/images/oto.png',
    name: 'OTO',
    description: [
      ` This application is designed to streamline the various activities of a driving school. Its main features include the management of driving schedules, course planning, exam management, payment processing, candidate tracking, and the handling of personal information for instructors, administrators, and secretaries. By integrating these functionalities, the platform enhances operational efficiency and provides a user-friendly experience for all stakeholders involved.
      `,
    ],
    stack:[ 'HTML', 'JavaScript' , 'PHP' , 'CSS' , 'Bootstrap'],
    sourceCode: 'https://github.com/ZJihane/OTO',
   
  },
 
]

const skills = [
  'Java',
  'Java EE',
  'Spring Boot',
  'JavaScript',
  'Reactjs',
  'Express.js',
  'Node.js',
  'Php',
  'Laravel',
  'BootStrap',
  'Git',
  'CI/CD',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'MySQL',
  'MongoDB',
  'Oracle Database' ,
   'PL/SQL',
  'Material UI',
  'Android' ,
  'Flutter' ,
  'C',
  'C++',
  'Postman',
  'Linux'
  

]

const contact = {
  email: 'jihanezouahri@gmail.com',
}

const contacts = [
  {
    name: 'Email',
    link: `mailto:${contact.email}`, 
    icon: 'fas fa-envelope',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jihane-zouahri-118788251/',
    icon: 'fab fa-linkedin',
  },
]

export { about, projects, skills, contact, contacts, professionalExperiences }
