import { useState } from 'react';
import './styles.css';

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

export function CssColors() {
  const [color, setColor] = useState(`rgb(${r}, ${g}, ${b})`);

  const handleColor = () => {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    setColor(`rgb(${r}, ${g}, ${b})`);
    const randomColor = document.querySelector('.exercise-item-text');
    randomColor.style.color = color;
  };

  return (
    <>
      <div className="exercise-item-content">
        <p className={`exercise-item-text`}>Kolory Css</p>
        <button className="exercise-item-button" onClick={handleColor}>
          Change color!
        </button>
      </div>
    </>
  );
}
