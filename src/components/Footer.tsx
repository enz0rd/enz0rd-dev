import { CiCircleChevUp } from "react-icons/ci";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-fit py-2 py-5 justify-center bg-zinc-800">
            <div className="w-[90%] flex justify-between m-auto align-middle">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-center gap-2">
                        <h1 className="text-lg lg:text-2xl m-auto text-zinc-50 font-bold">enz0rd<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FDC500] to-[#FFE383]">.dev</span></h1>
                        <p className="text-center text-xs text-zinc-50 m-auto">© 2024 Enzo Rossi Daltoé</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <a href="https://github.com/enz0rd" target="_blank">
                            <FaGithub className="text-zinc-50 text-3xl" />
                        </a>
                        <a href="https://linkedin.com/in/enz0rd" target="_blank">
                            <FaLinkedin className="text-zinc-50 text-3xl" />
                        </a>
                    </div>
                </div>
                <Button onClick={() => window.scrollTo(0, 0)} className="my-auto aspect-square w-[3rem] h-[3rem] rounded-full bg-purple-600">
                    <CiCircleChevUp className="scale-[2] my-3" />
                </Button>
            </div>
            <div className="hidden lg:visible w-[80%] mt-6 lg:flex flex-col align-middle m-auto gap-4">
                <div className="border-t border-zinc-500"></div>
                <div className="flex px-4 py-2 flex-row gap-6 m-auto">
                    <a className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]" href="#top">Home</a>
                    <a className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]" href="#about">About me</a>
                    <a className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]" href="#projects">Projects</a>
                    <a className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]" href="#experiences">Experiences</a>
                    <a className="hover:text-[#8D04E9] text-zinc-50 transition-[.5s]" href="#skills">Skills</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;