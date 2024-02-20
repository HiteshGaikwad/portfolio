'use client'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useSelector } from 'react-redux';
import SortIcon from '@mui/icons-material/Sort';

export default function About(){
    const themeSwitch= useSelector((store)=>store.themeSwitcher)
    return(
        <main className={" w-full h-full pt-5 px-40 flex flex-col gap-16 "+(themeSwitch?'bg-white':'bg-gray-800 text-white')}>
            <section className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl">About me<SortIcon style={{fontSize:'40px', marginLeft:'8px', fontWeight:'bold'}} className='text-blue-500'/></h1>
                <div className="flex flex-col gap-3">
                <h2 className="font-bold text-xl">I am Hitesh Gaikwad a Software Engineer.</h2>
            <p className='w-[90%] font-semibold'>Hi! My name is Hitesh Gaikwad. I am a Software Engineer, and I am very passionate and dedicated to my work. I am a highly motivated and skilled Fresher with expertise in both frontend and backend development. Proven track record of successfully completing projects while growing a passion for tackling complicated challenges that demand sharp critical thinking and exceptional problem-solving abilities.</p>
            </div>
            </section>

            <section className='flex gap-8'>
                <div className='flex flex-col gap-8 w-1/2'>
                <h1 className="font-bold text-4xl">Education</h1>
                <div className='shadow-lg shadow-gray-500 px-8 py-14 rounded-xl'>
                <div className='flex flex-col gap-10 border-l-2 border-black pl-3 '>
                    <div>
                        <h2 className='text-xl font-semibold'><SchoolIcon/> Bachelor of Engineering (Mechanical)</h2>
                        <h3><CalendarMonthIcon/> May 2019</h3>
                        <h3><ApartmentIcon/> Yadavrao Tasgaonkar Institute of Engineering and Technology</h3>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'><SchoolIcon/> Higher Secondary School (Science)</h2>
                        <h3><CalendarMonthIcon/> June 2015</h3>
                        <h3><ApartmentIcon/> SDSM College Palghar</h3>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'><SchoolIcon/> Secondary School (CBSE Board)</h2>
                        <h3><CalendarMonthIcon/> June 2013</h3>
                        <h3><ApartmentIcon/> Jawahar Navodaya Vidyalaya, Palghar</h3>
                    </div>
                </div>
                </div>
                </div>
                <div className='flex flex-col gap-8 w-1/2'>
                <h1 className="font-bold text-4xl">Certification</h1>
                <div className='shadow-lg shadow-gray-500 px-8 py-10 rounded-xl'>
                <div className='flex flex-col gap-10 border-l-2 border-black pl-3 '>
                    <div>
                        <h2 className='text-xl font-semibold'><SchoolIcon/> Data Structures and Algorithms</h2>
                        <ul className='list-disc pl-6'>
                            <li>Learnt Data Structures and Algorithms and solved over 1000 questions.</li>
                            <li>Developed problem solving and logic building skills.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'><SchoolIcon/> Frontend Development</h2>
                        <ul className='list-disc pl-6 text-wrap'>
                            <li>Learnt Frontend development technologies like HTML, CSS, Javascript, React.js, Redux.js, Next.js, Tailwind css, Material UI, Bootstrap</li>
                            <li>Made some good projects using frontend technologies.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'><SchoolIcon/> Backend Development</h2>
                        <ul className='list-disc pl-6'>
                            <li>Learnt Backend development technologies like Java, Speing boot, Hibernate, JPA, Node.js, Express.js, MySql, MongoDB.</li>
                            <li>Made some good projects using backend technologies.</li>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
            </section>
            
        </main>
    )
}