'use strict'


const arrayBici = [
    {
        nome: 'Specialized Demo-8',
        kg: 17.2,
    },

    {
        nome: 'Santacruz V10',
        kg: 15.88,
    },

    {
        nome: 'Mondraker Summum',
        kg: 18,
    },

    {
        nome: 'YT Industries Tues 29',
        kg: 15.2,
    },

    {

        nome: 'Canyon Sender CFR 29',
        kg: 16.80,
    },
]

const biciLeggera = [...arrayBici].sort((a, b) => a.kg - b.kg);

const { nome, kg } = biciLeggera[0];

console.log(`Il nome della Bicicletta è ${nome} e pesa ${kg} chili.`);


