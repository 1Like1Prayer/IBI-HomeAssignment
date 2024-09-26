import { Dispatch, SetStateAction, useState } from 'react';
import Score from './score/Score.tsx';

interface Player {
  name: string;
  turn: boolean;
  setTurn: Dispatch<SetStateAction<boolean>>;
}
const Player = ({ name, turn, setTurn }: Player) => {
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [currentScore, setCurrentScore] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-y-10 items-center ">
      <div className="flex flex-row gap-x-10 items-center">
        <div className=" text-9xl">{name}</div>
        {turn ? (
          <div className="w-12 h-12 bg-red-500 rounded-full"></div>
        ) : (
          <div className="w-12 h-12 invisible"></div>
        )}
      </div>
      <div className=" text-9xl text-red-600">{playerScore}</div>
      <Score score={currentScore} />
    </div>
  );
};

export default Player;
