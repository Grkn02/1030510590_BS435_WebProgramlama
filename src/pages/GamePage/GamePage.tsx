import { useGame } from '../../contexts/GameContext';


function GamePage() {
  const { playerCount, playerNames } = useGame();

  

  return (
    <div>
      <h1>2. Sayfa: Oyun Ekranı</h1>
      
      <h2>{playerCount} Oyunculu</h2>
      
      <h3>Oyuncu Adları:</h3>
      <ul>
        {playerNames.map((name, index) => (
          <li key={index}>Oyuncu {index + 1}: **{name}**</li>
        ))}
      </ul>
      
      <p>Oyun, yukarıdaki verilere göre başlatılıyor...</p>
    </div>
   
  );
}


export default GamePage;