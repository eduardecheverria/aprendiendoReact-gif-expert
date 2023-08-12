import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en archivo 02-template-strings', () => {
    test('getSaludo debe regresar Hola Fernando', () => {
        const name = 'Fernando';
        const getMessage = getSaludo(name);

        expect(getMessage).toBe(`Hola ${name}`);
    });
});
