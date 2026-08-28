import { ExternalLink, Mail } from "lucide-react";

export default function ExperiencesSection() {
  return (
    <div
      id="experiences"
      className="container flex flex-col items-center gap-2 justify-center mx-auto"
    >
      <h1 className="text-3xl font-bold">experiences:</h1>
      <span className="text-md">Here are my professional experiences.</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-black text-lg border-b">active:</h2>
          <div className="flex flex-col gap-1 border-b">
            <span>Fullstack developer Jr. at</span>
            <a href="https://gdoor.com.br/" target="_blank" className="flex gap-2 items-center hover:text-orange-500">Gdoor Zucchetti <ExternalLink size={16} /></a>
          </div>
          <div className="flex flex-col gap-1">
            <span>Fullstack developer </span>
            <a href="mailto:enzorossidaltoe@hotmail.com.br" target="_blank" className="flex gap-2 items-center hover:text-green-500">freelancer {"(reach out!)"} <Mail size={16} /></a>            
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-black text-lg border-b">past:</h2>
          <div className="flex flex-col gap-1 border-b">
            <span>Quality Assurance Analyst </span>
            <a href="https://gdoor.com.br/" target="_blank" className="flex gap-2 items-center hover:text-orange-500">Gdoor Zucchetti <ExternalLink size={16} /></a>
          </div>
          <div className="flex flex-col gap-1">
            <span>Customer Support at </span>
            <a href="https://gdoor.com.br/" target="_blank" className="flex gap-2 items-center hover:text-orange-500">Gdoor Zucchetti <ExternalLink size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
