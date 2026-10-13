import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/providers";
import { DarkVeilBackground } from "@/components/dark-veil-background";
import { SITE_URL, SITE_NAME, SEO_TITLE, SEO_DESCRIPTION, SEO_KEYWORDS } from "@/lib/seo";
import { SKILLS } from "@/lib/content";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Enzo Rossi Daltoé", url: SITE_URL }],
  creator: "Enzo Rossi Daltoé",
  publisher: "Enzo Rossi Daltoé",
  applicationName: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    locale: "pt_BR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Enzo Rossi Daltoé",
      alternateName: "enz0rd",
      url: SITE_URL,
      jobTitle: "Fullstack Developer",
      description: SEO_DESCRIPTION,
      worksFor: {
        "@type": "Organization",
        name: "Zucchetti Brasil",
        url: "https://www.zucchettibrasil.com.br/",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Concórdia",
        addressRegion: "SC",
        addressCountry: "BR",
      },
      sameAs: [
        "https://github.com/enz0rd",
        "https://linkedin.com/in/enz0rd",
        "https://instagram.com/enz0rd",
      ],
      knowsAbout: SKILLS.map((skill) => skill.name),
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Unochapecó",
          url: "https://uno.edu.br/",
        },
        {
          "@type": "EducationalOrganization",
          name: "Senac Santa Catarina",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      about: { "@id": `${SITE_URL}/#person` },
      inLanguage: ["pt-BR", "en-US"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${jetBrainsMono.className} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <DarkVeilBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
