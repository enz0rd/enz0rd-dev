"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para português"}
      onClick={toggleLocale}
    >
      {locale === "pt" ? "EN" : "PT"}
    </Button>
  );
}
