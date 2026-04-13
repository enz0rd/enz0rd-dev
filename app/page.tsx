import { ExternalLink, TestTubeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 lg:py-25 md:py-20 gap-10 py-15 bg-mist-900">
      <div
        id="home"
        className="container flex flex-col items-center gap-2 justify-center mx-auto"
      >
        <a
          href="https://github.com/enz0rd"
          target="_blank"
          className="decoration-none gap-2 flex items-center border-b-2"
        >
          <h1 className="text-3xl font-bold">@enz0rd</h1>
          <ExternalLink className="text-2xl" />
        </a>
        <span className="text-md">fullstack developer & QA Analyst</span>
      </div>
      <div
        id="info"
        className="container flex flex-col items-center gap-2 justify-center mx-auto"
      >
        <h1 className="text-3xl font-bold">info:</h1>
        <span className="text-md flex-wrap text-center mx-5">
          My focus is on
          delivering high-quality, maintainable code that meets the needs of
          end-users and stakeholders alike.
        </span>
      </div>
      <div
        id="tech"
        className="container flex flex-col items-center gap-2 justify-center mx-auto"
      >
        <h1 className="text-3xl font-bold">technologies:</h1>
        <div className="text-md mx-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 gap-x-10">
          <li className="hover:text-blue-500 transition .7s cursor-default">TypeScript</li>
          <li className="hover:text-sky-500 transition .7s cursor-default">React</li>
          <li className="hover:text-mist-500 transition .7s cursor-default">Next.js</li>
          <li className="hover:text-green-500 transition .7s cursor-default">Node.js</li>
          <li className="hover:text-orange-500 transition .7s cursor-default">Html</li>
          <li className="hover:text-blue-500 transition .7s cursor-default">CSS</li>
          <li className="hover:text-blue-500 transition .7s cursor-default">PostgreSQL</li>
          <li className="hover:text-green-500 transition .7s cursor-default">Playwright</li>
        </div>
      </div>
      <div
        id="projects"
        className="container flex flex-col items-center gap-2 justify-center mx-auto"
      >
        <h1 className="text-3xl font-bold">projects:</h1>
        <div className="text-md grid grid-cols-2 md:grid-cols-3 grid-rows-auto gap-x-10">
          <li className="hover:text-green-500 transition .7s"><a className="flex gap-1 w-fit items-center" href="https://quickurl.com.br" target="_blank">quickurl<ExternalLink className="size-4" /></a></li>
          <li className="hover:text-blue-500 transition .7s"><a className="flex gap-1 w-fit items-center" href="https://dev-goclass.vercel.app/" target="_blank">GoClass<ExternalLink className="size-4" /></a></li>
          <li className="hover:text-orange-500 transition .7s"><a className="flex gap-1 w-fit items-center" href="https://estudiopuca.com.br" target="_blank">Estudio Puçá<ExternalLink className="size-4" /></a></li>
          <li className="hover:text-purple-500 transition .7s"><a className="flex gap-1 w-fit items-center" href="https://github.com/enz0rd/yakibot" target="_blank">Yakibot<ExternalLink className="size-4" /></a></li>
          <li className="hover:text-sky-500 transition .7s"><a className="flex gap-1 w-fit items-center" href="https://github.com/enz0rd/ToDoList_Rocketseat" target="_blank">ToDoList<ExternalLink className="size-4" /></a></li>
          <li className="hover:text-pink-500 transition .7s"><a className="flex gap-1 w-fit items-center" href="https://github.com/enz0rd/LumaClone" target="_blank">LumaClone<ExternalLink className="size-4" /></a></li>
          <li className="hover:text-mist-500 transition .7s"><a className="flex gap-1 w-fit items-center" href="https://github.com/enz0rd/instaz0rd" target="_blank">Instaz0rd<ExternalLink className="size-4" /></a></li>
          <li className="hover:text-yellow-500 transition .7s"><a className="flex gap-1 w-fit items-center" href="https://github.com/enz0rd/Email-Prototype" target="_blank">EmailProto<ExternalLink className="size-4" /></a></li>
          <li className="hover:text-red-500 transition .7s"><a className="flex gap-1 w-fit items-center" href="https://github.com/enz0rd?tab=repositories" target="_blank">much more<ExternalLink className="size-4" /></a></li>
        </div>
      </div>
    </div>
  );
}
