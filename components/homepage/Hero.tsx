import Link from "next/link";

export default function Hero() {
  return (
    <div className="absolute bottom-2 right-2 z-50 flex flex-col gap-2 md:static md:mt-4 md:flex-row md:gap-4 lg:ml-16">
      <Link href="/my-skills" className="btn">
        My Skills
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
