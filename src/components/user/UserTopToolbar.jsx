import { useEffect } from "react";
import { FaPlus, FaEdit, FaTrashAlt, FaFlag, FaRedo, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserTopToolbar = () => {
  const { selectedUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (Object.keys(selectedUser).length !== 0) {
      document.getElementById("delete_user_btn").disabled = false;
      document.getElementById("edit_user_btn").disabled = false;
      // document.getElementById("privileges_user_btn").disabled = false;
    } else {
      document.getElementById("delete_user_btn").disabled = true;
      document.getElementById("edit_user_btn").disabled = true;
      // document.getElementById("privileges_user_btn").disabled = true;
    }
  }, [selectedUser]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="section_top_toolbar">
      <div className="top_toolbar_action">
        <button className="toolbar_btn">
          <Link to="/dashboard/user/add">
            <FaPlus />
          </Link>
        </button>
        <button id="edit_user_btn" className="toolbar_btn" disabled>
          <Link to="/dashboard/user/edit">
            <FaEdit />
          </Link>
        </button>
        <button id="delete_user_btn" className="toolbar_btn" disabled>
          <Link to="/dashboard/user">
            <FaTrashAlt />
          </Link>
        </button>
        <button id="privileges_user_btn" className="toolbar_btn" disabled>
          <Link to="/dashboard/user">
            <FaFlag />
          </Link>
        </button>
        <button className="toolbar_btn" onClick={() => window.location.reload()}>
          <Link to="/dashboard/user">
            <FaRedo />
          </Link>
        </button>
      </div>

      <div className="top_toolbar_search">
        <form onSubmit={handleSearch}>
          <input type="search" name="Buscar" placeholder="Buscar" />
          <button disabled>
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};
