import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('pruebas en 11-async-await', () => {
    test('getImagen debe retornar una url d eimagen', async () => {
        const resp = await getImagen();
        expect(typeof resp).toBe('string');
    });
    test('getImagen debe retornar un error', async () => {
        const resp = await getImagen();
        expect(resp).toBe('No se encontro la imagen');
    });
});
