import { fireEvent, render, screen } from '@testing-library/react';
import CounterApp from '../src/CounterApp';
describe('Pruebas en <CounterApp />', () => {
    const initialValue = 20;

    test('debe restar -1 al contador ', () => {
        //screen.debug();
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('19')).toBeTruthy();
    });

    test('debe restar -1 al contador ', () => {
        //screen.debug();
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));

        expect(screen.getByText(20)).toBeTruthy();
    });
});
