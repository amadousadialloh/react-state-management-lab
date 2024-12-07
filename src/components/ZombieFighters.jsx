const ZombieFighters = ({ zombiefighters, handleAddFighter }) => {
  return (
    <>
      <ul>
        {zombiefighters.map((zombiefighter, index) => (
          <li key={index}>
            {zombiefighter.img} {`name: ${zombiefighter.name}`},{" "}
            {`price: $${zombiefighter.price}`},{" "}
            {`Strength: ${zombiefighter.strength}`},{" "}
            {`agility: ${zombiefighter.agility}`}
            <button
              onClick={() => handleAddFighter(zombiefighter)}
              type="button"
            >
              ADD Fighter
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ZombieFighters;
