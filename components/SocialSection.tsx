'use client';
import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

export default function SocialSection() {
  return (
    <div
      id="info"
      className="container flex flex-col items-center gap-2 justify-center mx-auto"
    >
      <h1 className="text-3xl font-bold">social:</h1>
      <span className="text-md flex-wrap text-center mx-5 max-w-2xl">
        You can find me on{" "}
      </span>
      <div className="flex gap-2">
        <a href="https://instagram.com/enz0rd" target="_blank">
          <InstagramLogoIcon size={32} className="hover:text-pink-500 cursor-pointer" weight="fill"/>
        </a>
        <a href="https://linkedin.com/in/enz0rd" target="_blank">
          <LinkedinLogoIcon size={32} className="hover:text-blue-500 cursor-pointer" weight="fill"/>
        </a>
        <a href="https://github.com/enz0rd" target="_blank">
          <GithubLogoIcon size={32} className="hover:text-gray-500 cursor-pointer" weight="fill"/>
        </a>
      </div>
    </div>
  );
}
