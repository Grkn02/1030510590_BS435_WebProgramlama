import './GameInfoCard.styles.css';


type GameInfoCardProps = {
  currentPlayer: string;
  currentTurn: number;
  remainingRights: number;
};

const GameInfoCard = ({ currentPlayer, currentTurn, remainingRights }: GameInfoCardProps) => {
  
  // Hakları ikon/sembol olarak listelemek için yardımcı mantık
  const rightsContent = Array.from({ length: remainingRights }).map((_, index) => (
    <span key={index} className="right-icon">
      &lt;&gt; {/* Görseldeki < > sembolü */}
    </span>
  ));

  return (
    <div className="game-info-card">
      <div className="card-header">
        <span className="player-label">{currentPlayer}</span>
        <span className="turn-label">{currentTurn}.Tur</span>
      </div>

      <div className="card-footer">
        <span className="rights-label">kalan hak:</span>
        <div className="rights-wrapper">
          {remainingRights > 0 ? rightsContent : <span className="no-rights">Yok</span>}
        </div>
      </div>
    </div>
  );
};

export default GameInfoCard;