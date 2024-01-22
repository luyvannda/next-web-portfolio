import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center flex flex-col items-center md:grid md:grid-cols-1 -z-50"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="mt-36 sm:mt-64 md:mt-20">
          <div className="relative pl-20 md:static md:pl-0">
            <Image
              src="/horse.png"
              alt="horse"
              height={280}
              width={280}
              className="absolute top-20 z-0 md:right-10 md:top-20 md:w-[400px] md:h-[400px]"
            />

            <Image
              src="/cliff.webp"
              alt="cliff"
              width={480}
              height={480}
              className="absolute top-20 z-0 md:right-0 md:top-10"
            />
          </div>

          <div className="z-10 md:relative md:top-20 md:flex md:flex-col">
            <h1 className="text-2xl md:text-3xl text-white font-semibold md:self-center">
              Make anything possible <br className="md:hidden" /> with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Web Development
              </span>
            </h1>

            <p className="text-2xl mt-4 mb-4 text-gray-200 hidden md:block max-w-[60ch] z-[10] md:text-center md:px-4 md:self-center">
              Hello I am Joe Joe, a Front End Developer with 1 year experience
              in React.js, Bootstrap and Sass. This website is built with
              Tailwind, NextJS and Typescript.
            </p>
          </div>

          <Hero />
        </div>

        <div className="absolute bottom-0 md:bottom-12 z-[5] w-full h-auto">
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
      </div>
    </main>
  );
}
