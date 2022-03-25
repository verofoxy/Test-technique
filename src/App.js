import logo from './logo.svg';
import React from 'react';
import './App.css';
import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators';

function App() {

  function hello() {

    fromEvent(document, 'click')
      .pipe(
        throttleTime(1000),
        scan(count => count + 1, 0)

      )
      .subscribe(count => {
        if (count % 3 === 0 && count % 5 === 0) {
          console.log("FizzBuzz", count)
        }
        else if (count % 3 === 0) {
          console.log("Fizz", count)
        }
        else if (count % 5 === 0) {
          console.log("Buzz", count)
        }
        else if (count % 3 !== 0 && count % 5 !== 0) {
          console.log(`Clickkkkked ${count} times`)
        }
      })

  }

  hello();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"
          onClick={() => hello()} />

      </header>
    </div>
  );
}

export default App;
