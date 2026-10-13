"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { ContactButton } from "@/components/contact-button";

const SECTIONS = [
  { id: "home", key: "presentation" },
  { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "certifications", key: "certifications" },
  { id: "skills", key: "skills" },
] as const;

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <a href="#home" className="shrink-0 text-sm font-bold">
          $ @enz0rd
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group relative text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav[section.key]}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <ContactButton />
        </div>
      </div>
    </header>
  );
}
