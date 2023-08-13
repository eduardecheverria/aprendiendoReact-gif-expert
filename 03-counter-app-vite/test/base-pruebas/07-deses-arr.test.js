import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('prueb de 07-deses-arr', () => {
    test('Debe retornar un stirng y un nùmero', () => {
        const [letters, numbers] = retornaArreglo();
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
    });
});
