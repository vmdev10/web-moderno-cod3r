// Função tradicional
let dobro = function (a) {
  return 2 * a;
};

// Arrow function 1 // Arrow function sempre será uma função anônima, deverá ser armazenada em uma variável.
dobro = (a) => {
  return 2 * a;
};

// Arrow Funtion 2
dobro = (a) => 2 * a; // Return está implícito

console.log(dobro(Math.PI));

ola = () => "Olá";
ola = (_) => "Olá"; // Possui um param

// Arrow funcion
// Sintaxe reduzida
// Intenção de ter funções pequenas e especialistas
