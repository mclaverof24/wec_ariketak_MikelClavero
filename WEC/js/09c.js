// --- ERABILTZAILEAREN EKINTZA BILDU ---
const action = prompt("Introduce una acción");

// --- HAUTATZE EGITURA (Switch Statement) ---
switch (action) {
  case "draw":
    console.log("Has escrito draw");
    // Oharra: 'break' iruzkinduta (desaktibatuta) dagoenez, exekuzioak 
    // HURRENGO KASURA JARRAITUKO DU eten gabe ("fall-through" efektua).

  case "eat":
    console.log("eat");
    break; // Hemen exekuzioa gelditzen da eta switch-etik ateratzen da.

  default:
    // Aurreko kasuetakorekin bat etortzen ez bada exekutatzen da
    console.log("default");
}