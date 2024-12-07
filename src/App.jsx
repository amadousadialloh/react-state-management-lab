import { useState } from "react";
import ZombieFighters from "./components/ZombieFighters";
import Money from "./components/Money";
import Team from "./components/Team";
import TotalStrength from "./components/TotalStrength";

const zombieFighters = [
  {
    name: "Survivor",
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://via.placeholder.com/150/92c952",
  },
  {
    name: "Scavenger",
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://via.placeholder.com/150/771796",
  },
  {
    name: "Shadow",
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://via.placeholder.com/150/24f355",
  },
  {
    name: "Tracker",
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/d32776",
  },
  {
    name: "Sharpshooter",
    price: 20,
    strength: 6,
    agility: 8,
    img: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    name: "Medic",
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://via.placeholder.com/150/66b7d2",
  },
  {
    name: "Engineer",
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://via.placeholder.com/150/56acb2",
  },
  {
    name: "Brawler",
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://via.placeholder.com/150/8985dc",
  },
  {
    name: "Infiltrator",
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://via.placeholder.com/150/392537",
  },
  {
    name: "Leader",
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/602b9e",
  },
];

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombiefighters, setZombieFighters] = useState(zombieFighters);
  const [totalStrength, setTotalStrength] = useState(0);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      return console.log("Not enough money");
    }
    const updatedTeam = [...team, fighter];
    setTeam(updatedTeam);
    setMoney((preview) => preview - fighter.price);

    const updatedStrength = updatedTeam.reduce(
      (acc, curr) => acc + curr.strength,
      0
    );
    setTotalStrength(updatedStrength);
  };

  return (
    <>
      <Money money={money} />
      <TotalStrength totalStrength={totalStrength} />
      <ZombieFighters
        handleAddFighter={handleAddFighter}
        zombiefighters={zombiefighters}
      />
      <h3>See your built team below:</h3>
      {team.length === 0 ? <p>Pick some team members</p> : <Team team={team} />}
    </>
  );
};

export default App;
