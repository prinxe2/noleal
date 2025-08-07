// import images
import Hero_person from "./assets/images/Hero/person.png";

import tailwind from "./assets/images/Skills/tailwind.png";
import unity from "./assets/images/Skills/unity.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import canva from "./assets/images/Skills/canva.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";

import person_project from "./assets/images/Services/person.png";
import project1 from "./assets/images/Services/img1.png";
import project2 from "./assets/images/Services/img2.png";
import project3 from "./assets/images/Services/img3.png";
import project4 from "./assets/images/Services/img4.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer / Game Developer",
    firstName: "Arjay",
    LastName: "Noleal",
    btnText: "Programmer",
    image: Hero_person,
    hero_content: [
      {
        text: "",
      },
      {
      
        text: "",
      },
       {
        count: "",
        text: "",
      },
    ],
  },
  skills: {
    title: "SKILLS",
    subtitle: "",
    skills_content: [
      
      {
        name: "Node js",
        para: "Build scalable and fast server-side applications",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: " Edit, retouch, and design high-quality visuals",
        logo: ps,
      },
      {
        name: "React js",
        para: "Create dynamic and responsive user interfaces",
        logo: reactjs,
      },
      {
        name: "Canva",
        para: "Design engaging content for social media and branding",
        logo: canva,
      },
      
    
       {
        name: "Unity",
        para: "Develop interactive 2D/3D games and simulations",
        logo: unity,
      },
       {
        name: "Tailwind CSS",
        para: "Style websites quickly with clean utility-first classes",
        logo: tailwind,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "SERVICES",
    subtitle: "",
    service_content: [
      {
        title: "Web Development",
        para: "I build responsive and modern websites that work seamlessly across all devices — turning ideas into fast, functional, and user-friendly experiences.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "I design clean, intuitive interfaces focused on user experience — ensuring every interaction feels natural, engaging, and purposeful.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "I enhance, retouch, and transform images with precision — creating polished visuals that tell your story with impact and clarity.",
        logo: services_logo3,
      },
       {
        title: "Game Development",
        para: "I create immersive and interactive game experiences — blending storytelling, mechanics, and visuals to bring your concepts to life.",
        logo: services_logo4,
      },
    ],
  },
  Projects: {
    title: "PROJECTS",
    subtitle: "",
    image: person_project,
    project_content: [
      {
        title: "Portfolio",
        image: project1,
      },
      {
        title: "Goverment Website",
        image: project2,
      },
      {
        title: "Infographics",
        image: project3,
      },
      {
        title: "Game Development",
        image: project4,
      },
    ],
  },
  Testimonials: {
    title: "EDUCATION & EXPERIENCE",
    subtitle: "",
    testimonials_content: [
      {
        review:
          "Graduate with a bachelors degree of Bachelors of Science in Entertainment in Multimedia Computing Graduate | 2021 – 2025",
        img: avatar1,
        name: "CITY COLLEGE OF SAN JOSE DEL MONTE",
      },
      {
        review:
          "Completed Junior and Senior High School under the General Academic Strand (GAS).",
        img: avatar3,
        name: "KAKAWATE NATIONAL HIGH SCHOOL",
      },
      {
        review:
          "Assisted in front-end and back-end website development, and created video graphics and infographics for public materials.",
        img: avatar2,
        name: "CITY SOCIAL WELFARE DEVELOPMENT OFFICE",
      },
      
    ],
  },
  Hireme: {
    title: "HIRE ME.",
    subtitle: "",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Need a designer who can do both code and visuals? I blend creativity and functionality to deliver websites, infographics, and video content that make an impact.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "GET IN TOUCH",
    subtitle: "",
    social_media: [
      {
        text: "bsemc.nolealarjaym@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "0955-742-4066",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Noleal Arjay M",
        icon: BsFacebook,
        link: "https://www.facebook.com/Prince.Frays.031002/",
      },
    ],
  },
  Footer: {
    text: "",
  },
};
