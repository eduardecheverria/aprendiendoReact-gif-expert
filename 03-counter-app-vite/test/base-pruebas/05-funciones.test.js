import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };
        const prueba = getUser();

        expect(prueba).toStrictEqual(testUser);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC567',
            username: 'eduardo',
        };
        const prueba = getUsuarioActivo('eduardo');

        expect(prueba).toStrictEqual(testUser);
    });
});
