import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react';

export enum PlayerEnum {
  Player1 = 'Player1',
  Player2 = 'Player2'
}

type PlayersState = {
  [key in PlayerEnum]: { total: number; curr: number };
};

interface GameContextState {
  goal: number;
  setGoal: Dispatch<SetStateAction<number>>;
  playersState: PlayersState;
  setPlayersState: Dispatch<SetStateAction<PlayersState>>;
  turn: PlayerEnum;
  setTurn: Dispatch<SetStateAction<PlayerEnum>>;
  gameDone: boolean;
  setGameDone: Dispatch<SetStateAction<boolean>>;
}

interface GameScoreProviderProps {
  children: ReactNode;
}

const gameInitValues = {
  goal: 100,
  setGoal: () => {},
  playersState: {
    Player1: { curr: 0, total: 0 },
    Player2: { curr: 0, total: 0 }
  },
  setPlayersState: () => {},
  turn: PlayerEnum.Player1,
  setTurn: () => {},
  gameDone: false,
  setGameDone: () => {}
};

export const GameContext = createContext<GameContextState>(gameInitValues);

export const GameScoreContextProvider = ({
  children
}: GameScoreProviderProps) => {
  const [goal, setGoal] = useState<number>(100);
  const [playersState, setPlayersState] = useState<PlayersState>({
    Player1: { curr: 0, total: 0 },
    Player2: { curr: 0, total: 0 }
  });
  const [turn, setTurn] = useState<PlayerEnum>(PlayerEnum.Player1);
  const [gameDone, setGameDone] = useState<boolean>(false);

  return (
    <GameContext.Provider
      value={{
        goal,
        setGoal,
        playersState,
        setPlayersState,
        turn,
        setTurn,
        gameDone,
        setGameDone
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
