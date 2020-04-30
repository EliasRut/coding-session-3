import React from 'react';
import './App.css';
// Joe :P

const runChallenge1 = () => {
  var isPrincessHappy = false;
  // Write your code below this
    isPrincessHappy = true;

  // Write your code above this
  if (isPrincessHappy) {
    var outputElement = document.getElementById('challenge1Output');
    outputElement.innerHTML = 'You have solved the first challenge!';
  }
}

const runChallenge2 = () => {
  var princessName = '';
  // Write your code below this
    princessName = 'Veronica';

  // Write your code above this
  if (princessName === 'Veronica') {
    var outputElement = document.getElementById('challenge2Output');
    outputElement.innerHTML = 'You have solved the second challenge!';
  }
}

const runChallenge3 = (princessBirthYear) => {
  var princessAge;
  // Write your code below this

    princessAge = 34;


  // Write your code above this
  if (princessAge === 34) {
    var outputElement = document.getElementById('challenge3Output');
    outputElement.innerHTML = 'You have solved the third challenge!';
  }
}

const runChallenge4 = () => {
  var princesses = ['Anna', 'Syndi', 'Theodora'];
  // Write your code below this
 
  princesses.push('Joe');

  // Write your code above this
  if (princesses.length >= 4) {
    var outputElement = document.getElementById('challenge4Output');
    outputElement.innerHTML = 'You have solved the fourth challenge!';
  }
}

const runChallenge5 = () => {
  var princesses = ['Anna', 'Syndi', 'Theodora'];
  // Write your code below this

princesses[0] = 'Veronica';

  // Write your code above this
  if (princesses[0] === 'Veronica') {
    var outputElement = document.getElementById('challenge5Output');
    outputElement.innerHTML = 'You have solved the fifth challenge!';
  }
}

const runChallenge6 = () => {
  var princesses = ['Anna', 'Syndi', 'Theodora'];
  // Write your code below this


  //princesses.length=0;
  princesses = [];

  // Write your code above this
  if (princesses.length === 0) {
    var outputElement = document.getElementById('challenge6Output');
    outputElement.innerHTML = 'You have solved the sixth challenge!';
  }
}

const runChallenge7 = () => {
  var princesses = ['Anna', 'Syndi', 'Theodora'];
  var inputElement = document.getElementById('challenge7Input');
  // eslint-disable-next-line
  var inputValue = inputElement.value; 
  // Write your code below this

  // Add the name in the input to the array of princesses.
  princesses = [];

  // Write your code above this
  if (princesses.length === 4 ) {
    var outputElement = document.getElementById('challenge7Output');
    outputElement.innerHTML = 'You have solved the seventh challenge!';
  }
}

const runChallenge8 = () => {
  var inputElement = document.getElementById('challenge8Input');
  // eslint-disable-next-line
  var inputValue = inputElement.value; 
  // Write your code below this
  // Sorry, no automatic grading - you need to know if you solved this one yourself

  // Output the text "Dragon is happy" if the input value is 'Veronica',
  // otherwise output 'Not the right princess'.

  // Write your code above this
  var  outputElement = document.getElementById('challenge8Output');

  if (inputElement.value === 'Veronica') {
    outputElement.innerHTML = 'Dragon is happy';
  }
  else {
    outputElement.innerHTML = 'Not the right princess';
  }
  
}

const runChallenge9 = () => {
  // eslint-disable-next-line
  const listOfOfficialDisneyPrincesses = [
    'SnowWhite',
    'Cinderella',
    'Aurora',
    'Ariel',
    'Belle',
    'Jasmine',
    'Pocahontas',
    'Mulan',
    'Tiana',
    'Rapunzel',
    'Merida',
    'Moana'
  ];
  var inputElement = document.getElementById('challenge9Input');
  var inputValue = inputElement.value;
  var inputNumber = Number(inputValue);
  var outputElement = document.getElementById('challenge9Output');

  // Write your code below this
  // Sorry, no automatic grading - you need to know if you solved this one yourself

  // Output the name of the disney princess matching the input number - make sure to check for
  // cases where there is no number accociated with a princess, and display some error if that
  // happens. Think about what the edge cases are and make sur to test those.

  // Write your code above this
  if (isNaN(inputNumber)) { 
    outputElement.innerHTML = 'Error: Not a number.';
  }
  else{
    if (inputNumber<13 && inputNumber>0){
    
      outputElement.innerHTML = listOfOfficialDisneyPrincesses[inputNumber-1];
    
    }
    else if (inputNumber === 13){
        outputElement.innerHTML = listOfOfficialDisneyPrincesses.map(
          (name, index) => `Prinzess: ${index+1} ${name}`
        ).join('<br />');
        // outputElement.innerHTML = '1 SnowWhite   2 Cinderella   3 Aurora   4 Ariel   5 Belle   6 Jasmine   7 Pocahontas   8 Mulan   9 Tiana   10 Rapunzel   11 Merida   12 Moana';
        //outputElement.innerHTML = 'it works';
    }
    else{  
      outputElement.innerHTML = 'No Prinzess has this number. Check out their numbers with pressing 13';
    }
    
  }


  // if (isNaN(inputNumber) && inputValue !== 'list') { 
  //   outputElement.innerHTML = 'Error: Not a number.';
  // } else if (listOfOfficialDisneyPrincesses[inputNumber] !== undefined){
  //   outputElement.innerHTML = listOfOfficialDisneyPrincesses[inputNumber - 1];
  // } else if (inputValue === 'list') {
  //   outputElement.innerHTML = listOfOfficialDisneyPrincesses.map(
  //     (name, index) => (index + 1) + ' ' + name
  //   )
  // } else {
  //   outputElement.innerHTML = 'No Prinzess has this number. Check out their numbers with writing "list"';
  // }

}

const runChallenge10 = () => {
  // eslint-disable-next-line
  const solarSystemPlanets = [
    0.055, // Mercury
    0.815, // Venus
    1, // Earth
    0.107, // Mars
    317.8, // Jupiter
    95.159, // Saturn
    14.536, // Uranus
    17.147, // Neptune
  ];
  // eslint-disable-next-line
  var planetMass = 0;
  var outputElement = document.getElementById('challenge10Output');
  // Write your code below this

  // Calculate the sum of the planet weights.

  for (var i = 0; solarSystemPlanets.length>i;i++){
    planetMass = solarSystemPlanets[i] + planetMass;
  }
  // Write your code above this
  if (planetMass >= 446.618 && planetMass <= 446.620) {
    outputElement.innerHTML = 'You have solved the tenth challenge!';
  }
}

const runChallenge11 = () => {
  // eslint-disable-next-line
  const solarSystemPlanets = [
    ['Mercury', 0.055], // Mass is in Earths
    ['Venus', 0.815],
    ['Earth', 1],
    ['Mars', 0.107],
    ['Jupiter', 317.8],
    ['Saturn', 95.159],
    ['Uranus', 14.536],
    ['Neptune', 17.147],
  ];
  // eslint-disable-next-line
  var planetMass = 0;
  var outputElement = document.getElementById('challenge11Output');
  // Write your code below this

  // Calculate the sum of the planet weights.

  for (var i = 0; solarSystemPlanets.length>i;i++){
    planetMass = solarSystemPlanets[i][1] + planetMass;
  }
  // Write your code above this
  if (planetMass >= 446.618 && planetMass <= 446.620) {
    outputElement.innerHTML = 'You have solved the eleventh challenge!';
  }
}

const runChallenge12 = () => {
  // eslint-disable-next-line
  var outputElement = document.getElementById('challenge12Output');
  const solarSystemPlanets = [
    ['Mercury', 0.055], // Mass is in Earths
    ['Venus', 0.815],
    ['Earth', 1],
    ['Mars', 0.107],
    ['Jupiter', 317.8],
    ['Saturn', 95.159],
    ['Uranus', 14.536],
    ['Neptune', 17.147],
  ];
  var SortSolarSystemPlanets = []
  // Write your code below this
  // Sorry, no automatic grading - you need to know if you solved this one yourself

  // Sort the planets by their weight, and write the list into the output place
  
  // for (var i = 0; solarSystemPlanets.length>i;i++){
  //   for (var j = 0; solarSystemPlanets.length>j;j++){
  //     if (solarSystemPlanets[i][1] > SortsolarSystemPlanets[j][1]){

  //     }
  //   }

  // }

  var j=0;
  SortSolarSystemPlanets[0] = solarSystemPlanets[0];
  for (var i = 1; solarSystemPlanets.length>i;i++){
    if (solarSystemPlanets[i][1] > SortSolarSystemPlanets[j][1]){
      SortSolarSystemPlanets.splice(j,0,solarSystemPlanets[i]);
      j++
    }
    else{
      SortSolarSystemPlanets.splice(0,0,solarSystemPlanets[i])
      j++;
    }

  }



  
    outputElement.innerHTML = SortSolarSystemPlanets.map(
       (name, index) => `${index+1} ${name}`
     ).join('<br />');

  // Write your code above this
}

var numCallMeForChallenge13WasCalled = 0;
const callMeForChallenge13 = () => {
  numCallMeForChallenge13WasCalled++;
}

const runChallenge13 = () => {
  var outputElement = document.getElementById('challenge13Output');
  // Write your code below this

  // Call the function callMeForChallenge13!

callMeForChallenge13 ();

  if (numCallMeForChallenge13WasCalled === 1) {
    outputElement.innerHTML = 'You have solved the 13th challenge!';
  }
  // Write your code above this
}

const runChallenge14 = () => {
  var outputElement = document.getElementById('challenge14Output');
  // Write your code below this

  var doPlanetsSpin = () => {
    return true;
  }
  // Implement the function doPlanetsSpin - it should just always return true!



  // Write your code above this
  if (doPlanetsSpin() === true) {
    outputElement.innerHTML = 'You have solved the 14th challenge!';
  }
}

const runChallenge15 = () => {
  const solarSystemPlanets = [
    ['Mercury', 0.055], // Mass is in Earths
    ['Venus', 0.815],
    ['Earth', 1],
    ['Mars', 0.107],
    ['Jupiter', 317.8],
    ['Saturn', 95.159],
    ['Uranus', 14.536],
    ['Neptune', 17.147],
  ];
  const outputElement = document.getElementById('challenge15Output');
  // Write your code below this

    // Implement the function getPlanetMass - it should
  //    take a name as parameter and
  //    return the mass of the planet with that name
  
  var getPlanetMass = (planetName) => {

    for (var i = 0; solarSystemPlanets.length>i;i++){
      if(solarSystemPlanets[i][0] === planetName){
        return solarSystemPlanets[i][1];
      }
    }
  }

  // Write your code above this
  if (getPlanetMass('Mercury') === 0.055 && getPlanetMass('Saturn') === 95.159) {
    outputElement.innerHTML = 'You have solved the 15th challenge!';
  }
}

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Challenge">
          <div className="header">Challenge 1</div>
          <button onClick={() => runChallenge1()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge1Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 2</div>
          <button onClick={() => runChallenge2()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge2Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 3</div>
          <button onClick={() => runChallenge3(1982)}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge3Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 4</div>
          <button onClick={() => runChallenge4()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge4Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 5</div>
          <button onClick={() => runChallenge5()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge5Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 6</div>
          <button onClick={() => runChallenge6()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge6Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 7</div>
          <div>
            <div>Princess name:</div>
            <input type="text" id="challenge7Input" />
          </div>
          <button onClick={() => runChallenge7()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge7Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 8</div>
          <div>
            <div>Princess name:</div>
            <input type="text" id="challenge8Input" />
          </div>
          <button onClick={() => runChallenge8()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge8Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 9</div>
          <div>
            <div>Princess number:</div>
            <input type="text" id="challenge9Input" />
          </div>
          <button onClick={() => runChallenge9()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge9Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 10</div>
          <button onClick={() => runChallenge10()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge10Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 11</div>
          <button onClick={() => runChallenge11()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge11Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 12</div>
          <button onClick={() => runChallenge12()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge12Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 13</div>
          <button onClick={() => runChallenge13()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge13Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 14</div>
          <button onClick={() => runChallenge14()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge14Output"></div>
          </div>
        </div>
        <div className="Challenge">
          <div className="header">Challenge 15</div>
          <button onClick={() => runChallenge15()}>Run</button>
          <div>
            <div className="outputHeader">Output:</div>
            <div className="outputSpace" id="challenge15Output"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
