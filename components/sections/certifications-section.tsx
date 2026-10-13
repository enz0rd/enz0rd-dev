"use client";

import { Award } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

export function CertificationsSection() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="container mx-auto scroll-mt-16 px-4">
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">{t.certifications.title}</h2>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {t.certifications.items.map((cert, index) => (
          <Reveal key={cert.name} delay={index * 60}>
            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Award className="size-4 shrink-0 text-muted-foreground" />
                  {cert.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="gap-1">
                <p className="text-sm">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">
                  {t.certifications.issuedLabel} {cert.date}
                </p>
                {cert.note && <p className="text-xs text-muted-foreground">{cert.note}</p>}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
