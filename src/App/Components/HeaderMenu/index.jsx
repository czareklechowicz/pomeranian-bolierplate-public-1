import { ReactComponent as Settings } from '../../Images/setting.svg';
import { RoundImage } from '../../Components/RoundImage';
import { ReactComponent as ToggleArrow } from '../../Images/toggle-arrow.svg';

import './styles.css';

export const HeaderMenu = () => {
  return (
    <div className="header-menu-container">
      <Settings className="settings-icon" />
      <RoundImage
        size="60px"
        url={
          'https://www.e-korepetycje.net/images/users/3655/365553/230_user-image.jpg?2410191610'
        }
      />
      <div className="header-menu-content">
        <span className="header-menu-content-title">Czarek</span>
        <span className="header-menu-content-subtitle">Kursant</span>
      </div>
      <ToggleArrow className="toggle-icon" />
    </div>
  );
};
