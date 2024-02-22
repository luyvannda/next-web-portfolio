interface SkillsListProp {
  name: string;
  emoji: string;
}

const SkillsList = ({ name, emoji }: SkillsListProp) => {
  return (
    <div>
      <span>{name}</span>
      <span>{emoji}</span>
    </div>
  );
};

export default SkillsList;
