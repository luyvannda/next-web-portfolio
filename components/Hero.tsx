import Link from "next/link";

export default function Hero() {
  return (
    <div className="absolute flex bottom-2 z-[10] right-2 flex-col gap-2 md:bottom-0 md:top-28 md:relative md:flex-row md:gap-4 md:justify-center lg:top-8">
      <Link href="/my-skills" className="btn">
        Learn More
      </Link>

      <Link href="/my-projects" className="btn">
        My Projects
      </Link>

      <Link href="/contact-me" className="btn">
        Contact Me
      </Link>
    </div>
  );
}
