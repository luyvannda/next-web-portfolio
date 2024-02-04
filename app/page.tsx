import Description from "@/components/homepage/Description";
import Hero from "@/components/homepage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center flex flex-col items-center md:grid md:grid-cols-1 lg:grid-cols-2 -z-50"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="mt-36 md:mt-0">
          <div className="relative pl-20 sm:pl-28 md:static ">
            <Image
              src="/horse.png"
              alt="horse"
              height={280}
              width={280}
              className="absolute top-12 z-10 md:right-10 md:top-20 md:w-[400px] md:h-[400px] lg:top-[50%] lg:-translate-y-1/2"
            />

            <Image
              src="/cliff.webp"
              alt="cliff"
              width={480}
              height={480}
              className="absolute top-10 z-0 md:right-0 md:top-10 lg:top-[65%] lg:-translate-y-[50%] 2xl:top-[65%]"
            />
          </div>

          <div>
            <Description />
          </div>

          <div className="hidden lg:block">
            <Hero />
          </div>
        </div>

        <div className="lg:hidden">
          <Hero />
        </div>
      </div>

      <div className="absolute bottom-0 md:bottom-4 md:h-1/2 lg:bottom-0 z-[5] w-full h-auto">
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
