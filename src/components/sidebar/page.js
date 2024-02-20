'use client'
import '../../style.css'
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EditNoteIcon from '@mui/icons-material/EditNote';
import BadgeIcon from '@mui/icons-material/Badge';
import ThreePIcon from '@mui/icons-material/ThreeP';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Navbar(){

    const themeswitch= useSelector((store)=>store.themeSwitcher);

    return(
        <nav className={" h-full w-full  flex flex-col items-start justify-center gap-10 pl-8 pr-2 "+(themeswitch?"bg-white shadow-lg shadow-gray-600 rounded-r-3xl":"bg-gray-700 text-white ")}>
            <ul className='flex flex-col gap-4 w-full'>
                <Link href='/'><li className='border-b border-b-gray-300 pb-2 font-bold text-lg hover:text-blue-500 hover:translate-x-2 transition ease-linear'><HomeIcon style={{fontSize :'30px',padding:"0 5px 0 0"}}/>Home</li></Link>
                <Link href='/about'><li className='border-b border-b-gray-300 pb-2 font-bold text-lg hover:text-blue-500 hover:translate-x-2 transition ease-linear'><Person2Icon style={{fontSize :'30px',padding:"0 5px 0 0"}}/>About</li></Link>
                <Link href='/skills'><li className='border-b border-b-gray-300 pb-2 font-bold text-lg hover:text-blue-500 hover:translate-x-2 transition ease-linear'><PsychologyIcon style={{fontSize :'30px',padding:"0 5px 0 0"}}/>Skills</li></Link>
                <Link href='/projects'><li className='border-b border-b-gray-300 pb-2 font-bold text-lg hover:text-blue-500 hover:translate-x-2 transition ease-linear'><EditNoteIcon style={{fontSize :'30px',padding:"0 5px 0 0"}}/>Projects</li></Link>
                <Link href='/experience'><li className='border-b border-b-gray-300 pb-2 font-bold text-lg hover:text-blue-500 hover:translate-x-2 transition ease-linear'><BadgeIcon style={{fontSize :'30px',padding:"0 5px 0 0"}}/>Experience</li></Link>
                <Link href='/contact'><li className='border-b border-b-gray-300 pb-2 font-bold text-lg hover:text-blue-500 hover:translate-x-2 transition ease-linear'><ThreePIcon style={{fontSize :'30px',padding:"0 5px 0 0"}}/>Contact</li></Link>
            </ul>
            <h2 className='w-full font-semibold '>Created with ❤️ By <span className='font-bold'>Hitesh Gaikwad</span></h2>
        </nav>
    )
}