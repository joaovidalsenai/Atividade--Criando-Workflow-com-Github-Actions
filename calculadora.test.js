const {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  resto,
  potenciacao,
  raizQuadrada
} = require('./calculadora');

describe('Testes da Calculadora', () => {
  
  describe('Função soma', () => {
    test('deve somar dois números positivos', () => {
      expect(soma(5, 3)).toBe(8);
    });

    test('deve somar números negativos', () => {
      expect(soma(-5, -3)).toBe(-8);
    });

    test('deve somar número positivo com negativo', () => {
      expect(soma(10, -3)).toBe(7);
    });

    test('deve somar com zero', () => {
      expect(soma(5, 0)).toBe(5);
    });
  });

  describe('Função subtração', () => {
    test('deve subtrair dois números positivos', () => {
      expect(subtracao(10, 3)).toBe(7);
    });

    test('deve subtrair números negativos', () => {
      expect(subtracao(-5, -3)).toBe(-2);
    });

    test('deve subtrair resultando em negativo', () => {
      expect(subtracao(3, 10)).toBe(-7);
    });

    test('deve subtrair com zero', () => {
      expect(subtracao(5, 0)).toBe(5);
    });
  });

  describe('Função multiplicação', () => {
    test('deve multiplicar dois números positivos', () => {
      expect(multiplicacao(5, 3)).toBe(15);
    });

    test('deve multiplicar números negativos', () => {
      expect(multiplicacao(-5, -3)).toBe(15);
    });

    test('deve multiplicar positivo por negativo', () => {
      expect(multiplicacao(5, -3)).toBe(-15);
    });

    test('deve multiplicar por zero', () => {
      expect(multiplicacao(5, 0)).toBe(0);
    });
  });

  describe('Função divisão', () => {
    test('deve dividir dois números positivos', () => {
      expect(divisao(10, 2)).toBe(5);
    });

    test('deve dividir números negativos', () => {
      expect(divisao(-10, -2)).toBe(5);
    });

    test('deve dividir positivo por negativo', () => {
      expect(divisao(10, -2)).toBe(-5);
    });

    test('deve lançar erro ao dividir por zero', () => {
      expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida.");
    });

    test('deve retornar decimal quando não é divisão exata', () => {
      expect(divisao(10, 3)).toBeCloseTo(3.333, 2);
    });
  });

  describe('Função resto', () => {
    test('deve calcular o resto da divisão', () => {
      expect(resto(10, 3)).toBe(1);
    });

    test('deve retornar zero quando divisão é exata', () => {
      expect(resto(10, 5)).toBe(0);
    });

    test('deve calcular resto com números negativos', () => {
      expect(resto(-10, 3)).toBe(-1);
    });

    test('deve lançar erro ao dividir por zero', () => {
      expect(() => resto(10, 0)).toThrow("Divisão por zero não é permitida.");
    });
  });

  describe('Função potenciação', () => {
    test('deve calcular potência com expoente positivo', () => {
      expect(potenciacao(2, 3)).toBe(8);
    });

    test('deve calcular potência com expoente zero', () => {
      expect(potenciacao(5, 0)).toBe(1);
    });

    test('deve calcular potência com expoente negativo', () => {
      expect(potenciacao(2, -2)).toBeCloseTo(0.25, 2);
    });

    test('deve calcular potência de número negativo', () => {
      expect(potenciacao(-2, 3)).toBe(-8);
    });

    test('deve calcular potência com base zero', () => {
      expect(potenciacao(0, 5)).toBe(0);
    });
  });

  describe('Função raiz quadrada', () => {
    test('deve calcular raiz quadrada de número positivo', () => {
      expect(raizQuadrada(16)).toBe(4);
    });

    test('deve calcular raiz quadrada de zero', () => {
      expect(raizQuadrada(0)).toBe(0);
    });

    test('deve calcular raiz quadrada não exata', () => {
      expect(raizQuadrada(10)).toBeCloseTo(3.162, 2);
    });

    test('deve lançar erro para número negativo', () => {
      expect(() => raizQuadrada(-4)).toThrow("Não é possível calcular a raiz quadrada de número negativo.");
    });
  });

});