import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import crying from './assets/tenor.gif'
import audio from './assets/Male-Heavy-Whimpering-Crying-www.fesliyanstudios.com.mp3'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(null);
  const [font_size, setFontSize] = useState(3.2);

  const response = res => {
    if (res === 'yes') {
      setResult(res);
    } else {
      new Audio(audio).play();
      setFontSize(prevState => prevState * 1);
      setResult(res);
    }
  }

  return (
    <>
      {!result ? <h1>Mag a outing ba tayo?</h1> : (
        result === 'yes' ? <h1>Putangina tara</h1> : (
          <>
            <img src={crying} style={{ width: 200 }} />
            <h1 style={{ fontSize: `${font_size}em` }}>Bakit hindi?</h1>
          </>
        )
      )}
      <div className="buttons">
        <button onClick={() => response('yes')}>Yes</button>
        <button onClick={() => response('no')}>No</button>
      </div>
    </>
  )
}

export default App
