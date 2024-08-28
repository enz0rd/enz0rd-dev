import imageBackgroundAbout from '/images/image-background-about.jpg';

const About = () => {
    return (
        <div id='about' style={{backgroundImage: `url(${imageBackgroundAbout})`, backgroundSize: 'cover'}} className='w-full mt-0 flex justify-center h-[50vh] bg-gradient-to-br from-[#505050] via-[#212121] w-full to-[#121212]'>
                <div className='group text-wrap w-[90%] lg:w-[70%] h-full flex flex-col text-center gap-2 justify-center align-middle'>
                    <h1 className='text-4xl font-bold text-zinc-50'>About me</h1>
                    <span className='text-md font-regular text-zinc-50'>As a professional fullstack developer, I specialize in using TypeScript, JavaScript, React.js, and Node.js to create robust and scalable applications. With a strong foundation built since I began coding in January 2023, I've already developed a range of projects, including an email system, an educational platform like Google Classroom, and multiple RESTful APIs using Express.js. My focus is on delivering high-quality, maintainable code that meets the needs of end-users and stakeholders alike.</span>
                </div>
        </div >
    );
}

export default About;