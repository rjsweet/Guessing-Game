'use strict'
// name function, return to function, movie function, song, game, 


// var userName = prompt('What is your name')
// alert ('Hello ' + userName + ', very glad you stopped by!')

var t = 0


// var myName = prompt('Is my name Mal, yes or no?').toLowerCase()

//   if (myName == 'yes' || myName == 'y'){
//     alert('yes, that is correct!');
//     t++;
//   } else if (myName == 'no' || myName == 'n'){
//     alert('sorry, thats not true')
//   }

function function1 (){
  var myName = prompt('Is my name Mal, yes or no?').toLowerCase()

  if (myName == 'yes' || myName == 'y'){
    alert('yes, that is correct!');
    t++;
    return t;
  } else if (myName == 'no' || myName == 'n'){
    alert('sorry, thats not true');
  }
}
function1();


// var returnTo = prompt('Do I ever want to return to Michigan?').toLowerCase()
//    if (returnTo == 'yes' || returnTo == 'y'){
//      alert('Sorry, thats not true')
//    } else if (returnTo == 'no' || returnTo == 'n'){
//      alert('Thats correct!');
//      t++;
//    }
function function2 (){
  var returnTo = prompt('Do I ever want to return to Michigan?').toLowerCase()
   if (returnTo == 'yes' || returnTo == 'y'){
     alert('Sorry, thats not true')
   } else if (returnTo == 'no' || returnTo == 'n'){
     alert('Thats correct!');
     t++;
     return t;
   }
}
function2 ();

// var movie = prompt('Is Sabrina my favorite movie?').toLowerCase()
//    if (movie == 'yes' || m == 'y'){
//      alert('Thats correct!');
//      t++;
//    } else if (movie == 'no' || movie == 'n'){
//      alert('sorry, thats not true')
//    }
function function3(){
  var movie = prompt('Is Sabrina my favorite movie?').toLowerCase()
   if (movie == 'yes' || m == 'y'){
     alert('Thats correct!');
     t++;
     return t;
   } else if (movie == 'no' || movie == 'n'){
     alert('sorry, thats not true')
   }
}
function3();
// var song = prompt('Is my favorite song Shambala?').toLowerCase()
//    if (song == 'yes' || song == 'y'){
//      alert('Thats correct!');
//      t++;
//    } else if (song == 'no' || song == 'n'){
//      alert('Sorry, thats not correct.')
//    }
function function4(){
  var song = prompt('Is my favorite song Shambala?').toLowerCase()
   if (song == 'yes' || song == 'y'){
     alert('Thats correct!');
     t++;
     return t;
   } else if (song == 'no' || song == 'n'){
     alert('Sorry, thats not correct.')
   }
}
function4();
// var game = prompt('Is my favorite video game Torment?').toLowerCase()
//    if (game == 'yes' || game == 'y'){
//      alert('Thats correct!');
//      t++;
//    } else if (game == 'no' || game == 'n'){
//      alert('Thats incorrect!')
//    }
function function5(){
  var game = prompt('Is my favorite video game Torment?').toLowerCase()
   if (game == 'yes' || game == 'y'){
     alert('Thats correct!');
     t++;
     return t;
   } else if (game == 'no' || game == 'n'){
     alert('Thats incorrect!')
   }
}
function5();

// var correctAnswer = 12;
// for (var i = 4; i >= 1; i--){
//    var userGuess = prompt('guess a number between 1 and 20');
//     if (userGuess < 12){
//       alert('too low, try again');
//     } else if (userGuess > 12){
//       alert('too high, try again');
//     } else if (userGuess == 12){
//       alert('you got it!');
//       t++;
//       break;
//     }
      
// }
function functionA(){
  var correctAnswer = 12;
for (var i = 4; i >= 1; i--){
   var userGuess = prompt('guess a number between 1 and 20');
    if (userGuess < 12){
      alert('too low, try again');
    } else if (userGuess > 12){
      alert('too high, try again');
    } else if (userGuess == 12){
      alert('you got it!');
      t++;
      break;
    }
    return t;  
}
}
functionA();

// let arrayOfAnswers = ['Planescape: Torment', 'Final fantasy 7: Remake', 'Final Fantasy 7', 'Baldur\'s Gate 2', 'Baldur\'s Gate', 'Final Fantasy 11', 'Undertale', 'The Witcher 3', 'Cyberpunk 2077', 'Hades']
// outerloop:
// for (let i = 6; i >= 1; i--){
//   var gameAnswer = prompt('Final Question! What is one of my favorite games? You have ' + i + ' tries remaining.')
//   for (let a = 0; a < arrayOfAnswers.length; a++){
//     if (gameAnswer == arrayOfAnswers[a]){
//       alert('good job, thats correct!');
//       t++;
//       break outerloop;
//     } else {
//       alert('thats not one of my favorites.');
//       break;
//       }
//   }
//   if (i == 1){
//     alert('thats your last guess, game over! The correct answers were : Planescape: Torment, Final fantasy 7: Remake, Final Fantasy 7, Baldur\'s Gate 2, Baldur\'s Gate, Final Fantasy 11, Undertale, The Witcher 3, Cyberpunk 2077, Hades.')
//   }
// }
function functionB(){
  let arrayOfAnswers = ['Planescape: Torment', 'Final fantasy 7: Remake', 'Final Fantasy 7', 'Baldur\'s Gate 2', 'Baldur\'s Gate', 'Final Fantasy 11', 'Undertale', 'The Witcher 3', 'Cyberpunk 2077', 'Hades']
outerloop:
for (let i = 6; i >= 1; i--){
  var gameAnswer = prompt('Final Question! What is one of my favorite games? You have ' + i + ' tries remaining.')
  for (let a = 0; a < arrayOfAnswers.length; a++){
    if (gameAnswer == arrayOfAnswers[a]){
      alert('good job, thats correct!');
      t++;
      break outerloop;
    } else {
      alert('thats not one of my favorites.');
      break;
      }
  }
  if (i == 1){
    alert('thats your last guess, game over! The correct answers were : Planescape: Torment, Final fantasy 7: Remake, Final Fantasy 7, Baldur\'s Gate 2, Baldur\'s Gate, Final Fantasy 11, Undertale, The Witcher 3, Cyberpunk 2077, Hades.')
  } return t;
}
}
functionB();
alert('you got ' + t + ' answers correct.')
alert('thanks for checking out my page, hope to see you again soon!')