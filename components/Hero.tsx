import Link from "next/link";

export default function Hero() {
  return (
    <div className="absolute flex bottom-2 z-[10] right-2 flex-col gap-2 md:bottom-0 md:top-28 md:relative md:flex-row md:justify-center">
      <Link
        href="/my-skills"
        className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
      >
        Learn more
      </Link>

      <Link href="/my-projects" className="btn">
        My projects
      </Link>

      <Link href="/contact-me" className="btn">
        Contact me
      </Link>
    </div>
  );
}
