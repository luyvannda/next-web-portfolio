import Description from "@/components/homepage/Description";
import Hero from "@/components/homepage/Hero";
import HorseImage from "@/components/homepage/HorseImage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <div
        className="-z-50 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <section className="relative z-50 flex flex-col items-center pt-32 md:pt-24 lg:-translate-x-[2%] lg:translate-y-[45%] lg:items-start lg:pt-16 xl:translate-x-[2%]">
          <Description />
          <Hero />
        </section>
        <HorseImage />
      </div>

      {/* Footer Images */}

      <div className="absolute bottom-0 z-0 h-auto w-full lg:-bottom-28 xl:-bottom-48">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="h-full w-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute left-0 top-10 z-[5]"
      />
    </main>
  );
}
