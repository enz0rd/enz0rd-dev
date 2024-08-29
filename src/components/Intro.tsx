import imageBackground from '/images/code-intro.jpg';
import me from '/images/me.png';
import { CircleChevronDown } from 'lucide-react'

const Intro = () => {

    return (
        <div style={{ backgroundImage: `url(${imageBackground})`, backgroundSize: 'cover' }} className='w-full h-fit pb-20 pt-[7rem] w-[90%] justify-center grid grid-cols-1'>
            <div className='space-y-6 md:space-y-0 lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex flex-col justify-center lg:w-[1280px] lg:m-auto items-center'>
                <img className='m-auto w-[80%] lg:w-[80%] col-span-1 md:col-start-2 lg:col-start-2' src={me} alt="me" />
                <div className='col-span-1 md:col-start-1 lg:col-start-1 md:row-start-1 space-y-3 lg:row-start-1 h-full md:h-[40%] lg:h-[40%] md:ml-[3rem] lg:ml-[5rem] flex flex-col gap-1 '>
                    <div className='group text-zinc-50 text-center lg:text-left md:text-left flex flex-col gap-2'>
                        <p className='text-lg font-regular'>Hi, i'm</p>
                        <h1 className='text-[7rem] font-extrabold mt-[-2rem] ml-[-.5rem] mb-[-2rem]'>Enzo</h1>
                        <p className='text-lg font-regular'>Fullstack developer</p>
                    </div>
                    <div className='m-auto w-fit justify-center text-center bg-[#FDC500] flex flex-col gap-2 p-4 rounded-full'>
                        <span className='text-lg font-medium text-zinc-950'>Welcome to my portfolio</span>
                    </div>
                    <div className='flex flex-row gap-2 m-auto w-fit'>
                        <CircleChevronDown className='text-white' />
                        <span className='text-sm text-zinc-50'>Scroll down for more</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;