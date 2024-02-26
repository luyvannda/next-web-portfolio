export default function SkillHeading() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-white xs:text-4xl md:text-[50px]">
        Skills{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          {" "}
          &{" "}
        </span>
        Technologies
      </h1>
      <p className="text-lg text-gray-400 xs:text-xl md:text-2xl">
        Master latest web development tech, <br className="md:hidden" />{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          {" "}
          one stack at a time.
        </span>
      </p>
    </div>
  );
}
