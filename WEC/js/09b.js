// --- ERABILTZAILEAREN ADINA BILDU ETA ZENBAKI BIHURTU ---
// prompt() bidez lortutako testua zenbaki oso (Integer) bihurtzen dugu
let edad = parseInt(prompt("Zenbat urte dituzu?"));


// --- BALDINTZA ANITZEKO EGITURA (if / else if / else) ---

// 1. Lehenengo baldintza: Adina 65 edo gehiago den egiaztatzen du
if (edad >= 65) {
    // True bada: Erretiratua / Erretiraduna da
    console.log("Jubilado");
    
// 2. Bigarren baldintza: Lehenengoa betetzen ez bada, 18 edo gehiago den begiratzen du
} else if (edad >= 18) {
    // True bada: Adin-nagusia da (18 eta 64 urte artean)
    console.log("Mayor");
    
// 3. Azken aukera: Aurreko baldintza bat bera ere betetzen ez bada (18 urte baino gutxiago)
} else {
    // Adingabea da
    console.log("Menor");
}