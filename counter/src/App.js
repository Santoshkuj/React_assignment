import './App.css';
import {useState} from 'react'

function App() {
  const [x,setX] = useState(3)
  return (
    <div className="app">
      <div>{x}</div>
      <div className='button'>
      <button onClick={()=>setX(x+1)}>Increment</button>
      <button onClick={()=>setX(x-1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
