import { useState } from 'react';
import { Button } from './ui/button';
import imageBackgroundAbout from '/images/image-background-about.jpg';
import {MailIcon, CopyIcon} from 'lucide-react'

const About = () => {
    const [isClicked, setClicked] = useState(false);

    const handleClickEmail = () => {
        navigator.clipboard.writeText('enzorossidaltoe@hotmail.com.br')
        setClicked(true)
        setTimeout(() => setClicked(false), 3000)
    }

    return (
        <div id='about' style={{backgroundImage: `url(${imageBackgroundAbout})`, backgroundSize: 'cover'}} className='w-full mt-0 flex justify-center h-fit py-[5rem] bg-gradient-to-br from-[#505050] via-[#212121] to-[#121212]'>
                <div className='group text-wrap w-[90%] lg:w-[1280px] h-full flex flex-col text-center gap-2 justify-center align-middle'>
                    <h1 className='text-4xl font-bold text-zinc-50'>About me</h1>
                    <span className='text-md font-regular text-zinc-50'>As a professional fullstack developer, I specialize in using <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-[#FDC500] to-[#FFE383]">TypeScript, JavaScript, React.js,</span> and <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-[#FDC500] to-[#FFE383]">Node.js</span> to create robust and scalable applications. With a strong foundation built since I began coding in January 2023, I've already developed a range of projects, including an email system, an educational platform like Google Classroom, and multiple RESTful APIs using Express.js. My focus is on delivering high-quality, maintainable code that meets the needs of end-users and stakeholders alike.</span>
                    <div className='flex flex-col gap-1 mt-5'>
                            <span className='font-light text-zinc-50'>Get in touch!</span>
                            <Button title='Click to copy the email' className='w-fit group text-zinc-900 bg-gradient-to-r from-[#FDC500] to-[#FFE383] flex gap-2 m-auto' onClick={handleClickEmail}>
                                {isClicked ? (
                                    <>
                                        <CopyIcon />
                                        <span className='font-medium'>Copied to the clipboard!</span>
                                    </>
                                ) : (
                                    <>
                                        <MailIcon />
                                        <span className='font-medium'>enzorossidaltoe@hotmail.com.br</span>
                                    </>
                                )}
                            </Button>
                        </div>
                </div>
        </div >
    );
}

export default About;