// --- BALIO BOOLEARRAK (Booleans) ---
let verdadero = true;
console.log(verdadero); // Egiazko balioa (true)

let falso = false;
console.log(falso); // Gezurrezko balioa (false)


// --- BALIO HUTS EDO NULUA (Null) ---
let nulo = null;
console.log(nulo); // Hausnarketaz ezarritako balio hutsa (null)


// --- ZENBAKIAK (Numbers) ---
let edad = 18;
console.log(edad); // Zenbaki osoa (Integer)

let temperatura = 22.5;
console.log(temperatura); // Hamartarra (Float/Decimal)

let saldo = -150.75;
console.log(saldo); // Zenbaki negatiboa


// --- EZAGUERA KASU BEREZIAK: INFINITUA (Special Numbers) ---
console.log(42 / 0);  // Infinitu positiboa (Infinity)
console.log(-42 / 0); // Infinitu negatiboa (-Infinity)


// --- KATEAK EDO TESTUAK (Strings) ---
let nombre = "Mikel";
let ciudad = 'Kabiezes';
let saludo = `Hola`;

// Kateak katea-Iragazketa edo moldatze ezberdinak:
console.log("Hola " + nombre); // Kateak elkartzea (+ bidez)
console.log("Hola %s", nombre); // Formatu bidez inprimatzea (%s)
console.log(`Hola ${nombre}`);  // Txantiloi-literalak (Template Literals / Interpolazioa)


// --- DEFINITU GABEKO BALIOA (Undefined) ---
let variable;
console.log(variable); // Hasierako baliorik gabeko aldagaia (undefined)


// --- SINBOLOAK (Symbols - Balio bakarra eta aldaezina) ---
// Sinbolo bakuna deskribapen gabe
const sym1 = Symbol();
console.log(sym1);             // Symbol() erakusten du
console.log(sym1.description); // undefined (ez dauka deskribapenik)

// Zenbaki bidezko deskribapena duen sinboloa
const sym2 = Symbol(42);
console.log(sym2);             // Symbol(42) erakusten du
console.log(sym2.description); // "42" (deskribapena testu gisa)

// Testu bidezko deskribapena duen sinboloa
const sym3 = Symbol("hola");
console.log(sym3);             // Symbol(hola) erakusten du
console.log(sym3.description); // "hola" (deskribapena)