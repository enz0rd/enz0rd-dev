import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import DarkVeil from "@/components/DarkVeil";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "enz0rd.dev",
  description: "Portfolio of @enz0rd, a fullstack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-900">
        <div className="fixed inset-0 -z-10 min-h-screen w-screen">
          <DarkVeil
            hueShift={150}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
            
          />
        </div>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
