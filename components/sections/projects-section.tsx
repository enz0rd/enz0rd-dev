"use client";

import { ExternalLink } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="container mx-auto scroll-mt-16 px-4">
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">{t.projects.title}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, index) => (
          <Reveal key={project.name} delay={index * 60}>
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-foreground group-hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-2 text-base">
                    {project.name}
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
                {project.tags.length > 0 && (
                  <CardFooter className="flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                )}
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
