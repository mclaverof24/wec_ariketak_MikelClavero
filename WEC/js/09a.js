// --- ERABILTZAILEAREN DATUA BILDU ETA ZENBAKI BIHURTU ---
// 1. prompt()-ek testu bat (String) bueltatzen du.
// 2. parseInt()-ek testu hori zenbaki oso (Integer) bihurtzen du baldintza konparatu ahal izateko.
let edad = parseInt(prompt("Zenbat urte dituzu?"));


// --- BALDINTZAZKO ERAIKITZEA (Control de flujo: if / else) ---

// Adina 18 edo gehiago den egiaztatzen du (Adin-nagusia den ala ez)
if (edad >= 18) {
    // Baldintza BETETZEN BADA (true): Pertsona adin-nagusia da
    console.log("Mayor");
} else {
    // Baldintza BETETZEN EZ BADA (false): Pertsona adingabea da
    console.log("Menor");
}