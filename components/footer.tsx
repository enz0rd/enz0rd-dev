"use client";

import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

import { useLanguage } from "@/components/providers/language-provider";
import { HiddenDuck } from "@/components/HiddenDuck";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-10 text-center">
        <span className="text-sm text-muted-foreground">{t.footer.social}</span>
        <div className="flex gap-3">
          <a href="https://instagram.com/enz0rd" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramLogoIcon
              size={28}
              className="cursor-pointer transition-colors hover:text-pink-500"
              weight="fill"
            />
          </a>
          <a href="https://linkedin.com/in/enz0rd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinLogoIcon
              size={28}
              className="cursor-pointer transition-colors hover:text-blue-500"
              weight="fill"
            />
          </a>
          <a href="https://github.com/enz0rd" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubLogoIcon
              size={28}
              className="cursor-pointer transition-colors hover:text-foreground"
              weight="fill"
            />
          </a>
        </div>
        <HiddenDuck />
        <span className="text-xs text-muted-foreground">{t.footer.builtWith}</span>
      </div>
    </footer>
  );
}
