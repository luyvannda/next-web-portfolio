import Image from "next/image";
import SkillsList from "./SkillsList";
import { SkillData } from "@/constants/skillData";

export default function Profile() {
  return (
    <div className="mt-56 flex w-[90%] flex-col items-center justify-center rounded-lg border border-gray-200 text-white">
      <Image
        src="/projectsImage/profile.png"
        alt="My profile image"
        width={432}
        height={577}
        className="w-[160px] object-cover object-center"
      ></Image>
      <h1 className="text-2xl font-semibold">Luy Vannda</h1>
      <h2 className="text-lg">Nick Name: Joe Joe</h2>
      <p className="px-4 pb-4 text-justify text-sm">
        Front-end web developer and back-end student at freeCodeCamp, Udemy and
        Laracasts. I take on 100daysofcode challenge in daily basic. When not
        coding, I love to read tech news, go jogging and play video games.
      </p>
      {SkillData.map((skill) => (
        <SkillsList key={skill.id} name={skill.name} emoji={skill.emoji} />
      ))}
    </div>
  );
}
