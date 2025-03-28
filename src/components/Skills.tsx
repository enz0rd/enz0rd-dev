import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript as Javascript } from "react-icons/io";
import { SiTypescript as Typescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
    return (
        <div id='skills' className="w-full lg:justify-start py-[5rem] flex align-middle justify-center col-span-1 bg-gradient-to-br from-[#8D04E9] via-[#5C0099] to-[#1F0033]">
            <div className="m-[2rem] lg:w-[600px] w-fit my-auto flex flex-col gap-5">
                <h1 className="text-3xl font-bold text-zinc-50">Hard Skills</h1>
                <div className="w-full h-fit grid grid-cols-1 gap-2">
                    <div className="w-full flex flex-row m-auto justify-between text-center bg-zinc-50 p-3 rounded-2xl">
                        <FaNodeJs className="lg:scale-[3] scale-[2] m-3"/>
                        <Typescript className="lg:scale-[3] scale-[2] m-3"/>
                        <Javascript className="lg:scale-[3] scale-[2] m-3"/> 
                        <FaReact className="lg:scale-[3] scale-[2] m-3"/>
                        <SiExpress className="lg:scale-[3] scale-[2] m-3"/>
                        <FaHtml5 className="lg:scale-[3] scale-[2] m-3"/>
                        <FaCss3Alt className="lg:scale-[3] scale-[2] m-3"/>
                        <TbBrandNextjs className="lg:scale-[3] scale-[2] m-3"/>
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-zinc-50">Soft Skills</h1>
                <div className="w-full h-fit grid grid-cols-1 gap-2">
                    <div className="w-full flex flex-col m-auto justify-center text-center bg-zinc-50 p-3 rounded-2xl">
                        <ul className="list-disc text-left mx-5 grid grid-cols-2 gap-10">
                            <div className="col-span-1">
                                <li>Good communication</li>
                                <li>Self-taught</li>
                                <li>Group work</li>
                                <li>Open to new ideas</li>
                            </div>
                            <div className="col-span-1">
                                <li>Hunger for knowledge</li>
                                <li>Always studying</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;