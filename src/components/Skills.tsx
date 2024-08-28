import { FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript as Javascript } from "react-icons/io";
import { SiTypescript as Typescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = () => {
    return (
        <div id='skills' className="w-full py-[5rem] flex align-middle justify-center col-span-1 bg-gradient-to-br from-[#8D04E9] via-[#5C0099] to-[#1F0033]">
            <div className="m-[2rem] w-fit my-auto flex flex-col gap-5">
                <h1 className="text-3xl font-bold text-zinc-50">Hard Skills</h1>
                <div className="w-full h-fit grid grid-cols-1 gap-2">
                    <div className="w-full flex flex-row m-auto justify-between text-center bg-zinc-50 p-3 rounded-2xl">
                        <FaNodeJs className="scale-[3] m-3"/>
                        <Typescript className="scale-[3] m-3"/>
                        <Javascript className="scale-[3] m-3"/> 
                        <FaReact className="scale-[3] m-3"/>
                        <SiExpress className="scale-[3] m-3"/>
                        <FaHtml5 className="scale-[3] m-3"/>
                        <FaCss3Alt className="scale-[3] m-3"/>
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