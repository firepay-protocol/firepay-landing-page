import Image from "next/image";
import { Cairo } from "next/font/google";

const font = Cairo({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${font.className}`}
    ></main>
  );
}
