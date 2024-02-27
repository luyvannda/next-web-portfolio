interface SkillsListProp {
  skillObj: {
    name: string;
    emoji: string;
    color: string;
  };
}

const SkillsList = ({ skillObj: { name, emoji, color } }: SkillsListProp) => {
  return (
    <div
      className="space-x-1 rounded-md px-2 py-2 text-white"
      style={{ backgroundColor: color }}
    >
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  );
};

export default SkillsList;
