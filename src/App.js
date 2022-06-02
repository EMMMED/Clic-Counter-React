import './App.css';
import Button from './Components/Buttons';
import logoCactus from './img/logo-cactus.png'
import Counter from './Components/Counter'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const clicHandler = () => {
    setCount(count + 1)
  }

  const restartCounter = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img
        className='logo-cactus' 
        src={logoCactus} 
        alt="logo-cactus" />
      </div>
      <div className='count'>
      </div>
      <div className='clic-container'>
        <Counter 
        numClic={count} />
        <Button
          texto='Clic'
          isClic={true}
          clicHandler={clicHandler}
        />
        <Button
          texto='Restart'
          isClic={false}
          clicHandler={restartCounter}
        />
      </div>
      <footer>
        <h3>COUNTER APP, by EMMMED</h3>
      </footer>
    </div>
  );
}

export default App;
