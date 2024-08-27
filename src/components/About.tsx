import imageBackgroundAbout from '/images/image-background-about.jpg';

const About = () => {
    return (
        <div id='about' className='border-zinc-50 w-full mt-0 flex justify-center'>
            <div className="h-[60vh] w-[90%] grid grid-cols-1">
                <div className='bg-gradient-to-br from-[#505050] via-[#212121] h-fit w-full to-[#121212] absolute left-0 z-[-3]'>
                    <img src={imageBackgroundAbout} className='opacity-50 saturate-0 h-[60vh] w-full object-cover blur' alt="codes" />
                </div>
                <div className='group text-wrap w-[90%] h-full flex flex-col text-center gap-2 justify-center align-middle'>
                    <h1 className='text-4xl font-bold text-zinc-50'>About me</h1>
                    <span className='text-md font-regular text-zinc-50'>I'm a backend developer, always seeking new ideas and hunger for knowledge.</span>
                    <span className='text-md font-regular text-zinc-50'>I've been a fullstack developer since Jan/2023 and I work at Gdoor Sistemas as QA.</span>
                    <span className='text-md font-regular text-zinc-50'>I developed some portfolio projects, such as an email system, an educational platform, a website inspired by Buscapé and REST APIs.</span>
                </div>
            </div> 
        </div >
    );
}

export default About;