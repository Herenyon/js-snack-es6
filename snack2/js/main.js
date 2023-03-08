'use strict'

const studentsId = [213, 110, 250, 145, 196, 102, 120];
const studentsName = ['Marco della Rovere', 'Paola Cortellessa', 'Andrea Mantegna', 'Gaia Borromini', 'Luigi Grimaldello', 'Piero della Francesca', 'Francesca da Polenta'];
const studentsGrades = [78, 96, 48, 74, 68, 50, 84]

const studentsCard = [];


for (var i = 0; i < studentsName.length; i++) {
    let cardCreate = {
        id: '',
        nome: '',
        grades: '',
    };
    studentsCard.push(cardCreate);
}
console.log(studentsCard);

studentsCard.forEach((element, index) => {
    element['id'] = studentsId[index];
    element['nome'] = studentsName[index];
    element['grades'] = studentsGrades[index];
    console.log(element);
}); 

