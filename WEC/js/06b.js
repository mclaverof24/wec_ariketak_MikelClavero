// --- BERDINTASUN ZORROTZA (Strict Equality: ===) ---
// Oharra: "===" eragileak balioa ETA mota konparatzen ditu (ez du mota-bihurtzerik egiten).

console.log(5 === 5); // true -> Balio bera (5) eta mota bera (number)

console.log(5 === "5"); // false -> Mota ezberdinak (number vs string)

console.log(1 === true); // false -> Mota ezberdinak (number vs boolean)

console.log(0 === false); // false -> Mota ezberdinak (number vs boolean)

// --- SINBOLOAK ETA BERDINTASUN ZORROTZA ---

// Sinbolo bakoitza BAKARRA da, nahiz eta deskribapen bera izan (42)
console.log(Symbol(42) === Symbol(42)); // false -> Bi sinbolo ezberdin dira

// Bi sinboloen MOTA konparatzen da ("symbol" === "symbol")
console.log(typeof Symbol(42) === typeof Symbol(42)); // true -> Biak dira "symbol" motatakoak