// --- BEREZKO PARAMETROAK DITUEN FUNTZIOA ---
// 'a'-k 1 balioa hartuko du berez, eta 'b'-k 2 balioa,
// argumenturik igortzen ez bada edo undefined bada.
function sumar(a = 1, b = 2) {
  console.log(a + b);
}

// 1. Argumenturik GABE deitzea:
// 'a' = 1 eta 'b' = 2 erabiliko ditu.
// Emaitza: 3 (1 + 2)
sumar();

// 2. Argumentu BATEKIN deitzea:
// 'a' parametroak 3 balioa hartuko du.
// 'b' parametroak berezko balioa (2) mantenduko du.
// Emaitza: 5 (3 + 2)
sumar(3);

// 3. BI argumentuekin deitzea:
// 'a' parametroak 3 hartuko du eta 'b' parametroak 5.
// Berezko balioak ordezkatzen dira.
// Emaitza: 8 (3 + 5)
sumar(3, 5);