import { BadgePlusIcon } from "lucide-react";
import JsBadge from "./tech-badges/Javascript";
import NodeBadge from "./tech-badges/NodeJs";
import ReactBadge from "./tech-badges/React";
import TsBadge from "./tech-badges/Typescript";

interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
  current?: boolean;
}

interface ProjectProps {
  project: Project;
  badges: string[];
}

const Project = ({ project, badges }: ProjectProps) => {
  return (
    <a
      target="_blank"
      href={project.url}
      key={project.name}
      className="shrink-0 hover:opacity-[60%] transition-[.2s] hover:bg-zinc-100 hover:rounded-lg"
    >
      <div className="overflow-hidden rounded-md">
        <img
          src={project.image}
          className="aspect-[16/9] w-[300px] object-top rounded-lg bg-zinc-900 h-fit object-cover"
        />
      </div>
      <div className="flex gap-2 flex-col text-wrap">
        <figcaption className="pt-2 font-bold text-md flex flex-row gap-2">
          {project.name}{project.current ? (
            <p className="bg-gradient-to-br from-[#FDC500] to-[#FFE383] flex flex-row gap-2 align-middle px-2 py-1 my-auto w-fit rounded-md text-zinc-950 text-xs font-bold">
              Current
              <BadgePlusIcon className="size-[.8rem] my-auto" />
            </p>
          ) : (
            ""
          )}
        </figcaption>
        <span className="font-normal text-muted-foreground w-[300px]">
          {project.description}
        </span>
        <div className="flex gap-2 flex-wrap w-[300px]">
          {badges.map((badge) => {
            switch (badge) {
              case "js":
                return <JsBadge />;
              case "ts":
                return <TsBadge />;
              case "react":
                return <ReactBadge />;
              case "node":
                return <NodeBadge />;
              default:
                return <></>;
            }
          })}
        </div>
      </div>
    </a>
  );
};

export default Project;
