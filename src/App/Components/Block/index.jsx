import { Link } from 'react-router-dom';

import './styles.css';

export const Block = ({ title, icon, text, link }) => {
  return (
    <div className="block-container">
      <div className="block-container-box">
        <span className="block-container-title">{title}</span>
        <span className="block-container-icon">{icon}</span>
        <span className="block-container-text">{text}</span>
        <Link to={link} className="block-container-link">
          zobacz więcej >
        </Link>
      </div>
    </div>
  );
};
