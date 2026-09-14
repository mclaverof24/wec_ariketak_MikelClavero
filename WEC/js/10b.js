const numeros = [4, 8, 15, 23];

// --- 1. BREAK AGINDUAREN ERABILERA (Zikloa bertan behera uztea) ---
console.log("uso de break");

// 'for...of' zikloak array-ko elementu bakoitza banan-banan zeharkatzen du
for (const numero of numeros) {
    console.log(numero); // Zenbakia inprimatzen du
    
    if (numero === 15) {
        console.log("Encontrado");
        break; // Zikloa GUZTIZ GELDITZEN DU. Ez ditu hurrengo zenbakiak (23) aztertuko.
    }
}


// --- 2. CONTINUE AGINDUAREN ERABILERA (Iterazio bat jauzi egitea) ---
console.log("uso de continue");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // UNEKO ITERAZIOA JAUZI EGITEN DU.
                  // Ez du beherago dagoen console.log(i) exekutatuko 'i === 3' denean,
                  // baina zikloak jarraituko du hurrengo zenbakiarekin (4).
    }
    console.log(i); // 1, 2, 4 eta 5 inprimatuko ditu (3 zenbakia ez da agertuko)
}