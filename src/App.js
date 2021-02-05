import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [ count, setCount ] = useState(0);
  
  useEffect(() => {
    document.title = `Cambio de title ${count}`
  })

  return (
    <div className="App">
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Aumer un numero</button>
    </div>
  );
}

export default App;
