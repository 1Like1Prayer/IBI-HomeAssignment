import { useContext, useEffect, useState } from 'react';
import {
  GameContext,
  PlayerEnum
} from '../context/game-context/GameContext.tsx';
import { sum } from 'lodash';

const rollDie = () => Math.floor(Math.random() * 6) + 1;
const rollDice = () => [rollDie(), rollDie()];

const Board = () => {
  const {
    setPlayersState,
    turn,
    setTurn,
    goal,
    setGoal,
    gameDone,
    setGameDone
  } = useContext(GameContext);
  const [dice, setDice] = useState<number[]>([0, 0]);
  const [gameScore, setGameScore] = useState<number>(goal);

  const handleNewGame = () => {
    setPlayersState((prev) => ({
      ...prev,
      Player1: { curr: 0, total: 0 },
      Player2: { curr: 0, total: 0 }
    }));
    setGoal(gameScore);
    setGameDone(false);
  };
  const handleTurnChange = () => {
    setPlayersState((prev) => ({
      ...prev,
      [turn]: {
        ...prev[turn],
        total: prev[turn].total + prev[turn].curr,
        curr: 0
      }
    }));
    setTurn(
      turn === PlayerEnum.Player1 ? PlayerEnum.Player2 : PlayerEnum.Player1
    );
    setDice([0, 0]);
  };

  useEffect(() => {
    if (!dice.every((die) => die === 6)) {
      setPlayersState((prev) => ({
        ...prev,
        [turn]: { ...prev[turn], curr: prev[turn].curr + sum(dice) }
      }));
    } else {
      setPlayersState((prev) => ({
        ...prev,
        [turn]: { ...prev[turn], total: 0, curr: 0 }
      }));
      setTurn(
        turn === PlayerEnum.Player1 ? PlayerEnum.Player2 : PlayerEnum.Player1
      );
      setDice([0, 0]);
    }
  }, [dice]);

  return (
    <div className="w-1/6 h-full flex flex-col align-middle justify-center gap-20">
      <button className="text-l" onClick={handleNewGame}>
        New Game
      </button>
      {dice.map((die, index) => (
        <div key={index} className="self-center">
          {die}
        </div>
      ))}
      <button disabled={gameDone} onClick={() => setDice(rollDice)}>
        ROLL DICE
      </button>
      <button disabled={gameDone} onClick={handleTurnChange}>
        HOLD
      </button>
      <input
        type="number"
        value={gameScore}
        onChange={(event) => {
          const { value } = event.target;
          setGameScore(Number(value));
        }}
      />
    </div>
  );
};

export default Board;
