import { IoMdMenu, IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineLogout } from "react-icons/md";
import { useProSidebar } from "react-pro-sidebar";
import userImg from "../../assets/dani.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = "Daniel Muñiz";
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="navbar">
      <button className="collapse_btn" onClick={() => collapseSidebar()}>
        <IoMdMenu />
      </button>
      <div className="navbar_main_nav">
        <ul>
          <li className="navbar_main_nav_item">
            <img src={userImg} alt="userImg" />
            <span>{user}</span>

            <button className="user_dropdown collapse_btn">
              <MdKeyboardArrowDown className="dropdown_icon" />
              <div className="dropdown-content">
                <div className="dropdown_item">
                  <IoMdSettings className="dropdown_item_icon" />
                  <span>Configuración</span>
                </div>
                <div className="dropdown_item">
                  <MdOutlineLogout className="dropdown_item_icon" />
                  <span>Salir</span>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
