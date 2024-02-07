import Description from "@/components/homepage/Description";
import Hero from "@/components/homepage/Hero";
import HorseImage from "@/components/homepage/HorseImage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center -z-50"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <section className="pt-32 md:pt-24 flex flex-col items-center lg:items-start lg:translate-y-[45%] lg:translate-x-[2%]">
          <Description />
          <Hero />
        </section>
        <HorseImage />
      </div>

      {/* Footer Images */}

      <div className="absolute bottom-0 lg:-bottom-28 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-[5]"
      />
    </main>
  );
}
