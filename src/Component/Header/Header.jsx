import SearchBox from "../Form/SearchBox";
import "./header.scss";

function Header() {
  return (
    <header className="header_wrapper">
      <div className="logo_area">
        <h3>Travel Advisor</h3>
      </div>
      <div className="header_search_area">
      <h4>Expolore New Place</h4>
        <SearchBox />
      </div>
    </header>
  );
}

export default Header;
