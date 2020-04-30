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
  if (princesses.length === 0) {
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
    if (isNaN(inputNumber)) { 
    outputElement.innerHTML = 'Error: Not a number.';
  }
  // Write your code below this
  // Sorry, no automatic grading - you need to know if you solved this one yourself

  // Output the name of the disney princess matching the input number - make sure to check for
  // cases where there is no number accociated with a princess, and display some error if that
  // happens. Think about what the edge cases are and make sur to test those.

  // Write your code above this
  else{
    debugger;
    if (inputNumber<13 && inputNumber>0){
    
      outputElement.innerHTML = listOfOfficialDisneyPrincesses[inputElement.value-1];
    
    }
    else{
      if (inputNumber<31 && inputNumber>29){
        outputElement.innerHTML = listOfOfficialDisneyPrincesses.map(
          (name, index) => `${index+1} ${name}`
        ).join('<br />');
      //if (inputElement.value === 13){
        // outputElement.innerHTML = '1 SnowWhite   2 Cinderella   3 Aurora   4 Ariel   5 Belle   6 Jasmine   7 Pocahontas   8 Mulan   9 Tiana   10 Rapunzel   11 Merida   12 Moana';
        //outputElement.innerHTML = 'it works';
      }
      else{  
        outputElement.innerHTML = 'No Prinzess has this number. Check out their numbers with pressing 30';
      }
    }
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
      </div>
    </div>
  );
}

export default App;
