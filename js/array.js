/*
Saraso tipo kintamieji:
    sinonimai: sarasas, masyvas, array, matrica*
    inicijuojama su lauztyniaias skliausteliais;
    viduje gali buti ivairiu tipu veiksmu;
    bet rekomenuotija, kad butu tik vieno tipo reiksmes.
*/

//Pazymiai
//petriukoPazymiai = 2, 10, 7, 5, 2, 9, 7;

const petriukoPazymiai = [2, 10, 7, 5, 10];

console.log(petriukoPazymiai);

let suma = 0;
suma = suma + petriukoPazymiai [0];
suma = suma + petriukoPazymiai [1];
suma = suma + petriukoPazymiai [2];
suma = suma + petriukoPazymiai [3];
suma = suma + petriukoPazymiai [4];

const kiekis = petriukoPazymiai.length;
const vidurkis = suma / kiekis;

console.log(vidurkis);
