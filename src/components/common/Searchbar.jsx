import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  return (
    <form className="search-bar">
      <input
        type="text"
        id="query"
        name="query"
        placeholder="Search recipe here ..."
      />
      <button type="submit" className="search-btn">
        <BsSearch className="text-white" size={16} />
      </button>
    </form>
  );
};

export default Searchbar;
