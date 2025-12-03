import { useState, useEffect } from 'react';

const HINTS = [
  "İpucu: AI ile üretilmiş fotoğraflar genellikle aşırı pürüzsüz, 'camsı' bir cilt dokusuna sahiptir.",
  "İpucu: Arka plandaki yazılara dikkat et; Yapay zeka genelde anlamsız semboller üretir.",
  "İpucu: Ellere odaklan! AI modelleri parmak sayısını ve eklem kıvrımlarını karıştırabilir.",
  "İpucu: Göz bebeklerindeki ışık yansıması (catchlight) iki gözde de aynı yönde olmalıdır.",
  "İpucu: Gözlük, küpe gibi aksesuarların simetrisini kontrol et. AI bazen uyumsuz parçalar çizer.",
  "İpucu: Saç tellerinin uçlarına bak; bazen saçlar tenin içine girmiş gibi görünür.",
  "İpucu: Dişler çok mu mükemmel veya sayıca fazla mı? Bu bir yapay zeka hatası olabilir.",
  "İpucu: Arka plandaki nesneler birbirine geçmiş veya yamuk mu duruyor?",
];

interface InfoHintProps {
  className?: string;
  intervalDuration?: number;
}

export default function InfoHint({ 
  className = "", 
  intervalDuration = 6000 
}: InfoHintProps) {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % HINTS.length);
        setIsVisible(true);
      }, 500); 
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  return (
    <div 
      className={`
        bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-4 rounded shadow-md
        transition-opacity duration-500 ease-in-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
      role="alert"
    >
     
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px' }}>
        
        {/* İkon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          className="text-blue-500" 
          style={{ minWidth: '24px', minHeight: '24px', display: 'block' }} 
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        {/* Metin */}
        <p style={{ margin: 0 }} className="font-medium text-sm sm:text-base leading-tight">
          {HINTS[currentIndex]}
        </p>
      </div>
    </div>
  );
}