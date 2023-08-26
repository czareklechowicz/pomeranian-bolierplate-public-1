import './styles.css';

import cat from '../../../Images/cat.jpg';

export function ImageFiles() {
  return (
    <div>
      <img
        className="exercises-img-element"
        src={cat}
        alt="Brązowy kot bengalski"
      />
    </div>
  );
}
