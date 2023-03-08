'use strict'

const listaInvitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
const tavoloVip = [

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

    {
        tavolo: '',
        nome: '',
        postoOccupato: '',
    },

]

tavoloVip.forEach((element, index) => {
    element['nome']= listaInvitati[index];
    element['postoOccupato'] = index + 1;
    element['tavolo'] = "tavolo vip";
    console.log(element);
}); 

