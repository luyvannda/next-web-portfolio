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
        <section className="lg:relative lg:flex lg:flex-col">
          <div className="​​​​ z-10 flex flex-col items-center pt-32 md:px-16 md:pt-24 lg:relative lg:-translate-x-[13%] lg:translate-y-[45%] lg:items-center lg:space-y-4 lg:px-0 lg:pt-0 xl:-translate-x-[21%]">
            <Description />
            <Hero />
          </div>

          <HorseImage />
        </section>
      </div>

      {/* Footer Images */}

      <div className="absolute bottom-0 -z-10 w-full  lg:-bottom-28 lg:z-0 xl:-bottom-48">
        <Image src="/trees.webp" alt="trees" width={2000} height={1000} />
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
