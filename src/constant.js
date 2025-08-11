
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

import techmasterLogo from './assets/company_logo/techmaster.png';

import booksforyouLogo from './assets/projects/booksforyou.png';
import courseLogo from './assets/projects/course.png';
import droneLogo from './assets/projects/drone.png';

import statebordLogo from './assets/education_logo/statebord.png';
import diplomaLogo from './assets/education_logo/diploma.png';
import sppupuneLogo from './assets/education_logo/sppupune.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'MySQL', logo: mysqlLogo }
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

 export const experiences = [
    {
      id: 0,
      img: techmasterLogo,
      role: "Web Developer",
      company: "Tech-Master",
      date: "Dec 2023 - jan 2024",
      desc: "Completed an online internship (Dec 14 – Jan 15) focused on HTML, CSS, and JavaScript, developing a Student Login website and gaining hands-on experience in debugging and optimizing code.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
       
      ],
    },
  ];

   export const projects = [
    {
      id: 0,
      title: "BooksForYou",
      description:"Developed a responsive online bookstore with dark mode, search, category filtering, ratings, and animated add-to-cart for an enhanced user experience.",
       
      image: booksforyouLogo,
      tags: ["HTML", "CSS", "JavaScript"],
     
     
    },
    {
      id: 1,
      title: "Edule E-commerce Website",
      description:
        "A clean and modern e-learning website homepage for Edule, featuring a hero section, course categories, searchable course listings with ratings and prices, and a call-to-action for becoming an instructor.",

      image: courseLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      
    },
    {
      id: 2,
      title: "Customized Drone based Industrial Infrastructure Monitoring System.",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: droneLogo,
      tags: ["Embeded c", "AIML", "CNN Algorithm"],
     
    },
   
  ];
 export const education = [
    {
     id: 2,
      img: sppupuneLogo,
      school: "Jaywantrao sawant college of engineering pune",
      date: "August 2022 - June 2025",
      grade: "79%",
      desc: "I earned my Bachelor of Engineering degree in Electronics and Telecommunication from Jaywantrao Sawant College of Engineering, Pune. Throughout my academic journey, I consistently demonstrated dedication and a strong grasp of complex engineering concepts, which is reflected in my impressive CGPA of 9.15. This rigorous program equipped me with both theoretical knowledge and practical skills, preparing me to tackle challenges in the dynamic field of electronics and telecommunication.",
      degree: "Bachlors degree- Electronics and telecommunication",
    },
    {
      id: 1,
      img: diplomaLogo,
      school: "Government Polytechnic Nandurbar",
      date: "August 2019 - June 2022",
      grade: "82.86%",
      desc: "I successfully completed my Diploma in Computer Engineering from Government Polytechnic, Nandurbar, achieving a commendable percentage of 82.86%. This comprehensive program provided me with a strong foundation in computer engineering fundamentals, including hardware, software, and system design. Through a combination of theoretical coursework and hands-on projects, I developed critical technical skills and problem-solving abilities that have been instrumental in my engineering career.",
      degree: "Diploma - Computer Science",
    },
    {
     id: 0,
      img: statebordLogo,
      school: "Sheth v.k. shah vidya mandir shahada",
      date: "june 2018 - July 2019",
      grade: "81.60%",
      desc: "Completed Class X under the SSC Board from Sheth V.K. Shah Vidya Mandir, Shahada in 2019, achieving a commendable percentage of 81.60%. This foundational academic milestone provided a strong base in core subjects, fostering critical thinking and discipline.",
      degree: "X",
    },

  ];
  