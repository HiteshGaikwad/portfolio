'use client'
import '../style.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import foodhubImage from '../assets/images/foodhub-image.png'
import youtubeImage from "../assets/images/youtube-image.png"
import profilePic from '../assets/images/profilePic.jpg'
import htmlIcon from '../assets/images/skills-icon/html-icon.svg'
import cssIcon from '../assets/images/skills-icon/css-icon.svg'
import javascriptIcon from '../assets/images/skills-icon/javascript-icon.svg'
import bootstrapIcon from '../assets/images/skills-icon/bootstrap-5-icon.svg'
import expressIcon from '../assets/images/skills-icon/express-js-icon.svg'
import githubIcon from '../assets/images/skills-icon/github-icon.svg'
import javaIcon from '../assets/images/skills-icon/java-icon.svg'
import materialUIIcon from '../assets/images/skills-icon/material-ui-icon.svg'
import mongodbIcon from '../assets/images/skills-icon/mongodb-icon.svg'
import mysqlIcon from '../assets/images/skills-icon/mysql-icon.svg'
import nextjsIcon from '../assets/images/skills-icon/next-js-icon.svg'
import nodejsIcon from '../assets/images/skills-icon/nodejs-icon.svg'
import reactjsIcon from '../assets/images/skills-icon/react-icon.svg'
import springbootIcon from '../assets/images/skills-icon/spring-icon.svg'
import tailwindIcon from '../assets/images/skills-icon/tailwind-css-icon.svg'
import { ReactTyped } from 'react-typed';
import { useSelector } from 'react-redux';
import Link from 'next/link';


export default function home(){

  const themeswitch= useSelector((store)=>store.themeSwitcher);

  return(
    <div className={" w-full h-full flex flex-col gap-2 justify-center items-center "+(themeswitch?'bg-white':'bg-gray-800 text-white')}>
      <section className='flex justify-around  w-full items-center gap-2'>
      <Image
      src={profilePic}
      width={150}
      height={150}
      alt="Picture of the author"
      className='rounded-full p-[5px] bg-gradient-to-b from-red-600 from-5% via-yellow-400 via-40% to-blue-600 to-90%'
    />
    <div className='flex flex-col gap-3'>
    <h1 className='text-3xl font-semibold lg:w-80'>
      H
      <ReactTyped strings={ ["itesh Gaikwad"] } typeSpeed={100} loop />
    </h1>
        <h2 className='font-semibold text-xl'>Software Engineer</h2></div>
        
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-2'>
          <h3 className='font-semibold hover:text-blue-700 cursor-pointer' title='Email'><EmailIcon/> gaikwadhitesh03@gmail.com</h3>
          <h3 className='font-semibold hover:text-blue-700 cursor-pointer' title='Mobile'><PhoneIcon/>+91 9673381576</h3>
          </div>
          <div className='flex gap-3 mt-1'>
          <a href='https://github.com/HiteshGaikwad' title='Github' target='_blank' className='bg-blue-600 hover:bg-blue-500 hover:scale-110 transition ease-linear p-2 rounded-full'><GitHubIcon style={{fontSize :'20px',color:'white'}}/></a>
          <a href='https://www.linkedin.com/in/hitesh-gaikwad' title='Linkedin' target='_blank' className='bg-blue-600 hover:bg-blue-500 hover:scale-110 transition ease-linear p-2 rounded-full'><LinkedInIcon style={{fontSize :'20px',color:'white'}}/></a>
          <a href='https://www.instagram.com/_hitesh.3' title='Instagram' target='_blank' className='bg-blue-600 hover:bg-blue-500 hover:scale-110 transition ease-linear p-2 rounded-full'><InstagramIcon style={{fontSize :'20px',color:'white'}}/></a>
        </div>
        </div>
      </section>
      <section className='flex flex-col w-[85%]'>
        <h1 className={'font-bold text-4xl border-b-2 pb-2 '+ (themeswitch?'border-black':"border-gray-500 text-3xl")}>Projects</h1>
        <div className='flex  gap-10 mt-2'>
        <Link href={'https://you-tube-hiteshgaikwad.vercel.app'} target='_blank'><div className={ 'shadow  p-5 rounded-xl hover:opacity-70 cursor-pointer hover:scale-105 transition 1s ease-linear '+ (themeswitch?'shadow-2xl':"shadow-md shadow-white")} title='click here'>
        <Image
      src={youtubeImage}
      width={200}
      height={200}
      alt="Project screenshot"
      className=' h-56 w-96'
    />
    <h2 className='font-bold text-xl mt-2'>YouTube Clone</h2>
        </div></Link>
        <Link href={'https://food-hub-hiteshgaikwad.vercel.app'} target='_blank'><div className={ 'shadow  p-5 rounded-xl hover:opacity-70 cursor-pointer hover:scale-105 transition 1s ease-linear '+ (themeswitch?'shadow-2xl':"shadow-md shadow-white")} title='click here'>
        <Image
      src={foodhubImage}
      alt="Project screenshot"
      className=' h-56 w-96 '
    />
    <h2 className='font-bold text-xl mt-2'>FoodHub application</h2>
        </div></Link>
        <div className={ 'shadow  p-5 rounded-xl hover:opacity-70 cursor-pointer hover:scale-105 transition 1s ease-linear '+ (themeswitch?'shadow-2xl':"shadow-md shadow-white")} title='click here'>
        <Image
      src={foodhubImage}
      width={200}
      height={200}
      alt="Project screenshot"
      className=' h-56 w-96'
    />
    <h2 className='font-bold text-xl mt-2'>Project Title</h2>
        </div>
        </div>
      </section>
      <section className='flex flex-col w-[85%]'>
        <h1 className={'font-bold text-4xl border-b-2 py-2 '+ (themeswitch?'border-black':"border-gray-500 text-3xl")}>Skills</h1>
        <div className='flex  gap-10  flex-wrap justify-center pt-5 -'>
          <Image src={htmlIcon} alt='html icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='HTML'/>
          <Image src={cssIcon} alt='css icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='CSS'/>
          <Image src={javascriptIcon} alt='javascript icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='Javascript'/>
          <Image src={reactjsIcon} alt='react js icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='React js'/>
          <Image src={nodejsIcon} alt='node js icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='Node js'/>
          <Image src={expressIcon} alt='express js icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='Express js'/>
          <Image src={mongodbIcon} alt='mongo db icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='MongoDB'/>
          <Image src={nextjsIcon} alt='next js icon' className={ 'w-20 h-20 rounded-full bg-transparent '+ (themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='Next js'/>
          <Image src={tailwindIcon} alt='tailwind icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='Tailwind css'/>
          <Image src={githubIcon} alt='github icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='GitHub'/>
          <Image src={javaIcon} alt='java icon' className={ 'w-20 h-20 '+ (themeswitch?'bg-none shadow-lg shadow-gray-500 rounded-full':'rounded-full shadow-lg shadow-white')} title='Java'/>
          <Image src={materialUIIcon} alt='material UI icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='Material UI'/>
          <Image src={mysqlIcon} alt='mysql icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='MySql'/>
          <Image src={bootstrapIcon} alt='bootstrap icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='Bootstrap'/>
          <Image src={springbootIcon} alt='spring boot icon' className={'w-20 h-20 rounded-full '+(themeswitch?'shadow-lg shadow-gray-500':'shadow-md shadow-white')} title='Spring Boot'/>
        </div>
      </section>
    </div>
  )
} 
