'use strict'

const studentsId = [213, 110, 250, 145, 196, 102, 120];
const studentsName = ['Marco della Rovere', 'Paola Cortellessa', 'Andrea Mantegna', 'Gaia Borromini', 'Luigi Grimaldello', 'Piero della Francesca', 'Francesca da Polenta'];
const studentsGrades = [78, 96, 48, 74, 68, 50, 84]

const studentsCardFlat = [];


for (let i = 0; i < studentsName.length; i++) {
    let cardCreate = {
        id: '',
        nome: '',
        grades: '',
    };
    studentsCardFlat.push(cardCreate);
}
console.log(studentsCardFlat);

studentsCardFlat.forEach((element, index) => {
    element['id'] = studentsId[index];
    element['nome'] = studentsName[index];
    element['grades'] = studentsGrades[index];
    
}); 



const studentsCard = studentsCardFlat.map(({nome}) => nome.toUpperCase())
console.log(studentsCard);

const studentsLeaderboard = studentsCardFlat.filter(function(students) {

    if (students.grades > 70){
        return true;
    }

})

console.log(studentsLeaderboard);

const studentsTop = studentsCardFlat.filter(function(students){

    if (students.grades > 70 && students.id > 120){

        return true;
    }

});

console.log(studentsTop);

