'use client'
import SortIcon from '@mui/icons-material/Sort';
import { useState } from 'react';
import { useSelector } from "react-redux";
import {frontendList} from '../../assets/config/constants'
import Image from 'next/image';

const Projects=()=>{
    const themeSwitch= useSelector((store)=>store.themeSwitcher);
    const [selectedCategery, setSelectedCategory]= useState('fullstack');

    // console.log(frontendList);

    return(
        <div className={" w-full h-full pt-5 px-40 flex flex-col gap-16 "+(themeSwitch?'bg-white':'bg-gray-800 text-white')}>
            <h1>Project <SortIcon/></h1>
            <div className='flex gap-10'>
                <span className={'font-semibold text-xl '+(selectedCategery==='fullstack'?' border-b-2 border-blue-500 pb-3 text-blue-400 ':'')} onClick={()=>setSelectedCategory('fullstack')}>Fullstack Development</span>
                <span className={'font-semibold text-xl '+(selectedCategery==='frontend'?' border-b-2 border-blue-500 pb-3 text-blue-400 ':'')} onClick={()=>setSelectedCategory('frontend')}>Frontend Development</span>
                <span className={'font-semibold text-xl '+(selectedCategery==='backend'?' border-b-2 border-blue-500 pb-3 text-blue-400':'')} onClick={()=>setSelectedCategory('backend')}>Backend Development</span>
            </div>

            {
                selectedCategery==='fullstack' && 
                <div>
                    
                </div>
            }
            {
                selectedCategery==='frontend' && 
                <div>
                    {
                        // console.log(frontendList);
                        frontendList.map((project,index)=>{
                            return(
                            <div key={index}>
                                <Image src={project.image} alt={project.projectTitle +"image"} width='100' height='100'/>
                                <h2>{project.projectTitle}</h2>
                                <h3>{project.techStack}</h3>
                            </div>
                            )
                        })
                    }
                </div>
            }
            {
                selectedCategery==='backend' && 
                <div>
                    backend
                </div>
            }
            <div>

            </div>
        </div>
    )
}

export default Projects;