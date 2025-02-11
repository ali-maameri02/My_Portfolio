import { motion } from 'framer-motion';

import { useEffect, useState } from 'react'; // Import useState
import { TechStackItem } from './TechStackItem';
import { ProjectCard } from './ProjectCard';
import { SocialLink } from './SocialLink';
import { RiMenuLine, RiCloseLine , RiMailLine, RiSunLine, RiMoonLine} from '@remixicon/react'; // Import menu and close icons
import '../App.css';
import mypic from '../assets/photo_2025-02-11_00-40-45.png';
import Docker from '../assets/icons8-docker.svg';
import figma from '../assets/figma.svg';
import tailwindcss from '../assets/tailwindcss.svg';
import bootstrap from '../assets/bootstrap.svg';
import linkedin from '../assets/linkedin.svg';
import Django from '../assets/django.svg';
import Mysummary from '../assets/My summary as fullstack devloper.pdf'
import RESTAPI from '../assets/rest-api.svg';

import Flask from '../assets/flask.svg';

import CPlusPlus from '../assets/cplusplus.svg';

import Java from '../assets/java.svg';

import GitHub from '../assets/github.svg';

import Axios from '../assets/axios.svg';

import Python from '../assets/python.svg';
import { Fade, Slide} from 'react-awesome-reveal';

const name = "Maamri Ali";
// const letterAnimation = {
//   hidden: { opacity: 0, y: 10 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1 }, // Delay each letter
    
//   }),
// };
const techStackData = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/51303bd52423a37b297ae99fdaa9a87b6a28671392d2e2b82a4b0376d4d1ec2c?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418", name: "HTML" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9f795ddde581ed2014053088a7d11d58cec3bc01d379e9a48a9cf2d31cbd1a8?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418", name: "CSS" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d55f20cb5a2809190a57c737c5af9ff96dbbf2aedb132730936a496392faaee?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418", name: "JavaScript" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5064f5d8902dc79ca5a4b494026a21d49ff608537d1f05656cd7350e69fc41ef?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418", name: "TypeScript" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d040ef7e369973749366a02223681dc668f31d354107780be477507c8aff99d4?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418", name: "React" },
  { icon: Docker, name: "Docker" },
  { icon: figma, name: "Figma" },
  { icon: tailwindcss, name: "TailwindCss" },
  { icon: bootstrap, name: "Bootstrap5" },
  { icon: Django, name: "Django" },

{ icon: RESTAPI, name: "REST API" },

{ icon: Flask, name: "Flask" },

{ icon: CPlusPlus, name: "C++" },

{ icon: Java, name: "Java" },

{ icon: GitHub, name: "GitHub" },

{ icon: Axios, name: "Axios" },

{ icon: Python, name: "Python" }
];

const projectsData = [
  { number: "01", website: "https://github.com/ali-maameri02/Msidyia_Project", projectName: "Msidiya" },
  { number: "02", website: "http://propelo.cam/", projectName: "Propelo_front", isDark: true },
  { number: "01", website: "https://islam-zad.onrender.com/", projectName: "islam_zad" },
  { number: "02", website: "https://github.com/ali-maameri02/Healthtech", projectName: "Healthtech", isDark: true }
];

const socialLinks = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8182056a87195cc821c2c650cd4d487f8f3b856aa9b0841d776868f962b68b9?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418", href: "#", ariaLabel: "Social media link 1" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ac2da5b88f5005bb5c040995b7cffc99876b049939b4bae7e0469d21cda5a3f?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418", href: "#", ariaLabel: "Social media link 2" }
];

export function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
 
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  async function downloadFile(url: string, filename: string) {
    const response = await fetch(url);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
  const handleDownload = () => {
    downloadFile(Mysummary, 'Ali_Maamri_cv.pdf');
  };

  return (
    <div className="flex items-center flex-col bg-white overflow-hidden">
      {/* Navbar */}
      <Slide direction="down" className='z-[60]  top-0 w-full h-full max-sm:top-[-5px]'>
      <nav className="flex gap-3 z-[70] w-full   items-center px-4 py-2 font-bold bg-white fixed top-0 md:px-36" style={{boxShadow:'0px 0px 5px 1px rgba(0, 0, 0, 0.5)'}}>
        <div className="flex w-full items-center flex-col self-stretch pb-1 my-auto text-3xl text-slate-700">
          <div className="flex items-center pb-1 w-full max-w-full">
            <div className="flex items-center w-full">
              <div className=" items-center w-full dark:text-white">
                Ali
                Maamri.
              </div>
            </div>
          </div>
        </div>
        <button onClick={toggleDarkMode} className="ml-auto mr-4 p-2">
          {darkMode ? (
            <RiSunLine className="w-6 h-6 text-yellow-400" />
          ) : (
            <RiMoonLine className="w-6 h-6 text-gray-700" />
          )}
        </button>
        {/* Menu Icon (Visible on Small Screens) */}
        <div className="md:hidden ml-auto cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <RiCloseLine className="w-8 h-8 text-slate-700 dark:text-white"  /> // Close icon
          ) : (
            <RiMenuLine className="w-8 h-8 text-slate-700 dark:text-white" /> // Menu icon
          )}
        </div>
     
        {/* Navigation Items (Visible on Larger Screens or When Menu is Open) */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:gap-8 absolute md:static top-16 left-0 w-full bg-white md:bg-transparent p-4 md:p-0`}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a href="#work" className="flex flex-col w-[76px]">
              <div className="gap-8 w-[76px] dark:text-white">Work</div>
            </a>
            <a href="#contact" className="flex flex-col w-[76px] dark:text-white">
              <div className="gap-8 w-[76px]">Contact</div>
            </a>
          </div>
          <div className="flex flex-row   my-auto  text-slate-700 text-opacity-60 w-full dark:text-white">
            <a href="mailto:ali.maameri@univ-constantine2.dz" className='w-full'>ali.maameri@univ-constantine2.dz</a>
          </div>
        </div>
      </nav>
      </Slide>
      {/* Main Content */}
      <main className="flex flex-col items-center pt-20 pb-10 px-4 w-full md:pl-9">
        <div className="absolute top-16 left-0 max-sm-[300px]:-z-10 ">
          
        <Fade damping={0.8}>  <div className="mt-6 text-2xl text-zinc-400 dark:text-[#5EEAD4]">&lt;html&gt;</div></Fade>
        <Fade damping={1}><div className="mt-1.5 ml-8 text-2xl text-zinc-400 dark:text-[#5EEAD4]">&lt;body&gt;</div></Fade>
        <Fade damping={1.2}><div className="mt-52 ml-6 text-2xl text-zinc-400 dark:text-[#5EEAD4]">&lt;h1&gt;</div></Fade>
        <Fade damping={1.6}> <div className="mt-6 text-2xl text-zinc-400 dark:text-[#5EEAD4]">&lt;div&gt;</div></Fade>
        <Fade damping={1.8}> <div className="mt-1.5 ml-8 text-2xl text-zinc-400 dark:text-[#5EEAD4]">&lt;body&gt;</div></Fade>
        <Fade damping={2}> <div className="mt-52 ml-6 text-2xl text-zinc-400 dark:text-[#5EEAD4]">&lt;h1&gt;</div></Fade>
        </div>

        <section className="flex flex-col self-stretch w-full min-h-[627px] md:p-24 max-sm-[300px]:mt-32">
          <div className="flex gap-10 justify-between items-center w-full text-lg leading-tight p-1 pt-0 py-0 max-sm-[300px]:w-[1/2] max-sm-[300px]:gap-5 ">
        
          <svg width="500" height="610" viewBox="0 0 291 302" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute right-[35%] top-[-5rem] z-0'>
<rect x="65.0281" y="327.419" width="123.425" height="367.4" rx="61.7126" transform="rotate(-136.837 65.0281 327.419)" fill="#5EEAD4"/>
</svg>
  {/* Profile Image */}
  <img
    loading="lazy"
    src={mypic}
    alt="Profile"
    style={{boxShadow:'0px 0px 5px 1px rgba(0, 0, 0, 0.5)'}}
    className="relative z-10 rounded-full drop-shadow-xl bg-[#ffffffa] p-6  shadow-slate-600 m-0 mt-[] ml-16 p-0-full h-[40%] w-[40%] max-sm:w-[250px] max-sm:h-[150px] max-sm:p-2 max-sm:m-0"
  />



            <div className="flex gap-2 z-[60] flex-row h-full items-end max-[800px]:w-full max-sm-[300px]:flex-col max-sm-[300px]:items-baseline  ">
              <div className="flex flex-row gap-2 justify-center items-end px-3.5 py-2 border border-solid border-slate-700 rounded-[33px] text-slate-700 w-[271px] max-lg-[200px]:w-36 ">
                <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-teal-300 rounded-2xl shadow-sm" />
                <div className="w-full flex flex-row max-sm-[300px]:text-xs max-lg-[200px]:text-[13px] max-lg-[200px]:w-36 max-lg-[200px]:flex-nowrap max-lg-[200px]:justify-around dark:text-white">
                  Open to new opportunities
                </div>
              </div>
              <button className="gap-2 m-0 self-stretch px-8 py-2 font-semibold whitespace-nowrap bg-teal-300 rounded-[36px] text-stone-50 w-[169px] max-lg-[200px]:text-[13px] max-lg-[200px]:w-36">
              <a href="https://mostaql.com/u/ali_maameri" className='z-30'>

              Testimonials
              </a>

              </button>
            </div>
          </div>

          <div className="flex flex-col mt-20 w-full">
            <div className="flex flex-col w-full">
              <h1 className="text-4xl font-bold tracking-tighter text-slate-700 md:text-6xl">
                Hello! I'm <span className="text-[#5EEAD4] ">
                {name.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.3, // Stagger effect
            duration: 10, // Speed of each letter animation
            repeat: Infinity, // Infinite animation
            repeatType: "reverse", // Smooth back-and-forth effect
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span> ,
                <br />
                a Full Stack developer — Junior.
              </h1>
              <div className="flex overflow-hidden flex-wrap gap-4 items-end py-3 mt-4 w-full text-base leading-loose whitespace-nowrap text-slate-700">
              <Fade cascade damping={0.1} direction='up'>
                {techStackData.map((tech, index) => (
                 
                  <TechStackItem key={index} {...tech} />
                ))}
                </Fade>
              </div>
            </div>
            <div className="flex flex-row justify-end px-3 max-sm-[300px]:flex-col">
              <div className="flex gap-2 justify-end items-center self-stretch p-2 my-auto min-w-[240px] max-sm-[300px]:flex-col">
                <a href="https://www.linkedin.com/in/ali-maameri-25b5a4263/" className="flex gap-2 dark:text-white justify-center items-center self-stretch p-2 my-auto min-w-[240px]">
                  <img
                    loading="lazy"
                    src={linkedin}
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[29px] dark:text-white"
                  />
                  My Linkedin
                </a>
                <a href="https://github.com/ali-maameri02" className="flex flex-nowrap w-full gap-2 justify-center items-center self-stretch p-2 my-auto min-w-[240px] max-lg-[300px]:text-sm">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c14f8698e7a61e1cdf6c073256027c361746de1a96ba467d90ae63b8c5c8674?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[29px]"
                  />
                  <span className='dark:text-white'>See My Updates On Github</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-row items-start justify-start w-full p-4 md:p-10 max-[800px]:w-full max-lg-[200px]:flex-col ">
          <section className="cv-first w-full p-4 h-full flex flex-col items-start max-[850px]:w-full max-[850px]:flex-col">
            <div className="w-full flex flex-col gap-8">
              <div className="topCV flex flex-col gap-4 max-lg-[300px]:flex-row dark:text-white">
                <h1 className="text-4xl font-bold max-lg-[300px]:text-3xl max-sm-[300px]:text-sm">
                  My Resume & Projects
                </h1>
                <button className="w-full dark:bg-[#5EEAD4] bg-black text-white dark:text-black px-4 py-2 border-none rounded-full max-lg-[300px]:p-0 max-sm-[300px]:px-2 max-sm-[300px]:text-sm" onClick={handleDownload}>
                  download my cv
                </button>
              </div>
              <div className="p-5 bg-slate-200 rounded-xl w-full h-[618px] max-lg-[200px]:h-full">
                <h3 className="font-bold text-xl">Description</h3>
                <p>
                I'm Ali Mamari, a Full Stack developer and software engineer in the field of 
                web and software development. I have mastered many technologies and tools to ensure 
                the highest level of quality and performance in my projects. 

In front-end development, I have expertise in HTML, CSS, and JavaScript, Type script , React , Tailwindcss and have 
a strong knowledge of Bootstrap and React.js / React.Ts. This allows me to design and develop exceptionally 
engaging and responsive user interfaces.

On the back-end of applications, I consider myself proficient in using the Django Rest Api and Flask frameworks
 and the Python , c++  programming language, and have extensive experience with databases such as MySQL and SQLite3, PostgresSql.
  I also have experience with Java and Maven.

I have the ability to design and plan software projects before development begins, 
which contributes to better and more efficiently achieving the client's goals. 
In addition, I can integrate artificial intelligence techniques into all web projects to enhance performance and add value.

Thanks to my extensive skills and experience,
 I can develop complete websites in various fields such as e-commerce stores, Management Systems
  online learning platforms, and many other applications. I have the ability to communicate professionally with clients
   and ensure they are fully satisfied with the work I deliver.

I am here to help you achieve your goals and execute your projects in the best possible way. 
Feel free to contact me if you need my services or more information.


Translated with DeepL.com (free version)                </p>
              </div>
            </div>
            <a
              className="border-spacing-1 dark:text-white border-solid rounded-2xl w-full border-gray-600 flex flex-row justify-evenly px-5 mt-5 items-center"
              style={{ border: '1px solid darkgray' }}
              href="https://github.com"
            >
              <a className="flex gap-2 justify-center border-solid border-spacing-1 items-center p-2 my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c14f8698e7a61e1cdf6c073256027c361746de1a96ba467d90ae63b8c5c8674?placeholderIfAbsent=true&apiKey=c1fb100e7549410c9892db98e44f1418"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[29px]"
                />
              </a>
              <span>See My Updates On Github</span>
            </a>
          </section>
          <section className="flex flex-col w-full gap-8 justify-center items-end  md:mt-10 max-[850px]:w-full">
            <div className="flex row justify-start gap-5 max-sm-[300px]:m-0 ">
              {socialLinks.map((link, index) => (
                <SocialLink   key={index} {...link} />
              ))}
            </div>
            <div className="flex w-full flex-row flex-wrap items-end gap-5 mt-10 max-sm-[300px]:mt-3 " id='work'>
              {projectsData.map((project, index) => (
                
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </div>

        <footer className="flex flex-col px-4 pt-32 pb-9 mt-12 w-full bg-white min-h-[568px] md:px-36 dark:text-white" id='contact'>
          <div className="flex flex-row justify-around items-center w-full max-lg-[300px]:flex-col max-lg-[300px]:justify-around max-lg-[300px]:gap-10">
          <div className="flex flex-col pt-9  border-t-2 border-slate-700  " >
            <div className="flex flex-wrap gap-10 w-full justify-between items-end">
              <div className="flex flex-col justify-between uppercase min-h-[338px] min-w-[240px] text-slate-700 w-full md:w-[487px] dark:text-white">
                <div>
                  <h2 className="text-3xl leading-[59px] md:text-5xl">
                    LET'S TALK ABOUT THE
                    <br />
                    NEXT BIG THING.
                  </h2>
                  <a href="mailto:ali.maameri@univ-constantine2.dz" className="inline-block mt-7 text-base font-bold tracking-wider">
                    HIRE ME
                  </a>
                </div>
                <div className="mt-auto">
                  <div className="text-4xl tracking-wider leading-none whitespace-nowrap md:text-8xl">
                    ©2024
                  </div>
                  <div className="mt-1 text-xs font-medium">All rights reserved</div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-lg-[300px]:border-black max-lg-[300px]:border-[1px] w-full lg:border-r-2 lg:border-slate-400"></div>
          <div className="social_container  w-full">
          <div className="relative w-full h-64 flex items-center justify-center">
      {/* Grid Layout */}
      <div className="absolute inset-0 flex flex-wrap">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-700" />
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-700" />
      </div>

      {/* Icons */}
      <div className="absolute top-12  right-8">
        <a href="mailto:ali.maameri@univ-constantine2.dz">
        <RiMailLine size={40}/>
        </a>
      </div>
      <div className="absolute z-[80] bottom-8 left-8 flex items-center">
        <a href="https://www.linkedin.com/in/ali-maameri-25b5a4263/">
<img src={linkedin} alt="" />   </a>   </div>
    </div>
          </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Portfolio;