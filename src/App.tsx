import { useState } from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hans' Vite + React App</h1>
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
