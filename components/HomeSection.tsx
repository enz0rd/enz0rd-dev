"use client";
import { ReactTyped } from "react-typed";
import Image from "next/image";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="container flex flex-col items-center gap-2 justify-center mx-auto"
    >
      <a
        href="https://github.com/enz0rd"
        target="_blank"
        className="decoration-none gap-2 flex items-center border-b-2"
      >
        <h1 className="text-3xl font-bold">
          $ <ReactTyped strings={["@enz0rd"]} typeSpeed={150} />
        </h1>
      </a>
      <span className="text-md">Enzo Rossi Daltoé</span>
      <span className="text-md">fullstack developer</span>
      <div className="flex gap-2">
        <span className="text-md">based in Concórdia, SC</span>
        <Image
          src="/flag-brazil.png"
          alt="Brazil flag"
          width={24}
          height={20}
        />
      </div>
    </div>
  );
}
