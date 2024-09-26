import Player from '../player/Player.tsx';
import { useContext, useState } from 'react';
import Board from '../board/Board.tsx';
import { GameScoreContext } from '../context/score-context/ScoreContext.tsx';

interface GameScore {
  player1: number;
  player2: number;
}
const Home = () => {
  const [turn, setTurn] = useState<boolean>(true);
  // const [goal, setGoal] = useState<number>(100);
  // const [gameScore, setGameScore] = useState<GameScore>({
  //
  //   player1: 0,
  //   player2: 0
  // });
  const gameScore = useContext(GameScoreContext);
  console.log(gameScore?.goal);
  return (
    <div className="w-full flex  justify-center">
      <Player name="Tom" turn={turn} setTurn={setTurn} />
      <Board />
      <Player name="John" turn={!turn} setTurn={setTurn} />
    </div>
  );
};

export default Home;
