interface SkillsListProp {
  skillObj: {
    name: string;
    level: string;
    color: string;
  };
}

const SkillsList = ({ skillObj: { name, level, color } }: SkillsListProp) => {
  return (
    <div
      className="space-x-1 rounded-md px-2 py-2 text-white"
      style={{ backgroundColor: color }}
    >
      <span>{name}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
};

export default SkillsList;
