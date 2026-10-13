"use client";

import { ReactTyped } from "react-typed";
import Image from "next/image";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { ContactButton } from "@/components/contact-button";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="container mx-auto flex scroll-mt-16 flex-col items-center gap-3 px-4 text-center"
    >
      <a
        href="https://github.com/enz0rd"
        target="_blank"
        className="flex items-center gap-2 border-b-2 border-transparent decoration-none hover:border-foreground"
      >
        <h1 className="text-3xl font-bold sm:text-4xl">
          $ <ReactTyped strings={["@enz0rd"]} typeSpeed={150} />
        </h1>
      </a>
      <span className="text-lg font-medium">Enzo Rossi Daltoé</span>
      <span className="text-muted-foreground">{t.hero.role}</span>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>{t.hero.location}</span>
        <Image src="/flag-brazil.png" alt="Brazil flag" width={20} height={16} />
      </div>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">{t.hero.bio}</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="outline">
          <a href="#projects">{t.hero.ctaProjects}</a>
        </Button>
        <ContactButton />
      </div>
    </section>
  );
}
