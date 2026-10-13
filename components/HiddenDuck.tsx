"use client";

import Image from "next/image";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguage } from "@/components/providers/language-provider";

export function HiddenDuck() {
  const { locale } = useLanguage();

  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger>
        <Image
          src="/duck.webp"
          alt="hidden duck"
          height={20}
          width={20}
          className="cursor-pointer opacity-0 transition-opacity duration-300 hover:opacity-100"
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {locale === "pt"
            ? "Você encontrou o pato escondido! parabéns!"
            : "You found the hidden duck! congratulations!"}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
