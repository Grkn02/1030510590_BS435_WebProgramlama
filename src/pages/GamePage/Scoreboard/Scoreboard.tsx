import React from 'react';

// Tip tanımlamaları
interface GameRecord {
  gameNumber: number;
  player1Score: number;
  player2Score?: number;
}

interface ScoreboardProps {
  title: string;
  player1Name: string;
  player2Name?: string;
  history: GameRecord[];
}

const Scoreboard: React.FC<ScoreboardProps> = ({ title, player1Name, player2Name, history }) => {
  return (
    <>
      <style>{`
        .sb-container {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 280px;
          background-color: #1a1a2e;
          color: white;
          padding: 15px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          border: 1px solid #30363d;
          z-index: 1000;
        }

        .sb-title {
          margin: 0 0 15px 0;
          font-size: 1.2rem;
          text-align: center;
          color: #e94560;
          border-bottom: 1px solid #30363d;
          padding-bottom: 10px;
        }

        .sb-header {
          display: grid;
          grid-template-columns: 50px 1fr ${player2Name ? '1fr' : ''};
          font-size: 0.75rem;
          font-weight: bold;
          color: #8b8b8b;
          text-transform: uppercase;
          margin-bottom: 8px;
          padding: 0 5px;
        }

        .sb-list {
          max-height: 250px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #444 #1a1a2e;
        }

        .sb-row {
          display: grid;
          grid-template-columns: 50px 1fr ${player2Name ? '1fr' : ''};
          padding: 8px 5px;
          border-bottom: 1px solid #16213e;
          align-items: center;
          transition: background 0.2s;
        }

        .sb-row:hover {
          background-color: #16213e;
        }

        .sb-game-no {
          font-size: 0.8rem;
          color: #555;
        }

        .sb-score {
          text-align: center;
          font-weight: bold;
        }

        .p1-score { color: #4ecca3; }
        .p2-score { color: #45a29e; }

        /* Scrollbar stilleri */
        .sb-list::-webkit-scrollbar { width: 5px; }
        .sb-list::-webkit-scrollbar-track { background: #1a1a2e; }
        .sb-list::-webkit-scrollbar-thumb { background: #444; border-radius: 10px; }
      `}</style>

      <div className="sb-container">
        <h2 className="sb-title">{title}</h2>
        
        <div className="sb-header">
          <span>Oyun</span>
          <span style={{ textAlign: 'center' }}>{player1Name}</span>
          {player2Name && <span style={{ textAlign: 'center' }}>{player2Name}</span>}
        </div>

        <div className="sb-list">
          {history.map((game) => (
            <div key={game.gameNumber} className="sb-row">
              <span className="sb-game-no">#{game.gameNumber}</span>
              <span className="sb-score p1-score">{game.player1Score}</span>
              {player2Name && (
                <span className="sb-score p2-score">{game.player2Score ?? 0}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Scoreboard;