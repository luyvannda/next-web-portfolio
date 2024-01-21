import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute flex bottom-2 z-[20] right-2 flex-col md:hidden gap-2">
        <Link href="/my-skills" className="btn">
          Learn more
        </Link>

        <Link href="/my-projects" className="btn">
          My projects
        </Link>

        <Link href="/contact-me" className="btn">
          Contact me
        </Link>
      </div>

      <div className="hidden flex-col md:flex-row  gap-5 z-[6]">
        <Link href="/my-skills" className="btn">
          Learn more
        </Link>

        <Link href="/my-projects" className="btn">
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"></div>
          My projects
        </Link>

        <Link href="/contact-me" className="btn">
          <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"></div>
          Contact me
        </Link>
      </div>
    </div>
  );
}
