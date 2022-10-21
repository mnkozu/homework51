import React from 'react';
import './Numbers.css';

interface NumbersProps {
  number: number;
}

const Numbers: React.FC<NumbersProps> = (props) => {
  return (
    <div className="number">
      <p>{props.number}</p>
    </div>
  );
};

export default Numbers;