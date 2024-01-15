import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <main className="w-screen h-screen relative overflow-x-hidden bg-cover bg-center flex items-center" style={{ backgroundImage: "url(/main-bg.webp)", backgroundRepeat: "repeat-y" }}>

      <div className="flex flex-col pl-20 pt-20 pb-56 gap-5 z-[10] max-w[750px] md:pl-40 md:pb-20">

        <div className="relative mt-32 z-[10]">
          <Image
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
            className="absolute top-20 "
          />

          <Image
            src="/cliff.webp"
            alt="cliff"
            width={480}
            height={480}
            className="relative top-20"
          />
        </div>

        <div id="title-description">

          <h1 className="text-sm lg:text-[50px] text-white font-semibold">
            Make anything possible <br /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web Development
            </span>
          </h1>

          <p className="text-gray-200 hidden md:block max-w-[60ch] z-[6]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo aliquid aspernatur quae reprehenderit quod cum labore.</p>

        </div>



        {/* below code design for mobile devices */}

        <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
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


    </main>


  )
}
