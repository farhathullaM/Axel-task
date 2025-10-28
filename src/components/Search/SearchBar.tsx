import "./SearchBar.scss";
import { search_icon } from "../../constants/exportIcons";

const SearchBar = () => {
  return (
    <div className="search">
      <img src={search_icon} className="search-icon" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
