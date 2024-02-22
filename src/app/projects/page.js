'use client'
import SortIcon from '@mui/icons-material/Sort';
import { useState } from 'react';
import { useSelector } from "react-redux";
import {frontendList,fullstackList,backendList} from '../../assets/config/constants'
import Image from 'next/image';
import githubIcon from '../../assets/images/github-icon.png';
import Link from 'next/link';

const Projects=()=>{
    const themeSwitch= useSelector((store)=>store.themeSwitcher);
    const [selectedCategery, setSelectedCategory]= useState('fullstack');

    // console.log(frontendList);

    return(
        <div className={" w-full h-full pt-5 px-40 flex flex-col gap-16 "+(themeSwitch?'bg-white':'bg-gray-800 text-white')}>
            
            <h1 className="font-bold text-4xl">Projects <SortIcon style={{fontSize:'40px', marginLeft:'8px', fontWeight:'bold'}} className='text-blue-500'/></h1>
            <div className='flex gap-10'>
                <span className={'font-semibold text-xl '+(selectedCategery==='fullstack'?' border-b-2 border-blue-500 pb-3 text-blue-400 ':'')} onClick={()=>setSelectedCategory('fullstack')}>Fullstack Development</span>
                <span className={'font-semibold text-xl '+(selectedCategery==='frontend'?' border-b-2 border-blue-500 pb-3 text-blue-400 ':'')} onClick={()=>setSelectedCategory('frontend')}>Frontend Development</span>
                <span className={'font-semibold text-xl '+(selectedCategery==='backend'?' border-b-2 border-blue-500 pb-3 text-blue-400':'')} onClick={()=>setSelectedCategory('backend')}>Backend Development</span>
            </div>

            {
                selectedCategery==='fullstack' && 
                <div>
                    <div className='flex flex-wrap  w-[100%] p-2 gap-5'>
                    {
                        // console.log(frontendList);
                        fullstackList.map((project,index)=>{
                            return(
                            <Link key={index} href={project.LiveLink} target='_blank'>
                            <div className={ 'flex flex-col gap-2 shadow p-5 rounded-xl hover:opacity-70 cursor-pointer hover:scale-105 transition 1s ease-linear '+ (themeSwitch?'shadow-2xl':"shadow-md shadow-white")}>
                                <Image src={project.image} alt={project.projectTitle +"image"} width='380' height={300} className='h-60 rounded-lg'/>
                                <h2 className='text-2xl font-semibold'>{project.projectTitle}</h2>
                                <h3>{project.techStack}</h3>
                            </div>
                            </Link>
                            )
                        })
                    }
                </div>
                </div>
            }
            {
                selectedCategery==='frontend' && 
                <div className='overflow-auto'>
                <div className='flex flex-wrap justify-center w-[100%] p-2 gap-5'>
                    {
                        frontendList.map((project,index)=>{
                            return(
                                <Link key={index} href={project.LiveLink} target='_blank'>
                            <div className={ 'flex flex-col gap-2 shadow p-5 rounded-xl hover:opacity-70 cursor-pointer hover:scale-105 transition 1s ease-linear '+ (themeSwitch?'shadow-2xl':"shadow-md shadow-white")}>
                                <Image src={project.image} alt={project.projectTitle +"image"} width='350' height={300} className='h-60 rounded-lg'/>
                                <h2 className='text-2xl font-semibold'>{project.projectTitle}</h2>
                                <h3>{project.techStack}</h3>
                            </div>
                            </Link>
                            )
                        })
                    }
                </div>
                </div>
            }
            {
                selectedCategery==='backend' && 
                <div>
                    <div className='flex flex-wrap w-[100%] p-2 gap-5'>
                    {
                        // console.log(frontendList);
                        backendList.map((project,index)=>{
                            return(
                            <Link key={index} href={project.sourceCodeLink} target='_blank'><div  className={ 'flex flex-col gap-2 shadow  p-5 rounded-xl hover:opacity-70 cursor-pointer hover:scale-105 transition 1s ease-linear '+ (themeSwitch?'shadow-2xl':"shadow-md shadow-white")}>
                                <Image src={githubIcon} alt={project.projectTitle +"image"} width='350' height={300} className= {'h-52 rounded-lg '+ (themeSwitch?'shadow-md shadow-gray-500':'bg-white')}/>
                                <h2 className='text-xl font-semibold'>{project.projectTitle}</h2>
                                <h3>{project.techStack}</h3>
                            </div>
                            </Link>
                            )
                        })
                    }
                </div>
                </div>
            }
            <div>

            </div>
            
        </div>
    )
}

export default Projects;