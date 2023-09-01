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
          'https://media.licdn.com/dms/image/D4E03AQHREH3X6V-64Q/profile-displayphoto-shrink_800_800/0/1684427938346?e=2147483647&v=beta&t=nsfR5W3Mi-du6tI1pZsn7_Ouar0KhMaDltWJu23MnyA'
        }
      />
      <div className="header-menu-content">
        <span className="header-menu-content-title">Konrad</span>
        <span className="header-menu-content-subtitle">kursant</span>
      </div>
      <ToggleArrow className="toggle-icon" />
    </div>
  );
};
