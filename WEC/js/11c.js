// --- RETORNOA (RETURN) DUEN FUNTZIOA ---
// Funtzioak 'return' erabiltzen du emaitza bueltatzeko,
// console.log egin beharrean aldagai batean gorde ahal izateko.
function sumar(a = 1, b = 2) {
  return a + b;
}

// 1. Argumenturik GABE deitzea:
// Berezko balioak erabiltzen ditu (1 + 2).
// Bueltatutako balioa (3) 'a' aldagaian gordetzen da.
const a = sumar();
console.log(a); // 3 inprimatzen du

// 2. Argumentu BATEKIN deitzea:
// 'a' parametroak 3 hartzen du eta 'b'-k berezko balioa (2).
// Bueltatutako balioa (5) 'b' aldagaian gordetzen da.
const b = sumar(3);
console.log(b); // 5 inprimatzen du

// 3. BI argumentuekin deitzea:
// Bi parametroak ordezkatzen dira (3 + 5).
// Bueltatutako balioa (8) 'c' aldagaian gordetzen da.
const c = sumar(3, 5);
console.log(c); // 8 inprimatzen du (Oharra: jatorrizko kodean 'b' inprimatzen zen berriro)