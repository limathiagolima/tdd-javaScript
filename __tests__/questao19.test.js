const realizarInteracao = require('../questao19.js');

test('Ninguem curtiu', () => {
    resultado = realizarInteracao()
    expect(resultado.length).toBe(0);
});

test('Uma pessoa curtiu', () => {
    resultado = realizarInteracao('Bianca')
    expect(resultado.length).toBe(1);
});

