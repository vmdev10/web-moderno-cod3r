const formulaDeBaskara = function (a = 1, b = 0, c = 0) {
  let raizesDaEquacao = [];
  const delta = b ** 2 - 4 * a * c;
  if (delta < 0) return "Delta é negativo";

  const raiz1 = ((-b + Math.sqrt(delta)) / 2) * a;
  const raiz2 = ((-b - Math.sqrt(delta)) / 2) * a;

  raizesDaEquacao.push(raiz1);
  raizesDaEquacao.push(raiz2);

  return raizesDaEquacao;
};

console.log(formulaDeBaskara());
console.log(formulaDeBaskara(1, -5, 6));
console.log(formulaDeBaskara(1, 0, -1));
console.log(formulaDeBaskara(-1, 2, 0));
console.log(formulaDeBaskara(-4, 0, 0));
console.log(formulaDeBaskara(2, 3, 5));
console.log(formulaDeBaskara(3, 1, 2));
