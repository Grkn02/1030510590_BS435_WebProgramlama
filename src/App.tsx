
import SetupPage from "./pages/SetupPage/SetupPage";
import GamePage from "./pages/GamePage/GamePage";
import { Routes, Route } from 'react-router-dom';

function App() {

  


  
  

  return (
    <div>
      {/* <Routes> bileşeni, tüm rotalarınızı kapsar */}
      <Routes>
        
        {/* Ana sayfa (/) için SetupPage'i göster */}
        <Route path="/" element={<SetupPage />} />
        
        {/* /game yoluna gidilince GamePage'i göster */}
        <Route path="/game" element={<GamePage />} />
        
        {/* Eşleşmeyen tüm yollar için bir "Not Found" sayfası da ekleyebilirsiniz */}
        { <Route path="*" element={<div>404 - Sayfa Bulunamadı</div>} /> }
        
      </Routes>
    </div>
  );
    
    
}

export default App;