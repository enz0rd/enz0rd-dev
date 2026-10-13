"use client";

import { ExternalLink } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/reveal";

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="container mx-auto max-w-2xl scroll-mt-16 px-4">
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">{t.education.title}</h2>
      <ol className="flex flex-col gap-6 border-l border-border pl-6">
        {t.education.items.map((item, index) => (
          <Reveal key={`${item.institution}-${item.degree}-${index}`} delay={index * 60} className="relative">
            <span className="absolute top-1.5 -left-7.25 size-2 rounded-full bg-foreground" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-bold">{item.degree}</h3>
              <span className="text-xs text-muted-foreground">{item.period}</span>
            </div>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.institution}
                <ExternalLink className="size-3.5" />
              </a>
            ) : (
              <span className="text-sm text-muted-foreground">{item.institution}</span>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
