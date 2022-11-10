import "./form.scss";
import { AiOutlineSearch } from "react-icons/ai";
function SearchBox() {
  return (
    <form className="form_area">
      <input type="search" placeholder="Search..." />
      <button type="submit">
        <AiOutlineSearch size={24} color="#3498db" />
      </button>
    </form>
  );
}

export default SearchBox;
