import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
describe('Pruebas en <GifExpertApp />', () => {
    test('Debe renderizar un gifItem', async () => {
        const inputValue = 'Dragon Ball';
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        await waitFor(() => screen.getByText(inputValue));
        expect(screen.getByText(inputValue)).toBeTruthy();
    });

    test('no debe renderizar un gifItem con el mismo titulo 2 veces', async () => {
        const inputValue = 'Dragon Ball';
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        await waitFor(() => screen.getByText(inputValue));
        expect(screen.getAllByText(inputValue).length).toBe(1);
    });
});
