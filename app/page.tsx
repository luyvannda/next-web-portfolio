import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <main className="w-screen h-screen relative overflow-hidden" >

      <div className="w-full h-full bg-cover bg-center flex flex-col items-center" style={{ backgroundImage: "url(/main-bg.webp)" }}>

        <div className="mt-24">

          <div className="relative pl-20">
            <Image
              src="/horse.png"
              alt="horse"
              height={280}
              width={280}
              className="absolute top-20 z-[5]"
            />

            <Image
              src="/cliff.webp"
              alt="cliff"
              width={480}
              height={480}
              className="absolute top-20 z-[5]"
            />

          </div>

          <div id="title-description" className="z-[10]">

            <h1 className="text-[1.5rem] text-white font-semibold">
              Make anything possible <br /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Web Development
              </span>
            </h1>

            <p className="text-gray-200 hidden md:block max-w-[60ch] z-[6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo aliquid aspernatur quae reprehenderit quod cum labore.</p>

          </div>

          {/* below code design for mobile devices */}

          <div className="absolute flex bottom-2 z-[20] right-2 flex-col md:hidden gap-2">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn more
            </Link>

            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              My projects
            </Link>

            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Contact me
            </Link>
          </div>


          <div className="hidden flex-col md:flex-row  gap-5 z-[6]">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn more
            </Link>

            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20">

              </div>
              My projects
            </Link>

            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"></div>
              Contact me
            </Link>
          </div>

          <div className="absolute bottom-0 z-[5] w-full h-auto">
            <Image
              src="/trees.webp"
              alt="trees"
              width={1000}
              height={1000}
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

      </div>

    </main>


  )
}
