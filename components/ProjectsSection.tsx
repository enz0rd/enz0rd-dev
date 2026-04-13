import { ExternalLink } from "lucide-react";
import React from "react";

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="container flex flex-col items-center gap-2 justify-center mx-auto"
    >
      <h1 className="text-3xl font-bold">projects:</h1>
      <div className="text-md grid grid-cols-2 md:grid-cols-3 grid-rows-auto gap-x-10">
        <li className="hover:text-green-500 transition .7s">
          <a
            className="flex gap-1 w-fit items-center"
            href="https://quickurl.com.br"
            target="_blank"
          >
            quickurl
            <ExternalLink className="size-4" />
          </a>
        </li>
        <li className="hover:text-blue-500 transition .7s">
          <a
            className="flex gap-1 w-fit items-center"
            href="https://dev-goclass.vercel.app/"
            target="_blank"
          >
            GoClass
            <ExternalLink className="size-4" />
          </a>
        </li>
        <li className="hover:text-orange-500 transition .7s">
          <a
            className="flex gap-1 w-fit items-center"
            href="https://estudiopuca.com.br"
            target="_blank"
          >
            Estudio Puçá
            <ExternalLink className="size-4" />
          </a>
        </li>
        <li className="hover:text-purple-500 transition .7s">
          <a
            className="flex gap-1 w-fit items-center"
            href="https://github.com/enz0rd/yakibot"
            target="_blank"
          >
            Yakibot
            <ExternalLink className="size-4" />
          </a>
        </li>
        <li className="hover:text-sky-500 transition .7s">
          <a
            className="flex gap-1 w-fit items-center"
            href="https://github.com/enz0rd/ToDoList_Rocketseat"
            target="_blank"
          >
            ToDoList
            <ExternalLink className="size-4" />
          </a>
        </li>
        <li className="hover:text-pink-500 transition .7s">
          <a
            className="flex gap-1 w-fit items-center"
            href="https://github.com/enz0rd/LumaClone"
            target="_blank"
          >
            LumaClone
            <ExternalLink className="size-4" />
          </a>
        </li>
        <li className="hover:text-mist-500 transition .7s">
          <a
            className="flex gap-1 w-fit items-center"
            href="https://github.com/enz0rd/instaz0rd"
            target="_blank"
          >
            Instaz0rd
            <ExternalLink className="size-4" />
          </a>
        </li>
        <li className="hover:text-yellow-500 transition .7s">
          <a
            className="flex gap-1 w-fit items-center"
            href="https://github.com/enz0rd/Email-Prototype"
            target="_blank"
          >
            EmailProto
            <ExternalLink className="size-4" />
          </a>
        </li>
        <li className="hover:text-red-500 transition .7s">
          <a
            className="flex gap-1 w-fit items-center"
            href="https://github.com/enz0rd?tab=repositories"
            target="_blank"
          >
            much more
            <ExternalLink className="size-4" />
          </a>
        </li>
      </div>
    </div>
  );
}
