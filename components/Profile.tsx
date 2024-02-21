import Image from "next/image";

export default function Profile() {
  return (
    <div className="text-white">
      <Image
        src="/projectsImage/profile.png"
        alt="My profile image"
        width={432}
        height={577}
        className="w-[160px] object-cover object-center"
      ></Image>
      <h1 className="text-2xl">Luy Vannda</h1>
      <h2 className="text-lg">Nick Name: Joe Joe</h2>
      <p className="text-sm">
        Front-end web developer and back-end student at freeCodeCamp, Udemy and
        Laracasts. I take on 100daysofcode challenge in daily basic. When not
        coding, I love to read tech news, go jogging and play video games.
      </p>
    </div>
  );
}
