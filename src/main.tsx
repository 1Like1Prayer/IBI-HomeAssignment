import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './home/Home.tsx';
import { GameScoreContextProvider } from './context/game-context/GameContext.tsx';

createRoot(document.getElementById('root')!).render(
  <GameScoreContextProvider>
    <Home />
  </GameScoreContextProvider>
);
