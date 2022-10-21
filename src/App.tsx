import React, {useState} from 'react';
import Numbers from "./Numbers/Numbers";
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

  const getRandom = () => {
    return Math.floor(Math.random() * (37 - 5)) + 5;
  };

  const sortAndSet = () => {
    const arrOfRandomNums:any = [];

    while (arrOfRandomNums.length < 5) {
      const randomNumSave = getRandom();

      if (!arrOfRandomNums.includes(randomNumSave)) {
        arrOfRandomNums.push(randomNumSave);
      } else {
        continue;
      }
    }

    arrOfRandomNums.sort((a:number, b:number) => a - b);

    setNumbers(arrOfRandomNums);
  };

  const numChange = numbers.map((number, index) => {
    return (
      <Numbers
        number={number}
        key = {index}
      />
    );
  });

  return (
    <div className="App">
      <div className='numbers'>{numChange}</div>
      <button onClick={sortAndSet} className='btn'>New numbers</button>
    </div>
  );
}
export default App;
