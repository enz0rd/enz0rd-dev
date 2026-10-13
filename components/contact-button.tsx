"use client";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";

const CONTACT_EMAIL = "enzorossidaltoe@hotmail.com.br";

export function ContactButton({ className }: { className?: string }) {
  const { t } = useLanguage();
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.contact.subject)}`;

  return (
    <Button asChild className={className}>
      <a href={href}>
        <Mail className="size-4" />
        <span className="hidden sm:inline">{t.contact.label}</span>
      </a>
    </Button>
  );
}
