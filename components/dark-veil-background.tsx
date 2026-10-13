"use client";

import * as React from "react";

import DarkVeil from "@/components/DarkVeil";
import { useTheme } from "@/components/providers/theme-provider";

export function DarkVeilBackground() {
  const { theme, mounted } = useTheme();
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x, y });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-background" />;
  }

  const translateX = offset.x * 14;
  const translateY = offset.y * 14 + scrollY * 0.06;

  if (theme !== "dark") {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
        <div
          className="animate-float-slow absolute -top-32 -left-32 size-128 rounded-full bg-sky-300/30 blur-3xl transition-transform duration-300 ease-out dark:bg-sky-500/10"
          style={{ transform: `translate3d(${translateX}px, ${translateY}px, 0)` }}
        />
        <div
          className="animate-float-slower absolute top-1/3 -right-24 size-112 rounded-full bg-emerald-300/25 blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translate3d(${-translateX}px, ${-translateY}px, 0)` }}
        />
        <div
          className="animate-float-slow absolute bottom-0 left-1/3 size-104 rounded-full bg-violet-300/20 blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translate3d(${translateX * 0.6}px, ${translateY * 0.6}px, 0)` }}
        />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 -z-10 min-h-screen w-screen scale-105 transition-transform duration-300 ease-out"
      style={{ transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(1.05)` }}
    >
      <DarkVeil
        hueShift={150}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
      />
    </div>
  );
}
