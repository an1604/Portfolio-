// TODO: REPLACE GOKU WITH MY PROFILE PIC 
import user_image from './goku.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import docker from './docker.png'
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import github_dark from './github_dark.png'
// Import the Cursor icon PNGs
import cursor_light from './cursor_light.png';
import cursor_dark from './cursor_dark.png';

//TODO: MAKE MY PROFILE PIC CIRCULAR AND REPLACE profile_img
import profile_img from './profile-img.png';

import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import python from './python.png'
import linux from './linux.png'
import java from './java.png'
import ai_icon from './ml.png'
import cyber_icon from './cybersecurity.png'
import devops_icon from './devops.png'
import github from './github.png'
import deceptify from './deceptify.jpeg'
import joBot from './joBot.png'
import linkedin from './linkedin.png'
import ml_dark from './ml_dark.png'
import cyber_dark from './cyber_dark.png'

export const assets = {
    cursor_light,
    cursor_dark,
    github_dark,
    ml_dark,
    cyber_dark,
    linkedin,
    joBot,
    github,
    deceptify,
    cyber_icon,
    devops_icon,
    ai_icon,
    java,
    python,
    linux,
    docker,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Deceptify',
        description: 'Utilizing AI to orchestrate social engineering attacks, leveraging generative AI content such as deepfakes',
        bgImage: '/work-1.png',
        link: 'https://github.com/an1604/Deceptify'
        // bgImage: '/deceptify.jpeg',
    },
    {
        title: 'JoBot',
        description: 'Developed multi-agent system to manage the job hunting process and make it more manageable, using automations and scraping techniques.',
        bgImage: '/work-2.png',
        link: 'https://github.com/an1604/JoBot' // TODO: CERATE A REPO FOR THIS JoBot!!
        // bgImage: '/joBot.png',
    },
    {
        title: 'Portfolio',
        description: 'My portfolio website, built with Next.js and React, highlights my skills and projects in web development. With responsive design, dynamic animations, and seamless navigation, it demonstrates my expertise in creating scalable, interactive applications using modern frameworks.',
        bgImage: '/work-3.png',   
        link: 'https://github.com/an1604/Portfolio-'
    },
    {
        title: 'Devops-Project',
        description: 'Implements a React application on the client side and a Node.js server on the backend. The entire application is containerized using Docker and deployed using Git workflows on AWS EC2 instances.',
        bgImage: '/work-3.png',
        link: "https://github.com/an1604/Devops-Project"
    },
    {
        title: 'Market Oredering Assistant',
        description: 'Introducing a new social media platform with AI assistance for seamless market orders from leading companies.',
        bgImage: '/work-4.png',
        link: "https://github.com/an1604/market-oredering-assistant"
    },
    
]

export const serviceData = [
    {
        iconDark: assets.mobile_icon, 
        icon: assets.mobile_icon, title: 'Mobile app',
        description: 'Mobile app development involves creating software for mobile devices...',
        link: '/mobile'
    },
    {
        iconDark: assets.web_icon, 
        icon: assets.web_icon,
        title: 'Web Development',
        description: 'Building dynamic and responsive web applications using modern frameworks like React.js, Next.js, and Flask.',
        link: '/webdev'
    },
    {
        iconDark: assets.ml_dark, 
        icon: assets.ai_icon,
        title: 'AI & Machine Learning Solutions',
        description: 'Developing AI-driven models and machine learning solutions for innovative and data-driven applications.',
        link: '/aiml'
    },
    {
        iconDark: assets.cyber_dark, 
        icon: assets.cyber_icon,
        title: 'Cybersecurity Solutions',
        description: 'Implementing secure practices and solutions to enhance system security and prevent vulnerabilities.',
        link: '/cyber'
    },
    {
        iconDark: assets.devops_icon,
        icon: assets.devops_icon,
        title: 'DevSecOps & Automation',
        description: 'Streamlining development workflows with CI/CD pipelines, Docker, and infrastructure automation.',
        link: '/devops'
    }
];


export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Languages',
        description: 'Python, Java, C, C++, JavaScript, HTML, CSS, C#, Node.js, React.js, Next.js, VB'
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'B.Sc. in Computer Science (2022-2025)'
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Projects',
        description: 'Led and contributed to impactful projects in AI, cybersecurity, and web development, more than 5 projects. '
    }
];


export const toolsData = (isDarkMode) => [
    assets.vscode, assets.mongodb, assets.git, assets.docker, assets.python,
    assets.linux, assets.java, isDarkMode ? assets.cursor_dark : assets.cursor_light
];

export const webdevData = [
    {
        title: 'Web Eccomerce',
        description: 'An interactive e-commerce platform leveraging MongoDB Atlas, D3.js, and MVC design pattern, featuring secure user authentication, an admin panel for product and user management, and dynamic data visualization. Built with EJS, Node.js, and BingMaps API as part of a collaborative degree project.',
        link: 'https://github.com/OmerYaakov/webECom/blob/main/README.md'
    },
    {
        title: 'Portfolio',
        description: 'My portfolio website, built with Next.js and React, showcases my skills, projects, and services in web development. Featuring a responsive design, dynamic animations, and seamless navigation, the site highlights my expertise in creating scalable and interactive web applications while leveraging modern frameworks and tools.',
        link: 'https://github.com/an1604/Portfolio-'
    },
    {
        title: 'JoBot',
        description: 'A multi-agent system designed to streamline the job-hunting process by managing and organizing scraped data. The data is presented on an interactive website built with Flask, with MongoDB powering the backend for robust data storage. This system combines automation and a user-friendly interface to simplify job searching',
        link: 'https://github.com/an1604/Portfolio-' // TODO: CERATE A REPO FOR THIS JoBot!!
    },
    {
        title: 'Market Ordering Asistance',
        description: "Introducing a new social media platform with AI assistance for seamless market orders from leading companies, using Flask.",
        link: "https://github.com/an1604/market-oredering-assistant"
    }
]

export const cybersecData = [
    {
        title: 'OWASP WebGoat Top 10',
        description: 'Comprehensive solutions and explanations for the OWASP Top 10 security vulnerabilities as demonstrated in WebGoat, an intentionally insecure application designed for learning about application security. Each section includes proofs of our work and detailed approaches used in solving the tasks.',
        link: 'https://github.com/an1604/WebGoat-Solutions-'
    },
    {
        title: 'Anonymus Communication Protocol',
        description: 'This project implements an anonymous communication protocol that enhances privacy by routing messages between two independent hosts through an intermediary server. The server aggregates and randomizes message delivery, effectively obscuring the sender-recipient relationship.',
        link: 'https://github.com/an1604/Anonymus-Communication-Protocol'
    },
    {
        title: 'Deceptify',
        description: 'Utilizing AI to orchestrate social engineering attacks, leveraging generative AI content such as deepfakes. The primary objective is to enhance organizational awareness and readiness in response to evolving digital threats.',
        link: 'https://github.com/an1604/Deceptify'
    },
    {
        title: 'GitLeaksController',
        description: 'A Python-based wrapper for Gitleaks that provides an easy way to scan directories for sensitive information leaks. This tool supports running scans locally or within a Docker container and provides structured outputs for easy integration with other tools.',
        link: 'https://github.com/an1604/GitLeaksController'
    }
]
export const mobileData = [
    {
        title: 'Bkru (still in development)',
        description: 'A user-friendly application that delivers real-time alerts of various types to users within a specified radius, ensuring timely and relevant notifications for everyone using the app.',
        link: 'https://github.com/an1604/Bkru'
    }
]
export const aimlData = [
    {
        title: 'Automated Negotiation Agent Competition Participation (ANAC)',
        description: "For 2024's ANAC competition, our team developed a dynamic agent strategy focused on real-time learning and adaptive decision-making. By leveraging historical insights and nuanced behavior analysis, we crafted a negotiation framework designed to optimize concession strategies and excel in challenging scenarios.",
        link: 'https://github.com/an1604/ANAC'
    },
    {
        title: 'chest-Xray-autoencoder',
        description: "Pneumonia Detection using Autoencoder and KNN automates pneumonia diagnosis from chest X-ray images by combining autoencoders for feature extraction and KNN for classification. Achieving up to 76.34% accuracy, this project streamlines diagnostics and highlights AI's potential in healthcare.",
        link: 'https://github.com/an1604/chest-Xray-autoencoder'
    },
    {
        title: 'Market Ordering Asistance',
        description: "Market Ordering Assistance integrates an intention classification model, fine-tuned to accurately determine user intentions during the buying process. Built with Flask, this AI-powered platform streamlines market orders from leading companies, providing a seamless and efficient shopping experience.",
        link: "https://github.com/an1604/market-oredering-assistant"
    },
    {
        title: 'Car-loan Assistance',
        description: "A car loan assistance platform designed to streamline the process of securing car loans for users. This system aims to provide personalized recommendations and loan options tailored to the user's specific needs and financial situation. By simplifying the loan application process and offering targeted solutions, the platform ensures a seamless and user-friendly experience, making it easier for individuals to access the right car loan.",
        link: 'https://github.com/an1604/Car-loan-assistance'
    },
    {
        title: 'Deceptify',
        description: 'Utilizing AI to orchestrate social engineering attacks, leveraging generative AI content such as deepfakes. The primary objective is to enhance organizational awareness and readiness in response to evolving digital threats.',
        link: 'https://github.com/an1604/Deceptify'
    },
    {
        title: 'AI-auto-form-filler',
        description: "The Auto Form Filler Chrome Extension is a tool designed to automate the process of filling dynamic or HTML forms on websites. The project leverages AI and communicates with an LLM (Large Language Model) to ensure accurate data population, even for unknown fields. While the Chrome extension interface is available, the actual form-filling functionality is currently managed by the Flask server, with future plans to integrate this feature into the Chrome extension.",
        link: "https://github.com/an1604/AI-auto-form-filler"
    }
]

export const devopsData = [
    {
        title: 'Devops project',
        description: "This project implements a React application on the client side and a Node.js server on the backend. The entire application is containerized using Docker and deployed using Git workflows on AWS EC2 instances.",
        link: "https://github.com/an1604/Devops-Project"
    },
    {
        title: "DevSecOps CI/CD Pipeline with GitLab",
        description:"This project focuses on building a DevSecOps pipeline using GitLab, incorporating various security tools and methodologies to ensure comprehensive application security. The pipeline is designed to integrate OWASP WebGoat as the target application and leverage OWASP DefectDojo for vulnerability management and reporting.",
        link: "https://github.com/an1604/CI-CD-pipeline-gitlab"
    }
]

export const experienceData = [
    {
      title: "Software Engineer (Student Position)",
      company: "Jit security",
      location: "Tel Aviv",
      startDate: "February 2025",
      endDate: "April 2025",
      responsibilities: [
        "Developed security tools using agile methodology, ensuring iterative improvements and timely delivery.",
        "Built containerized security applications with Docker for consistent cross-environment deployment.",
        "Implemented CI/CD pipelines to deploy security tools to AWS ECR for scalable customer delivery.",
        "Created Python code with test-driven development for reliable security scanning tools.",
        "Integrated security scanning into customers' development workflows to improve security posture.",
        "Optimized containers for effective scaling based on customer demand and usage patterns."
      ],
      icon: assets.code_icon,
      iconDark: assets.code_icon_dark
    },
    {
      title: "Computer Programming Instructor",
      company: "Sunspark College",
      location: "",
      startDate: "January 2022",
      endDate: "September 2024",
      responsibilities: [
        "Designed and delivered a comprehensive curriculum on computer and network systems.",
        "Taught programming languages (VB, Python, Java) to high school students, focusing on real-world applications.",
        "Mentored 20-30 students per class, helping them develop independent coding projects and problem-solving skills."
      ],
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark
    },
    {
      title: "Intern",
      company: "Colman Dev Club Collaboration",
      location: "",
      startDate: "November 2022",
      endDate: "June 2023",
      responsibilities: [
        "Worked on JavaScript and React projects, contributing to front-end development and enhancing web applications.",
        "Participated in workshops, collaborating with peers to develop and deploy practical web solutions.",
        "Implemented dynamic features for projects, improving user experience and functionality."
      ],
      icon: assets.code_icon,
      iconDark: assets.code_icon_dark
    }
]