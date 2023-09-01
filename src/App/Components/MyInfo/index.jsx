import { RoundImage } from '../RoundImage';

import './styles.css';

export const MyInfo = () => {
  return (
    <div className="my-info">
      <RoundImage
        size="150px"
        url={
          'https://media.licdn.com/dms/image/D4E03AQHREH3X6V-64Q/profile-displayphoto-shrink_800_800/0/1684427938346?e=2147483647&v=beta&t=nsfR5W3Mi-du6tI1pZsn7_Ouar0KhMaDltWJu23MnyA'
        }
      />
      <div className="my-info-box">
        <span className="main-text">Konrad Wojtyło</span>
        <span className="sub-text">Brzeg</span>
      </div>
      <div className="my-info-box">
        <span className="sub-text">e-mail</span>
        <span className="sub-text">gmail@gmail.com</span>
      </div>
      <div className="my-info-box">
        <span className="sub-text">telefon</span>
        <span className="sub-text">999 999 999</span>
      </div>
    </div>
  );
};
