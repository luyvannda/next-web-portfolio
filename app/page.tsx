import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="mt-24">
          <div className="relative pl-20 md:static md:pl-0">
            <Image
              src="/horse.png"
              alt="horse"
              height={280}
              width={280}
              className="absolute top-20 z-[5] md:right-10 md:top-32 md:w-[400px] md:h-[400px]"
            />

            <Image
              src="/cliff.webp"
              alt="cliff"
              width={480}
              height={480}
              className="absolute top-20 z-[5] md:right-0"
            />
          </div>

          <div id="title-description" className="z-[10]">
            <h1 className="text-xl md:text-2xl text-white font-semibold">
              Make anything possible <br className="md:hidden" /> with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Web Development
              </span>
            </h1>

            <p className="text-lg text-gray-200 hidden md:block max-w-[60ch] z-[6]">
              Hello I am Joe Joe, a NextJS Front End Developer with 1 year
              experience in React.js, Bootstrap and Sass. This website is built
              with Tailwind, NextJS and Typescript.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 md:bottom-32 z-[5] w-full h-auto">
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
          className="absolute top-10 left-0 z-[10]"
        />
      </div>
    </main>
  );
}
