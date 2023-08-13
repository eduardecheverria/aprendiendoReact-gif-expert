import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(1);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    // test('getHeroeById debe retornar un undefined si no existe', () => {
    //     const id = 100;
    //     const hero = getHeroeById(id);
    //     expect(hero).toBeFalsy();
    // });
    test('getHeroesByOwner debe retornar 3 en length en heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesTest = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC',
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC',
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC',
            },
        ];

        expect(heroes.length).toBe(3);
        expect(heroes[0]).toEqual(heroesTest[0]);
        expect(heroes[1]).toEqual(heroesTest[1]);
        expect(heroes[2]).toEqual(heroesTest[2]);
    });
    test('getHeroesByOwner debe retornar 2 en length en heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    });
});
