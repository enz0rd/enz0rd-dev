import Project from "./Project";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { CirclePlus } from 'lucide-react'

const projectsData = [
    {
        project: {
            name: 'LumaClone',
            description: 'Clone of the Luma application (for educational purposes)',
            image: '/images/Projects/lumaclone.png',
            url: 'https://github.com/enz0rd/lumaclone.git',
            current: true,
        },
        badges: ['ts', 'nextjs', 'react', 'node']
    },
    {
        project: {
            name: 'quickurl',
            description: 'quickurl is a url shortener made using nextjs, react and prisma',
            image: '/images/Projects/quickurl.jpg',
            url: 'https://quickurl.com.br',
        },
        badges: ['ts', 'nextjs', 'react', 'node']
    },
    {
        project: {
            name: 'GoClass',
            description: 'An educational platform like Google Classroom',
            image: '/images/Projects/GoClass.png',
            url: 'https://github.com/enz0rd/frontend-goclass.git',
        },
        badges: ['js', 'ts', 'react', 'node']
    },
    {
        project: {
            name: 'ToDoList - Rocketseat',
            description: "A to-do list made for Rocketseat's ReactJS course",
            image: '/images/Projects/ToDoListRS.png',
            url: 'https://github.com/enz0rd/ToDoList_Rocketseat.git',
    },
        badges: ['ts', 'react']
    },
    {
        project: {
            name: 'Instaz0rd',
            description: 'A social platform like Instagram',
            image: '/images/Projects/iz0.png',
            url: 'https://github.com/enz0rd/instaz0rd.git',
    },
        badges: ['js', 'ts', 'react', 'node']
    },
    {
        project: {
            name: 'Email Prototype',
            description: 'A demonstration of an email system',
            image: '/images/Projects/Email.png',
            url: 'https://github.com/enz0rd/email-prototype.git',
        },
        badges: ['js', 'node'],
    },
]

const Projects = () => {
    return (
        <div id="projects" className="w-full border-2 justify-center lg:px-[10%] bg-zinc-50">
            <div className="w-full lg:w-[1280px] m-auto flex flex-col gap-5 px-[2rem] py-[3rem] h-fit">
                <h1 className="text-3xl font-bold">My Projects</h1>
                <p className="text-sm text-muted-foreground font-regular">Click to go to the repository of the project, scroll to see more</p>
                <ScrollArea className="pb-3 lg:w-xl lg:m-auto justify-center w-full bg-zinc-50 whitespace-nowrap rounded-md">
                    <div className="flex w-full space-x-3 p-0">
                        {projectsData.map(({ project, badges }) => (
                            <Project project={project} badges={badges} />
                        ))}
                        <figure key='see-more' className="shrink-0">
                            <a href="https://github.com/enz0rd" target="_blank">
                                <div className="overflow-hidden rounded-md">
                                    <div
                                        className="aspect-[16/9] bg-gradient-to-br from-[#505050] via-[#212121] to-[#121212] w-[20rem] flex justify-center align-middle rounded-lg h-fit object-cover"
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
        </div>
    )
}

export default Projects;
