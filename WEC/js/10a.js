// --- 1. WHILE ZIKLOA (Baldintza hasieran aztertzen da) ---
console.log("while");
let contador = 1;

// Baldintza: contador 10 baino txikiagoa den bitartean jarraitu
while (contador < 10) {
  console.log(contador); // 1etik 9ra inprimatuko du
  contador++;            // Balioari 1 gehitzen dio iterazio bakoitzean (Inkrementua)
}
// Ziklo hau amaitzean, contador = 10 balioarekin geratzen da.


// --- 2. DO...WHILE ZIKLOA (Gutxienez behin exekutatzen da beti) ---
console.log("do while");
do {
  console.log(contador); // Kontadorearen balioa inprimatzen du (10etik hasita)
  contador--;            // Balioari 1 kentzen dio iterazio bakoitzean (Dekrementua)
} while (contador > 0);   // Baldintza amaieran aztertzen da (0 baino handiagoa den bitartean)
// Ziklo hau amaitzean, contador = 0 balioarekin geratzen da.


// --- 3. FOR ZIKLOA (Hasieraketa, baldintza eta inkrementua leku berean) ---
console.log("for");

// (Hasieraketa: let j = 1; Baldintza: j <= 10; Inkrementua: j++)
for (let j = 1; j <= 10; j++) {
  console.log(j); // 1etik 10era inprimatuko du
}