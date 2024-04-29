import React, { useState, useEffect } from "react";
import "./Dice.css";

const Dice = ({ numberOfDice }) => {
  const [diceValues, setDiceValues] = useState(new Array(numberOfDice).fill(1));

  const rollDice = () => {
    const newDiceValues = diceValues.map(
      () => Math.floor(Math.random() * 6) + 1
    );
    setDiceValues(newDiceValues);
  };

  const [dice2Values, setDice2Values] = useState(
    new Array(numberOfDice).fill(1)
  );

  const rollDice2 = () => {
    const newDice2Values = dice2Values.map(
      () => Math.floor(Math.random() * 6) + 1
    );
    setDice2Values(newDice2Values);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        rollDice();
        rollDice2();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [diceValues, dice2Values]);

  return (
    <div className="container">
      {diceValues.map((value, index) => (
        <div onClick={() => rollDice()} key={index}>
          {value}
        </div>
      ))}
      {dice2Values.map((value, index) => (
        <div onClick={() => rollDice2()} key={index}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default Dice;
