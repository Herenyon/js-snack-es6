'use strict'

const squadre = [

    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: 'Juventus',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Sassuolo',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Cosenza',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Termoli',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Lamezia Terme',
        punti: 0,
        falliSubiti: 0,
    },
]

const posizioneSquadre = squadre.map(({ nome, punti, falliSubiti }) => {
    punti = Math.floor(Math.random() * 100);
    falliSubiti = Math.floor(Math.random() * 100);
    return { nome, punti, falliSubiti };
});
