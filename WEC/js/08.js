// --- ERABILTZAILEAREN DATUAK BILDU (Prompt bidez) ---

// Erabiltzaileari izena galdetzen dio eta sartutako testua aldagai batean gordetzen du
let nombre = prompt("Nola deitzen zara?");

// Erabiltzaileari lehenengo abizena galdetzen dio
let apellido = prompt("Zein da zure lehenengo abizena?");


// --- EMAITZA ERAKUSTEA (Interpolazioa / Template Literals) ---

// Barruko aldagaiak atzigatuz (`${...}` bidez) agur mezua inprimatzen du kontsolan
console.log(`Kaixo ${nombre} ${apellido}`);