import {
  bell_icon,
  plus_icon,
  search_icon,
  settings_icon,
  whatsapp_icon,
} from "../../constants/exportIcons";
import Avatar from "../Avatar/Avatar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h2>Team members</h2>
      <div className="icons">
        <img src={search_icon} className="iconsvg" alt="" />
        <img src={whatsapp_icon} className="iconsvg whatsapp" alt="" />
        <img src={settings_icon} className="iconsvg" alt="" />
        <img src={plus_icon} className="iconsvg" alt="" />
        <img src={bell_icon} className="iconsvg" alt="" />

        <Avatar />
      </div>
    </div>
  );
};

export default Header;
