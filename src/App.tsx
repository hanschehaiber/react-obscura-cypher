import { useState } from 'react';
import './App.css';
import { obscuraCypher } from './cypher';
import Message from './Message';

function App() {
  const [count, setCount] = useState(0);
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shifted = obscuraCypher(ALPHABET);

  return (
    <>
      <h1>Testing Deployment 2</h1>
      <h1>Hans' Vite + React App</h1>
      <div>{ALPHABET}</div>
      <div>{shifted}</div>
      <div className="card">
        <Message></Message>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
