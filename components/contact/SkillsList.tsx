interface SkillsListProp {
  name: string;
  emoji: string;
  color: string;
}

const SkillsList = ({ name, emoji, color }: SkillsListProp) => {
  return (
    <div
      className="rounded-md px-3 py-2 text-white"
      style={{ backgroundColor: color }}
    >
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  );
};

export default SkillsList;
