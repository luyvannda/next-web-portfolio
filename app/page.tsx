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
        <section className="lg:relative lg:flex lg:flex-col lg:justify-center">
          <div className="z-10 flex flex-col items-center pt-32 md:pt-24 lg:relative lg:-translate-x-[2%] lg:translate-y-[45%] lg:items-start lg:space-y-8 lg:pt-0 xl:translate-x-[2%]">
            <Description />
            <Hero />
          </div>

          <HorseImage />
        </section>
      </div>

      {/* Footer Images */}

      <div className="absolute bottom-0 z-10 h-auto w-full md:-z-10 lg:-bottom-28 lg:z-10 xl:-bottom-48">
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
