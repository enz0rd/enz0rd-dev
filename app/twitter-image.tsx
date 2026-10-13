import { renderOgImage, ogImageSize } from "@/lib/og-image";

export const alt = "enz0rd.dev — Enzo Rossi Daltoé, Fullstack Developer";
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
