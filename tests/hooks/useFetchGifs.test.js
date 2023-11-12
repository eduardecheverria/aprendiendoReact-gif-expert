import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en hook de useFetchifs', () => {
    test('Debe regresar el esado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe de retornar una rreglo  de imagenes y isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
    });
});
