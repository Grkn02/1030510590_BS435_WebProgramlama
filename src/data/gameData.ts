export interface GameImage {
  id: string;
  url: string;
  isAi: boolean; // True ise AI, False ise Gerçek
  hint: string;  // Doğru cevabı buldurmak için verilecek ipucu
}

export const allImages: GameImage[] = [
  // ==========================================
  // 🤖 YAPAY ZEKA (AI) GÖRSELLERİ
  // ==========================================
  
  // 1. Balıkçı (Portre)
  { 
    id: 'ai-1', 
    url: '/images/ai/ai1.png', 
    isAi: true, 
    hint: "Ellere ve parmaklara dikkat et. Eklem yerleri veya parmak sayıları doğal mı?" 
  },
  
  // 2. Doğum Günü Kızı (Yüzler/Işık)
  { 
    id: 'ai-2', 
    url: '/images/ai/ai2.png', 
    isAi: true, 
    hint: "Mum alevlerinin şekline ve arkadaki insanların yüz hatlarına odaklan." 
  },
  
  // 3. Gitar Çalan Eller (Parmaklar)
  { 
    id: 'ai-3', 
    url: '/images/ai/ai3.png', 
    isAi: true, 
    hint: "Gitar tellerinin bittiği yerlere ve parmakların gitara basış açısına bak." 
  },
  
  // 4. Makarna Tabağı (Yemek/Çatal)
  { 
    id: 'ai-4', 
    url: '/images/ai/ai4.png', 
    isAi: true, 
    hint: "Çatalın uçlarına dikkat et. Metalle yemek birbirine karışmış mı?" 
  },
  
  // 5. Portakal Suyu (Fizik/Cam)
  { 
    id: 'ai-5', 
    url: '/images/ai/ai5.png', 
    isAi: true, 
    hint: "Buz küplerinin suyun içindeki duruşu ve bardağın kenar çizgileri mantıklı mı?" 
  },
  
  // 6. Tokyo Sokak (Yazılar)
  { 
    id: 'ai-6', 
    url: '/images/ai/ai6.png', 
    isAi: true, 
    hint: "Tabelalardaki yazıları okumaya çalış. Harfler tanıdık bir alfabeye benziyor mu?" 
  },
  
  // 7. Kahve Dükkanı (Perspektif/Arka Plan)
  { 
    id: 'ai-7', 
    url: '/images/ai/ai7.png', 
    isAi: true, 
    hint: "Arka plandaki nesneler masayla veya zeminle garip bir şekilde birleşiyor mu?" 
  },
  
  // 8. Köpek (Doku Tekrarı)
  { 
    id: 'ai-8', 
    url: '/images/ai/ai8.png', 
    isAi: true, 
    hint: "Çimlerin veya tüylerin desenine bak. Yapay bir şekilde tekrar eden dokular var mı?" 
  },
  
  // 9. Papağan (Detaylar)
  { 
    id: 'ai-9', 
    url: '/images/ai/ai9.png', 
    isAi: true, 
    hint: "Kuşun pençelerinin dala tutunuş şekli fiziksel olarak mümkün mü?" 
  },
  
  // 10. Eski Kamera (Mekanik Hatalar)
  { 
    id: 'ai-10', 
    url: '/images/ai/ai10.png', 
    isAi: true, 
    hint: "Objektifin üzerindeki yazılara ve tuşların simetrisine dikkatli bak." 
  },

  // ==========================================
  // 📸 GERÇEK (REAL) FOTOĞRAFLAR
  // ==========================================
  
  // 1. Gerçek Portre
  { 
    id: 'r-1', 
    url: '/images/real/real1.jpg', 
    isAi: false, 
    hint: "Ciltteki gözenekler, lekeler ve kusurlar çok doğal ve düzensiz." 
  },
  
  // 2. Gerçek Parti/Çocuk
  { 
    id: 'r-2', 
    url: '/images/real/real2.jpg', 
    isAi: false, 
    hint: "Işık kaynağı tek ve tutarlı, gölgeler olması gerektiği yere düşüyor." 
  },
  
  // 3. Gerçek Müzisyen
  { 
    id: 'r-3', 
    url: '/images/real/real3.jpg', 
    isAi: false, 
    hint: "Parmak eklemleri anatomik olarak kusursuz görünüyor." 
  },
  
  // 4. Gerçek Yemek
  { 
    id: 'r-4', 
    url: '/images/real/real4.avif', 
    isAi: false, 
    hint: "Yemeğin dokusu ve tabağın üzerindeki yansımalar fizik kurallarına uygun." 
  },
  
  // 5. Gerçek İçecek
  { 
    id: 'r-5', 
    url: '/images/real/real5.jpg', 
    isAi: false, 
    hint: "Sıvı ve cam etkileşimi (kırılma indisi) tamamen gerçekçi." 
  },
  
  // 6. Gerçek Sokak
  { 
    id: 'r-6', 
    url: '/images/real/real6.jpg', 
    isAi: false, 
    hint: "Arka plandaki yazılar bulanık olsa bile harf yapıları bozuk değil." 
  },
  
  // 7. Gerçek Mekan
  { 
    id: 'r-7', 
    url: '/images/real/real7.jpg', 
    isAi: false, 
    hint: "Mekandaki perspektif çizgileri ve derinlik algısı hatasız." 
  },
  
  // 8. Gerçek Hayvan
  { 
    id: 'r-8', 
    url: '/images/real/real8.jpg', 
    isAi: false, 
    hint: "Tüylerin karışıklığı kaotik ama doğal, yapay bir desen tekrarı yok." 
  },
  
  // 9. Gerçek Kuş
  { 
    id: 'r-9', 
    url: '/images/real/real9.avif', 
    isAi: false, 
    hint: "Odak noktası (gözler/gaga) çok net, yapay bir bulanıklık efekti yok." 
  },
  
  // 10. Gerçek Nesne
  { 
    id: 'r-10', 
    url: '/images/real/real10.jpg', 
    isAi: false, 
    hint: "Metal parçaların birleşim yerleri ve vidalar mantıklı yerlerde." 
  },
];