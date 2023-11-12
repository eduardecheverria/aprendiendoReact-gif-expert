import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => {
    const title = 'saitama';
    const url = 'https://one-punch.com/hola.jpg';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Deebe de tener el alt y el titulo indicado', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
