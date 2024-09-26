import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react';

interface GameScoreContextState {
  goal: number;
  setGoal: Dispatch<SetStateAction<number>>;
}

interface GameScoreProviderProps {
  children: ReactNode; // Typing children as ReactNode
}

// Create the context with a default undefined value for context state
export const GameScoreContext = createContext<
  GameScoreContextState | undefined
>(undefined);

// Create a provider component
export const GameScoreContextProvider = ({
  children
}: GameScoreProviderProps) => {
  const [goal, setGoal] = useState<number>(100);

  return (
    <GameScoreContext.Provider value={{ goal, setGoal }}>
      {children}
    </GameScoreContext.Provider>
  );
};
