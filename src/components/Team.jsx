const Team = ({ team }) => {
  return (
    <>
      <ul>
        {team.map((character, index) => (
          <li key={index}>
            {character.img} {`name: ${character.name}`},{" "}
            {`price: $${character.price}`}, {`Strength: ${character.strength}`},{" "}
            {`agility: ${character.agility}`}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Team;
