describe('Pruebas en <DemoComponent />', () => {
    test('ESTA PRUEBA NO DEBE FALLAR', () => {
        //1.inicialización
        const message1 = 'Hola Mundo';

        //2.estimulo
        const message2 = message1.trim();

        //3.Observar el comportameinto esperado
        expect(message1).toBe(message2);
    });
});
