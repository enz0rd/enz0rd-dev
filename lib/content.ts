export type Locale = "pt" | "en";

export type Project = {
  name: string;
  href: string;
  description: string;
  tags: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  href?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  note?: string;
};

export type Content = {
  nav: {
    presentation: string;
    projects: string;
    experience: string;
    certifications: string;
    skills: string;
  };
  hero: {
    role: string;
    location: string;
    bio: string;
    ctaProjects: string;
  };
  projects: {
    title: string;
    items: Project[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  certifications: {
    title: string;
    issuedLabel: string;
    items: Certification[];
  };
  skills: {
    title: string;
  };
  footer: {
    social: string;
    builtWith: string;
  };
  contact: {
    label: string;
    subject: string;
  };
};

const GDOOR_URL = "https://gdoor.com.br/";
const ZUCCHETTI_URL = "https://www.zucchettibrasil.com.br/";

export const content: Record<Locale, Content> = {
  pt: {
    nav: {
      presentation: "Apresentação",
      projects: "Projetos",
      experience: "Experiências",
      certifications: "Certificações",
      skills: "Habilidades",
    },
    hero: {
      role: "Desenvolvedor Fullstack",
      location: "Concórdia, SC, Brasil",
      bio: "Desenvolvedor fullstack com experiência em TypeScript, JavaScript, React e Node.js na construção de aplicações robustas e escaláveis. Comecei a programar em janeiro de 2023 e já desenvolvi projetos como um sistema de email, uma plataforma educacional inspirada no Google Classroom e diversas APIs RESTful com Express.js. Meu foco é entregar código de alta qualidade e fácil manutenção.",
      ctaProjects: "Ver projetos",
    },
    projects: {
      title: "Projetos",
      items: [
        {
          name: "quickurl",
          href: "https://quickurl.com.br",
          description:
            "Encurtador de URLs rápido e minimalista, com slugs personalizados e estatísticas de clique.",
          tags: ["Next.js", "PostgreSQL"],
        },
        {
          name: "GoClass",
          href: "https://dev-goclass.vercel.app/",
          description:
            "Plataforma educacional inspirada no Google Classroom para gerenciar turmas, atividades e notas.",
          tags: ["React", "Node.js"],
        },
        {
          name: "Estúdio Puçá",
          href: "https://estudiopuca.com.br",
          description:
            "Site institucional desenvolvido para um estúdio criativo, com foco em uma vitrine limpa do trabalho.",
          tags: ["Next.js"],
        },
        {
          name: "Yakibot",
          href: "https://github.com/enz0rd/yakibot",
          description:
            "Bot para Discord com comandos de moderação e utilidades para servidores da comunidade.",
          tags: ["Node.js", "Discord.js"],
        },
        {
          name: "ToDoList",
          href: "https://github.com/enz0rd/ToDoList_Rocketseat",
          description:
            "Aplicativo de gerenciamento de tarefas construído durante os estudos de fundamentos do React.",
          tags: ["React"],
        },
        {
          name: "LumaClone",
          href: "https://github.com/enz0rd/LumaClone",
          description:
            "Clone de front-end da plataforma de eventos Luma, recriando sua interface e animações.",
          tags: ["React", "CSS"],
        },
        {
          name: "Instaz0rd",
          href: "https://github.com/enz0rd/instaz0rd",
          description:
            "Clone de feed social inspirado no Instagram, criado para praticar arquitetura de componentes.",
          tags: ["React"],
        },
        {
          name: "EmailProto",
          href: "https://github.com/enz0rd/Email-Prototype",
          description:
            "Protótipo de sistema de email explorando fluxos de envio, caixa de entrada e templates.",
          tags: ["Node.js"],
        },
        {
          name: "muito mais",
          href: "https://github.com/enz0rd?tab=repositories",
          description: "Confira o restante dos meus repositórios no GitHub.",
          tags: [],
        },
      ],
    },
    experience: {
      title: "Experiências profissionais",
      items: [
        {
          role: "Desenvolvedor Web Júnior",
          company: "Zucchetti Brasil",
          period: "Jun 2026 — Atual",
          href: ZUCCHETTI_URL,
        },
        {
          role: "Analista de Sistemas",
          company: "Gdoor Zucchetti",
          period: "Jun 2024 — Jul 2026",
          href: GDOOR_URL,
        },
        {
          role: "Desenvolvedor Back End",
          company: "Bright",
          period: "Mar 2024 — Ago 2024",
        },
        {
          role: "Suporte",
          company: "Gdoor Zucchetti",
          period: "Jan 2023 — Jun 2024",
          href: GDOOR_URL,
        },
        {
          role: "Designer Gráfico",
          company: "MicroSite Agência Digital",
          period: "Fev 2022 — Dez 2022",
        },
        {
          role: "Estagiário",
          company: "CIEE - Centro de Integração Empresa-Escola",
          period: "Nov 2021 — Fev 2022",
        },
      ],
    },
    certifications: {
      title: "Certificações",
      issuedLabel: "Emitido em",
      items: [
        { name: "Programador Web", issuer: "Senac Santa Catarina", date: "Jan 2025" },
        {
          name: "Programador de Sistemas",
          issuer: "Senac Santa Catarina",
          date: "Ago 2024",
          note: "Programa Jovem Programador 2024 · 200 horas",
        },
        { name: "Fundamentos do React", issuer: "Rocketseat", date: "Nov 2024" },
        { name: "Curso de Java", issuer: "Rocketseat", date: "Out 2023" },
      ],
    },
    skills: { title: "Habilidades" },
    footer: {
      social: "Você pode me encontrar em",
      builtWith: "feito com Next.js",
    },
    contact: {
      label: "Contato",
      subject: "Contato via portfólio",
    },
  },
  en: {
    nav: {
      presentation: "About",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      skills: "Skills",
    },
    hero: {
      role: "Fullstack Developer",
      location: "Concórdia, SC, Brazil",
      bio: "Fullstack developer experienced in TypeScript, JavaScript, React and Node.js, building robust and scalable applications. I started programming in January 2023 and have since built projects ranging from an email system to an educational platform inspired by Google Classroom, plus several RESTful APIs with Express.js. My focus is shipping high-quality, maintainable code.",
      ctaProjects: "View projects",
    },
    projects: {
      title: "Projects",
      items: [
        {
          name: "quickurl",
          href: "https://quickurl.com.br",
          description: "A fast, minimal URL shortener with custom slugs and click analytics.",
          tags: ["Next.js", "PostgreSQL"],
        },
        {
          name: "GoClass",
          href: "https://dev-goclass.vercel.app/",
          description:
            "An educational platform inspired by Google Classroom for managing classes, assignments and grades.",
          tags: ["React", "Node.js"],
        },
        {
          name: "Estúdio Puçá",
          href: "https://estudiopuca.com.br",
          description:
            "A business website built for a creative studio, focused on a clean showcase of their work.",
          tags: ["Next.js"],
        },
        {
          name: "Yakibot",
          href: "https://github.com/enz0rd/yakibot",
          description: "A custom Discord bot with moderation and utility commands for community servers.",
          tags: ["Node.js", "Discord.js"],
        },
        {
          name: "ToDoList",
          href: "https://github.com/enz0rd/ToDoList_Rocketseat",
          description: "A task management app built while studying React fundamentals.",
          tags: ["React"],
        },
        {
          name: "LumaClone",
          href: "https://github.com/enz0rd/LumaClone",
          description: "A front-end clone of the Luma events platform, recreating its UI and animations.",
          tags: ["React", "CSS"],
        },
        {
          name: "Instaz0rd",
          href: "https://github.com/enz0rd/instaz0rd",
          description: "An Instagram-inspired social feed clone built to practice component architecture.",
          tags: ["React"],
        },
        {
          name: "EmailProto",
          href: "https://github.com/enz0rd/Email-Prototype",
          description: "A prototype email system exploring sending, inbox and template rendering flows.",
          tags: ["Node.js"],
        },
        {
          name: "much more",
          href: "https://github.com/enz0rd?tab=repositories",
          description: "Check out the rest of my repositories on GitHub.",
          tags: [],
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          role: "Junior Web Developer",
          company: "Zucchetti Brasil",
          period: "Jun 2026 — Present",
          href: ZUCCHETTI_URL,
        },
        {
          role: "Systems Analyst",
          company: "Gdoor Zucchetti",
          period: "Jun 2024 — Jul 2026",
          href: GDOOR_URL,
        },
        {
          role: "Back End Developer",
          company: "Bright",
          period: "Mar 2024 — Aug 2024",
        },
        {
          role: "Support",
          company: "Gdoor Zucchetti",
          period: "Jan 2023 — Jun 2024",
          href: GDOOR_URL,
        },
        {
          role: "Graphic Designer",
          company: "MicroSite Agência Digital",
          period: "Feb 2022 — Dec 2022",
        },
        {
          role: "Intern",
          company: "CIEE - Centro de Integração Empresa-Escola",
          period: "Nov 2021 — Feb 2022",
        },
      ],
    },
    certifications: {
      title: "Certifications",
      issuedLabel: "Issued",
      items: [
        { name: "Programador Web", issuer: "Senac Santa Catarina", date: "Jan 2025" },
        {
          name: "Programador de Sistemas",
          issuer: "Senac Santa Catarina",
          date: "Aug 2024",
          note: "Jovem Programador 2024 program · 200 hours",
        },
        { name: "Fundamentos do React", issuer: "Rocketseat", date: "Nov 2024" },
        { name: "Curso de Java", issuer: "Rocketseat", date: "Oct 2023" },
      ],
    },
    skills: { title: "Skills" },
    footer: {
      social: "You can find me on",
      builtWith: "built with Next.js",
    },
    contact: {
      label: "Contact",
      subject: "Portfolio contact",
    },
  },
};

export const SKILLS: { name: string; hover: string }[] = [
  { name: "TypeScript", hover: "hover:text-blue-500" },
  { name: "JavaScript", hover: "hover:text-yellow-500" },
  { name: "React", hover: "hover:text-sky-500" },
  { name: "Next.js", hover: "hover:text-foreground" },
  { name: "Node.js", hover: "hover:text-green-500" },
  { name: "Vue.js", hover: "hover:text-emerald-500" },
  { name: "PHP", hover: "hover:text-violet-500" },
  { name: "Laravel", hover: "hover:text-red-500" },
  { name: "PostgreSQL", hover: "hover:text-blue-400" },
  { name: "MySQL", hover: "hover:text-cyan-500" },
  { name: "HTML", hover: "hover:text-orange-500" },
  { name: "CSS", hover: "hover:text-blue-500" },
  { name: "Socket.io", hover: "hover:text-purple-500" },
  { name: "RabbitMQ", hover: "hover:text-orange-600" },
  { name: "AWS", hover: "hover:text-amber-500" },
  { name: "Playwright", hover: "hover:text-green-600" },
];
