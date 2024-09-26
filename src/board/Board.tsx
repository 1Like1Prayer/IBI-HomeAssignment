import { useState } from 'react';

const Board = () => {
  const [dice, setDice] = useState<number[]>([1, 1]);
  return (
    <div className="flex flex-col align-middle gap-10">
      <button>New Game</button>
      {dice.map((die) => (
        <div className="self-center">{die}</div>
      ))}
    </div>
  );
};

export default Board;
