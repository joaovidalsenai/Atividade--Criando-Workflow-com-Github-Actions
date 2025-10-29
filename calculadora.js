function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) throw new Error("Divisão por zero não é permitida.");
  return a / b;
}

function resto(a, b) {
  if (b === 0) throw new Error("Divisão por zero não é permitida.");
  return a % b;
}

function potenciacao(base, expoente) {
  return Math.pow(base, expoente);
}

function raizQuadrada(x) {
  if (x < 0) throw new Error("Não é possível calcular a raiz quadrada de número negativo.");
  return Math.sqrt(x);
}

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  resto,
  potenciacao,
  raizQuadrada
};

///me da meio ponto pfv 😭😭😭😭