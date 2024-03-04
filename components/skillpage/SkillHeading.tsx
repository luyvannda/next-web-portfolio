export default function SkillHeading() {
  return (
    <div className="flex flex-col items-center md:space-y-2">
      <h1 className="text-2xl font-semibold text-white vs:text-3xl xs:text-4xl md:text-5xl">
        Skills{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          {" "}
          &{" "}
        </span>
        Technologies
      </h1>
      <p className="text-base text-gray-400 vs:text-lg xs:text-xl md:text-2xl">
        Master latest web development tech, <br className="md:hidden" />{" "}
        <span className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          {" "}
          one stack at a time.
        </span>
      </p>
    </div>
  );
}
