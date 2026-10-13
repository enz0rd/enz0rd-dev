"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { SKILLS } from "@/lib/content";

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="container mx-auto scroll-mt-16 px-4">
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">{t.skills.title}</h2>
      <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
        {SKILLS.map((skill, index) => (
          <Reveal key={skill.name} delay={index * 30}>
            <Badge
              variant="outline"
              className={`cursor-default text-sm transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 ${skill.hover}`}
            >
              {skill.name}
            </Badge>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
