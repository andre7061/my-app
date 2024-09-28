
import './App.css';
import Cub from './components/Cub';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [ind, setInd] = useState(0);
  const arrImg = [
    '/images/dice.png',
    '/images/dice2.png',
    '/images/dice3.png',
    '/images/dice4.png',
    '/images/dice5.png',
    '/images/dice6.png',
  ];
  function numRandom() {
    return setInd(Math.floor((Math.random() * arrImg.length)))
  }
  return (
    <>
      <Header />
      <Cub
        arr={arrImg[ind]}
        text={'Бросить кубик'}
        func={numRandom} />
    </>
  );
}

export default App;
