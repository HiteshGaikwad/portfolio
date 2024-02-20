'use client'
import { useSelector } from "react-redux";

const Contact=()=>{
    const themeSwitch= useSelector((store)=>store.themeSwitcher);

    return(
        <div className={" w-full h-full pt-5 px-40 flex flex-col gap-16 "+(themeSwitch?'bg-white':'bg-gray-800 text-white')}>Contact</div>
    )
}

export default Contact;