'use strict'

window.addEventListener('DOMContentLoaded', function () {
  
  const nRandom = randomNumbers(5);
  alert(`Hai una buona memoria? Ricorda questi numeri: ${nRandom}`);
  console.log(`Numeri generati: ${nRandom}`);

  setTimeout(function() {
    const userAttempt = prompt(`inserisci i numeri che hai visto prima, con uno spazio tra uno e l'altro`)
    console.log(`numeri inseriti dall'utente: ${userAttempt}`);
    const userAttemptArray = nListToArray(userAttempt);
    console.log(`array dei numeri inseriti dall'utente: ${userAttemptArray}`);
    const rightNmbs = confrontArrays(nRandom, userAttemptArray);
    console.log(`Hai indovinato ${rightNmbs} numeri`);
  }, 3000);

});


//funzione che confronta i due array di numeri
function confrontArrays(randomArray, userArray) {
  
  const arrToConfront = [...randomArray];
  console.log(`copia array di numeri random: ${arrToConfront}`);
  let nCorrect = 0;

  userArray.forEach(element => {
    
    if (arrToConfront.includes(parseInt(element))) {
      const toDeleteIndex = arrToConfront.indexOf(parseInt(element));
      arrToConfront.splice(toDeleteIndex, 1)
      console.log(`numero corretto: ${parseInt(element)}`);
      console.log(arrToConfront);
      nCorrect++;
    } else {
      console.log(`numero errato: ${parseInt(element)}`);
    };
  });

  return nCorrect;
};

// funzione che riceve i numeri inseriti e li trasforma in array
function nListToArray(string) {
  const attemptArray = string.split(' ');
  return attemptArray;
};

//funzione che genera numeri random, data la quantità di numeri da creare
function randomNumbers(nNumbers) {
  
  const numbersArray = [];

  for (let i = 0; i < nNumbers; i++) {
    numbersArray.push(randomNumber(0, 9));
  };

  return numbersArray;
};

//funzione che genera un numero random, dati un minimo e un massimo 
function randomNumber(minNumber, maxNumber) {
  
  const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return randomNum;

};