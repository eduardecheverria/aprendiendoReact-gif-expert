import { usContext } from '../../src/base-pruebas/06-deses-obj';
describe('pruebas en 06-deses-obj', () => {
    test('UsContext debe retornar nombre anios latlng', () => {
        const testUsContext = {
            nombreClave: 'edu',
            anios: 28,
            latlng: {
                lat: 14.1232,
                lng: -12.3232,
            },
        };

        const usContextOriginal = usContext({ clave: 'edu', nombre: 'algo', edad: 28 });
        expect(testUsContext).toStrictEqual(usContextOriginal);
    });
});
