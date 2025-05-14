const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = []
console.log(reversedTeachers)
for (let i = 0; i < teachers.length; i++) {
  reversedTeachers.push(teachers[teachers.length - 1 - i])
}


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []
console.log(longNames)
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i])
  }
}
// 3. Rimuovi 'Ed' dall'array teachers
const senzaEd = []
console.log(senzaEd)
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] !== 'Ed') {
    senzaEd.push(teachers[i])
  }
}


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = [];
console.log(isFabioPresent)
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] == 'Fabio') {
    isFabioPresent.push(teachers[i])
  }
}

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
let teachersString = ''
for (let i = 0; i < teachers.length; i++) {
  if (teachersString != '') {
    teachersString = teachersString + ',' + teachers[i];
  } else {
    teachersString = teachers[i];
  }
}
console.log(teachersString)
