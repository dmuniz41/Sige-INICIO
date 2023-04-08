import { FaPlus, FaEdit, FaTrashAlt, FaFlag, FaRedo, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const UserTopToolbar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="section_top_toolbar">
      <div className="top_toolbar_action">
        <div className="toolbar_btn">
          <Link to="/dashboard">
            <FaPlus />
          </Link>
        </div>
        <div className="toolbar_btn">
          <Link to="/dashboard">
            <FaEdit />
          </Link>
        </div>
        <div className="toolbar_btn">
          <Link to="/dashboard">
            <FaTrashAlt />
          </Link>
        </div>
        <div className="toolbar_btn">
          <Link to="/dashboard">
            <FaFlag />
          </Link>
        </div>
        <div className="toolbar_btn">
          <Link to="/dashboard">
            <FaRedo />
          </Link>
        </div>
      </div>

      <div className="top_toolbar_search">
        <form onSubmit={handleSearch}>
          <input type="search" name="Buscar" placeholder="Buscar" />
          <button>
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};
