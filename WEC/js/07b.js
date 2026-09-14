// --- INKREMENTUA (++): Balioa 1 gehitzea ---

let x = 5;
x++; // x-ri 1 gehitzen dio (orain x = 6 da)

// Ost-inkrementua (x++): Balio zaharra erakusten du LEHENIK, eta GERO 1 gehitzen dio
console.log(x++); // 6 inprimatzen du (eta ondoren x = 7 bihurtzen da)

// Aurre-inkrementua (++x): LEHENIK 1 gehitzen dio, eta GERO balio berria erakusten du
console.log(++x); // 8 inprimatzen du (7 + 1 = 8, eta 8 erakusten du)


// --- DEKREMENTUA (--): Balioari 1 kentzea ---

x = 5; // x berriro 5 gisa berrezartzen dugu
x--;   // x-ri 1 kentzen dio (orain x = 4 da)

// Ost-dekrementua (x--): Balio zaharra erakusten du LEHENIK, eta GERO 1 kentzen dio
console.log(x--); // 4 inprimatzen du (eta ondoren x = 3 bihurtzen da)

// Aurre-dekrementua (--x): LEHENIK 1 kentzen dio, eta GERO balio berria erakusten du
console.log(--x); // 2 inprimatzen du (3 - 1 = 2, eta 2 erakusten du)