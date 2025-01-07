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
        bgImage: '/deceptify.jpeg',
    },
    {
        title: 'JoBot',
        description: 'Developed multi-agent system to manage the job hunting process and make it more manageable, using automations and scraping techniques.',
        bgImage: '/joBot.png',
    },
    {
        title: 'Devops-Project',
        description: 'Implements a React application on the client side and a Node.js server on the backend. The entire application is containerized using Docker and deployed using Git workflows on AWS EC2 instances.',
        bgImage: '/work-3.png',
    },
    {
        title: 'Market Oredering Assistant',
        description: 'Introducing a new social media platform with AI assistance for seamless market orders from leading companies.',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    {
        iconDark: assets.mobile_icon, 
        icon: assets.mobile_icon, title: 'Mobile app',
        description: 'Mobile app development involves creating software for mobile devices...',
        link: ''
    },
    {
        iconDark: assets.web_icon, 
        icon: assets.web_icon,
        title: 'Web Development',
        description: 'Building dynamic and responsive web applications using modern frameworks like React.js, Next.js, and Flask.',
        link: ''
    },
    {
        iconDark: assets.ml_dark, 
        icon: assets.ai_icon,
        title: 'AI & Machine Learning Solutions',
        description: 'Developing AI-driven models and machine learning solutions for innovative and data-driven applications.',
        link: ''
    },
    {
        iconDark: assets.cyber_dark, 
        icon: assets.cyber_icon,
        title: 'Cybersecurity Solutions',
        description: 'Implementing secure practices and solutions to enhance system security and prevent vulnerabilities.',
        link: ''
    },
    {
        iconDark: assets.devops_icon,
        icon: assets.devops_icon,
        title: 'DevSecOps & Automation',
        description: 'Streamlining development workflows with CI/CD pipelines, Docker, and infrastructure automation.',
        link: ''
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


export const toolsData = [
    assets.vscode, assets.mongodb, assets.git, assets.docker, assets.python,
    assets.linux, assets.java
];