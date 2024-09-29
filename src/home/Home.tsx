import Player from '../player/Player.tsx';
import { useContext } from 'react';
import Board from '../board/Board.tsx';
import {
  GameContext,
  PlayerEnum
} from '../context/game-context/GameContext.tsx';

const Home = () => {
  const { turn } = useContext(GameContext);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Player turn={turn} user={PlayerEnum.Player1} />
      <Board />
      <Player turn={turn} user={PlayerEnum.Player2} />
    </div>
  );
};

export default Home;
