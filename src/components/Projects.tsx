import JsBadge from "./tech-badges/Javascript";
import NodeBadge from "./tech-badges/NodeJs";
import ReactBadge from "./tech-badges/React";
import TsBadge from "./tech-badges/Typescript";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { CirclePlus } from 'lucide-react'

const Projects = () => {
    return (
        <div id="projects" className="w-full justify-center lg:px-[10%] flex flex-col gap-5 px-[2rem] py-[3rem] bg-zinc-50 h-fit">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <p className="text-sm text-muted-foreground font-regular">Click to go to the repository of the project, scroll to see more</p>
            <ScrollArea className="pb-3 w-full bg-zinc-50 whitespace-nowrap rounded-md">
                <div className="flex w-full space-x-3 p-0">
                    <a target="_blank" href='https://github.com/enz0rd/frontend-goclass.git' key='goclass' className="shrink-0 hover:opacity-[60%] transition-[.2s] hover:bg-zinc-100 hover:rounded-lg">
                        <div className="overflow-hidden rounded-md">
                            <img
                                src={'/images/Projects/GoClass.png'}
                                className="aspect-[16/9] w-[300px] object-top rounded-lg bg-zinc-900 h-fit object-cover"
                            />
                        </div>
                        <div className="flex gap-2 flex-col text-wrap">
                            <figcaption className="pt-2 font-bold text-md">
                                GoClass
                            </figcaption>
                            <span className="font-normal text-muted-foreground w-[300px]">
                                An educational platform like Google Classroom
                            </span>
                            <div className="flex gap-2 flex-wrap w-[300px]">
                                <JsBadge />
                                <TsBadge />
                                <ReactBadge />
                                <NodeBadge />
                            </div>
                        </div>
                    </a>
                    <a target="_blank" href='https://github.com/enz0rd/instaz0rd.git' key='insta' className=" shrink-0 hover:opacity-[60%] transition-[.2s] hover:bg-zinc-100 hover:rounded-lg">
                        <div className="overflow-hidden rounded-md">
                            <img
                                src={'/images/Projects/iz0.png'}
                                className="aspect-[16/9] w-[300px] object-top rounded-lg bg-zinc-900 h-fit object-cover"
                            />
                        </div>
                        <div className="flex gap-2 flex-col text-wrap">
                            <figcaption className="pt-2 font-bold text-md">
                                Instaz0rd
                            </figcaption>
                            <span className="font-normal text-muted-foreground w-[300px]">
                                A social platform like Instagram
                            </span>
                            <div className="flex gap-2 flex-wrap w-[300px]">
                                <JsBadge />
                                <TsBadge />
                                <ReactBadge />
                                <NodeBadge />
                            </div>
                        </div>
                    </a>
                    <a target="_blank" href='https://github.com/enz0rd/Email-Prototype.git' key='email' className="shrink-0 hover:opacity-[60%] transition-[.2s] hover:bg-zinc-100 hover:rounded-lg">
                        <div className="overflow-hidden rounded-md">
                            <img
                                src={'/images/Projects/Email.png'}
                                className="aspect-[16/9] w-[300px] object-top border rounded-lg bg-zinc-900 h-fit  object-cover"
                            />
                        </div>
                        <div className="flex gap-2 flex-col text-wrap flex-wrap">
                            <figcaption className="pt-2 font-bold text-md">
                                Email Prototype
                            </figcaption>
                            <span className="font-normal text-muted-foreground w-[300px]">
                                A demonstration of an email system
                            </span>
                            <div className="flex gap-2 flex-wrap w-[300px]">
                                <JsBadge />
                                <NodeBadge />
                            </div>
                        </div>
                    </a>
                    <a target="_blank" href='https://github.com/enz0rd/PDVSimples2024.git' key='pos' className="shrink-0 hover:opacity-[60%] transition-[.2s] hover:bg-zinc-100 hover:rounded-lg">
                        <div className="overflow-hidden rounded-md rounded-lg bg-zinc-900">
                            <img
                                src={'/images/Projects/POS.ico'}
                                className="aspect-[16/9] w-[300px] object-scale-down p-4 h-fit  object-cover"
                            />
                        </div>
                        <div className="flex gap-2 flex-col text-wrap flex-wrap">
                            <figcaption className="pt-2 font-bold text-md">
                                Point of Sales Prototype
                            </figcaption>
                            <span className="font-normal text-muted-foreground w-[300px]">
                                A demonstration of a point of sales
                            </span>
                            <div className="flex gap-2 w-[300px]">
                                <JsBadge />
                                <NodeBadge />
                            </div>
                        </div>
                    </a>
                    <figure key='see-more' className="shrink-0">
                        <a href="https://github.com/enz0rd" target="_blank">
                            <div className="overflow-hidden rounded-md">
                                <div
                                    className="aspect-[16/9] w-[300px] bg-gradient-to-br from-[#505050] via-[#212121] to-[#121212] w-[20rem] flex justify-center align-middle rounded-lg h-fit object-cover"
                                >
                                    <CirclePlus className="m-auto text-zinc-50 size-[50%]" />
                                </div>
                            </div>
                            <div className="flex flex-col text-wrap">
                                <figcaption className="pt-2 font-bold text-md">
                                    See more at my github
                                </figcaption>
                                <span className="font-normal text-muted-foreground w-[300px]">
                                    Click to redirect
                                </span>
                            </div>
                        </a>
                    </figure>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}

export default Projects;