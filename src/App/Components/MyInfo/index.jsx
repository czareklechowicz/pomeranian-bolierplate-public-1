import { RoundImage } from '../RoundImage';

import './styles.css';

export const MyInfo = () => {
  return (
    <div className="my-info">
      <RoundImage
        size="150px"
        url={
          'https://www.e-korepetycje.net/images/users/3655/365553/230_user-image.jpg?2410191610'
        }
      />
      <div className="my-info-box">
        <span className="main-text">Czarek Lechowicz</span>
        <span className="sub-text">Poznań</span>
      </div>
      <div className="my-info-box">
        <span className="sub-text">e-mail</span>
        <span className="sub-text">czareklechowicz2000@wp.pl</span>
      </div>
      <div className="my-info-box">
        <span className="sub-text">telefon</span>
        <span className="sub-text">530 509 988</span>
      </div>
    </div>
  );
};
