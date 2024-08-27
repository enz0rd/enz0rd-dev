import imageBackground from '/images/code-intro.jpg';
import me from '/images/me.png';
import { CircleChevronDown } from 'lucide-react'

const Intro = () => {
    return (
        <div id='top' className='w-full flex justify-center'>
            <div className="h-fit pb-10 w-[90%] grid grid-cols-1">
                <div className='bg-gradient-to-br from-[#8D04E9] via-[#5C0099] h-full w-full to-[#1F0033] absolute top-0 left-0 z-[-3]'>
                    <img src={imageBackground} className='opacity-50 saturate-0 h-full w-full object-cover blur-sm' alt="codes" />
                </div>
                <div className='relative z-[0] mt-[3rem] space-y-6 md:space-y-0 lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex flex-col justify-center items-center'>
                    <img className='m-auto w-[80%] lg:w-[80%] col-span-1 md:col-start-2 lg:col-start-2' src={me} alt="me" />
                    <div className='col-span-1 md:col-start-1 lg:col-start-1 md:row-start-1 space-y-3 lg:row-start-1 h-full md:h-[40%] lg:h-[40%] md:ml-[3rem] lg:ml-[5rem] flex flex-col gap-1 '>
                        <div className='group text-zinc-50 text-center lg:text-left md:text-left flex flex-col gap-2'>
                            <p className='text-lg font-regular'>Hi, i'm</p>
                            <h1 className='text-[7rem] font-bold mt-[-3rem] mb-[-2rem]'>Enzo</h1>
                            <p className='text-lg font-regular'>Fullstack developer</p>
                        </div>
                        <div className='m-auto w-fit bg-[#FDC500] px-4 p-2 rounded-full'>
                            <span className='text-lg font-medium text-zinc-950'>Welcome to my portfolio</span>
                        </div>
                        <div className='flex flex-row gap-2 m-auto w-fit'>
                            <CircleChevronDown className='text-white' />
                            <span className='text-sm text-zinc-50'>Scroll down for more</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;