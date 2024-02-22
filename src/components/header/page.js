'use client'
import Link from 'next/link'
import '../../style.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../app/redux/features/themeSwitchSlice/themeSwitchSlice';

export default function Header(){

    const dispatch= useDispatch();
    const themeSwitch= useSelector((store)=>store.themeSwitcher);

    return (
        <div className={" h-[4%] flex flex-row-reverse pr-40 gap-40 fixed top-0 right-0 z-50 "+ (themeSwitch? 'bg-white':'bg-gray-800 text-white')} >
            <div className={ 'w-[80px]  h-10 shadow-gray-500 shadow-inner cursor-pointer rounded-full mt-1 transition ease-linear '+(themeSwitch?'bg-gradient-to-r from-gray-700':'bg-white')} 
            onClick={()=>dispatch(switchTheme())}>
                <div className={ 'w-[40px] h-[40px] mt-[0px] ml-[2px]  rounded-full shadow-md shadow-gray-800 ' + (!themeSwitch ?'-translate-x-[2px] transition ease-linear bg-gradient-to-l from-gray-900 to-gray-500':'translate-x-10 transition ease-linear bg-white')}></div>
                </div>
            <Link href='https://drive.google.com/uc?export=download&id=196V8Tc2kxoYidpVsg1ZkgA0yxarr2zgv' download='HiteshGaikwad-resume' rel="noopener noreferrer" ><button className='py-2 px-3 mt-[5px] rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-500 hover:scale-105 transition ease-linear'>Download CV</button></Link>
        </div>
    )
}

