import { heroes } from './heroes.js';
export const getHeroeByid = (id) => {
    return heroes.find((element) => element.id === id);
};

export const getHeroeByOwner = (owner) => {
    return heroes.filter((element) => element.owner === owner);
};
