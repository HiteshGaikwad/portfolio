'use client'

import { useSelector } from "react-redux";
import SortIcon from '@mui/icons-material/Sort';
import Image from "next/image";
import '../../animation.css'
import htmlIcon from '../../assets/images/skills-icon/html-icon.svg'
import cssIcon from '../../assets/images/skills-icon/css-icon.svg'
import javascriptIcon from '../../assets/images/skills-icon/javascript-icon.svg'
import bootstrapIcon from '../../assets/images/skills-icon/bootstrap-5-icon.svg'
import expressIcon from '../../assets/images/skills-icon/express-js-icon.svg'
import githubIcon from '../../assets/images/skills-icon/github-icon.svg'
import javaIcon from '../../assets/images/skills-icon/java-icon.svg'
import materialUIIcon from '../../assets/images/skills-icon/material-ui-icon.svg'
import mongodbIcon from '../../assets/images/skills-icon/mongodb-icon.svg'
import mysqlIcon from '../../assets/images/skills-icon/mysql-icon.svg'
import nextjsIcon from '../../assets/images/skills-icon/next-js-icon.svg'
import nodejsIcon from '../../assets/images/skills-icon/nodejs-icon.svg'
import reactjsIcon from '../../assets/images/skills-icon/react-icon.svg'
import springbootIcon from '../../assets/images/skills-icon/spring-icon.svg'
import tailwindIcon from '../../assets/images/skills-icon/tailwind-css-icon.svg'


const Skills=()=>{

    const themeSwitch= useSelector((store)=>store.themeSwitcher);
 

    return(
        <main className={" w-full h-full pt-5 px-40 flex flex-col gap-16 "+(themeSwitch?'bg-white':'bg-gray-800 text-white')}>
            <h1 className="font-bold text-4xl">Skills<SortIcon style={{fontSize:'40px', marginLeft:'8px', fontWeight:'bold'}} className='text-blue-500'/></h1>
            <section>
                {/* html */}
                <div className="flex items-center gap-2">
                    <Image src={htmlIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">HTML</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-orange-500 z-50 animation-slide  relative" title="80%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-orange-500 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* css */}
                <div className="flex items-center gap-2">
                    <Image src={cssIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">CSS</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-blue-500 z-50 css-slide  relative" title="75%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-blue-500 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* javascript */}
                <div className="flex items-center gap-2">
                    <Image src={javascriptIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">JavaScript</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-yellow-500 z-50 javascript-slide  relative" title="65%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-yellow-500 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* React */}
                <div className="flex items-center gap-2">
                    <Image src={reactjsIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">React js</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-blue-400 z-50 animation-slide  relative" title="80%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-blue-400 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* Nodejs */}
                <div className="flex items-center gap-2">
                    <Image src={nodejsIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">Node js</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-green-500 z-50 nodejs-slide  relative" title="50%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-green-500 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* Expressjs */}
                <div className="flex items-center gap-2">
                    <Image src={expressIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">Express js</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-gray-600 z-50 nodejs-slide relative" title="50%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-gray-600 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* MongoDb */}
                <div className="flex items-center gap-2">
                    <Image src={mongodbIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">MongoDb</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-green-300 z-50 mongodb-slide  relative" title="40%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-green-300 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* Nextjs */}
                <div className="flex items-center gap-2">
                    <Image src={nextjsIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">Next js</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-gray-700 z-50 nextjs-slide  relative" title="60%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-gray-700 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* Tailwind */}
                <div className="flex items-center gap-2">
                    <Image src={tailwindIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">Tailwind css</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-blue-300 z-50 animation-slide  relative" title="80%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-blue-300 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* Java */}
                <div className="flex items-center gap-2">
                    <Image src={javaIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">Java</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-red-500 z-50 css-slide  relative" title="75%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-red-500 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* Springboot */}
                <div className="flex items-center gap-2">
                    <Image src={springbootIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">Spring boot</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-green-500 z-50 spring-slide  relative" title="70%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-green-500 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* MySql */}
                <div className="flex items-center gap-2">
                    <Image src={mysqlIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">MySql</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-orange-500 z-50 nextjs-slide  relative" title="60%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-orange-500 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* Github */}
                <div className="flex items-center gap-2">
                    <Image src={githubIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">GitHub</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-gray-500 z-50 spring-slide  relative" title="70%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-gray-500 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* Material UI */}
                <div className="flex items-center gap-2">
                    <Image src={materialUIIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">Material UI</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-blue-400 z-50 nextjs-slide  relative" title="60%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-blue-400 marker"></div></div> 
                    </div>
                    </div>
                </div>

                {/* Bootstrap */}
                <div className="flex items-center gap-2">
                    <Image src={bootstrapIcon} alt="html-icon" width={50}/>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-lg font-semibold">Bootstrap</h3>
                    <div className="w-40 h-2 bg-white rounded-xl flex items-center shadow-sm shadow-gray-400">
                        <div className=" h-2 bg-purple-500 z-50 nextjs-slide  relative" title="60%">
                            <div className="absolute -top-[6px] left-full h-5 w-5 rounded-full bg-purple-500 marker"></div></div> 
                    </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Skills;