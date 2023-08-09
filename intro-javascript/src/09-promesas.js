import { getHeroeByid } from './data/heroesFuntions';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeByid(2);
//         resolve(heroe);
//     }, 2000);
// });

// promesa
//     .then((heroe) => {
//         console.log(heroe);
//     })
//     .catch((err) => {
//         console.warn(err);
//     });
// //console.log(getHeroeByid(2), getHeroeByOwner('Marvel'));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeByid(id);
            if (heroe !== undefined) {
                resolve(heroe);
            } else {
                reject('El heroe no fue encontrado');
            }
        }, 2000);
    });
};

getHeroeByIdAsync(14)
    .then((heroe) => {
        console.log(heroe);
    })
    .catch((err) => {
        console.warn(err);
    });
