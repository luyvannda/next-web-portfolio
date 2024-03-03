import Image from "next/image";
import SkillsList from "./SkillsList";
import { SkillData } from "@/data/skillData";

export default function ProfileCard() {
  return (
    <div className="mt-32 flex w-[90%] flex-col items-center justify-center space-y-2 rounded-lg border border-gray-200 pb-4 text-white md:w-[80%]">
      <Image
        src="/projectsImage/profile.png"
        alt="My profile image"
        width={432}
        height={577}
        className="w-[160px] object-cover object-center pt-2"
      ></Image>

      <h1 className="text-2xl font-semibold">Luy Vannda</h1>
      <h2 className="text-lg italic">Nick Name: Joe Joe</h2>

      <div className="space-y-3 px-4 vs:px-6 md:space-y-4 md:px-10">
        <p className="text-justify text-sm tracking-wider md:text-base">
          A front-end developer and back-end student at freeCodeCamp, Udemy and
          Laracasts. I take on 100daysofcode challenge in daily basic. When not
          coding, I love to read tech news, go jogging and play video games.
        </p>

        <div className="flex flex-wrap gap-3">
          {SkillData.map((skill) => (
            <SkillsList key={skill.id} skillObj={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
