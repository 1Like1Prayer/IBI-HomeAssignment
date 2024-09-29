import { useContext, useEffect, useState } from 'react';
import Score from './score/Score.tsx';
import {
  GameContext,
  PlayerEnum
} from '../context/game-context/GameContext.tsx';

interface Player {
  turn: PlayerEnum;
  user: PlayerEnum;
}
const Player = ({ turn, user }: Player) => {
  const { playersState, goal, setGameDone, gameDone } = useContext(GameContext);
  const [gameWon, setGameWon] = useState<boolean>(gameDone);
  useEffect(() => {
    if (playersState[user].total > goal) {
      setGameWon(true);
      setGameDone(true);
    }
  }, [playersState]);

  useEffect(() => {
    if (!gameDone) setGameWon(false);
  }, [gameDone]);

  return (
    <div
      className={`w-full h-full flex flex-col gap-y-10 items-center justify-center ${turn === user ? 'bg-white' : 'bg-gray-200'}`}
    >
      <div className="flex flex-row gap-x-10 items-center">
        <div className=" text-5xl">{gameWon ? 'Winner!!!' : user}</div>
        {turn === user && !gameWon ? (
          <div className="w-10 h-10 bg-red-500 rounded-full"></div>
        ) : (
          <div className="w-10 h-10 invisible"></div>
        )}
      </div>
      <div className=" text-5xl text-red-600">{playersState[user].total}</div>
      <Score score={playersState[user].curr} />
    </div>
  );
};

export default Player;
