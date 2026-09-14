// --- TESTU MOTEIN BIHURTZEA (Explicit String Conversion) ---
console.log(String(25));   // Zenbakia testu bihurtzen du ("25")
console.log(String(true)); // Boolearra testu bihurtzen du ("true")


// --- BALIO BOOLEARRETARA BIHURTZEA (Explicit Boolean Conversion) ---

// Balio EGIAZKOAK (Truthy values -> true bilakatzen direnak):
console.log(Boolean(1));     // true (0 ez den beste edozein zenbaki egiazkoa da)
console.log(Boolean("123")); // true (hutsik ez dagoen edozein testu egiazkoa da)

// Balio GEZURREZKOAK (Falsy values -> false bilakatzen direnak):
console.log(Boolean(0));         // false (zenbaki nulua/zeroa)
console.log(Boolean(""));        // false (testu hutsa)
console.log(Boolean(null));      // false (balio nulua)
console.log(Boolean(undefined)); // false (definitu gabeko balioa)
console.log(Boolean(NaN));       // false (Not a Number - Zenbakia ez dena)