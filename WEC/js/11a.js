// --- FUNTZIOAREN DEKLARAZIOA (Berezko parametroarekin) ---
// "nombre" parametroak berezko balio gisa "Usuario" hartuko du
// argumenturik igortzen ez bada.
function saludar(nombre = "Usuario") {
  console.log(`Hola ${nombre}`);
}

// --- FUNTZIOARI DEITZEA (Argumenturik gabe) ---
// Ez denez argumenturik igorri, berezko balioa ("Usuario") erabiliko du.
// Emaitza: "Hola Usuario"
saludar();

// --- FUNTZIOARI DEITZEA (Argumentu batekin) ---
// Testu bat igortzen denez, berezko balioa ordezkatzen du.
// Emaitza: "Hola AinhoA"
saludar("AinhoA");

// --- ERABILTZAILEAREN INPUT-A ERABILITA DEITZEA ---
// 1. Erabiltzaileari izena galdetzen dio prompt bidez
const nombre = prompt("Introduce tu nombre");

// 2. Erabiltzaileak sartutako balioa funtzioari argumentu gisa igortzen dio
saludar(nombre);