import React from 'react';
import logo from './logo.svg';
import './App.css';
// Joe :P

const runChallenge1 = () => {
  var isPrincessHappy = false;
  // Write your code below this
    isPrincessHappy = true;

  // Write your code above this
  if (isPrincessHappy) {
    console.log('You have solved the first challenge!');
  }
}

const runChallenge2 = () => {
  var princessName = '';
  // Write your code below this
    princessName = 'Veronica';

  // Write your code above this
  if (princessName === 'Veronica') {
    console.log('You have solved the second challenge!');
  }
}

const runChallenge3 = (princessBirthYear) => {
  var princessAge;
  // Write your code below this
    princessAge = 34;


  // Write your code above this
  if (princessAge === 34) {
    console.log('You have solved the third challenge!');
  }
}

const runChallenge4 = () => {
  var princesses = ['Anna', 'Syndi', 'Theodora'];
  // Write your code below this
 
  princesses.push('Joe');

  // Write your code above this
  if (princesses.length >= 4) {
    console.log('You have solved the fourth challenge!');
  }
}

const runChallenge5 = () => {
  var princesses = ['Anna', 'Syndi', 'Theodora'];
  // Write your code below this

princesses[0] = 'Veronica';

  // Write your code above this
  if (princesses[0] === 'Veronica') {
    console.log('You have solved the fifth challenge!');
  }
}

const runChallenge6 = () => {
  var princesses = ['Anna', 'Syndi', 'Theodora'];
  // Write your code below this

  //princesses.length=0;
princesses = [];

  // Write your code above this
  if (princesses.length === 0) {
    console.log('You have solved the sixth challenge!');
  }
}

function App() {
  runChallenge1();
  runChallenge2();
  runChallenge3(1986);
  runChallenge4();
  runChallenge5();
  runChallenge6();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
