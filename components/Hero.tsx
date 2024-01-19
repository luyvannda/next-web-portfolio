import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute flex bottom-2 z-[20] right-2 flex-col md:hidden gap-2">
        <Link
          href="/my-skills"
          className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
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
          className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"></div>
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
    </div>
  );
}
