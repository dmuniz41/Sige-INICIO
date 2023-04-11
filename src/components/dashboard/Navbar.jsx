import { IoMdMenu, IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineLogout } from "react-icons/md";
import { useProSidebar } from "react-pro-sidebar";
import userImg from "../../assets/dani.jpg";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const { collapseSidebar } = useProSidebar();

  const user = "Daniel Muñiz";

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
  };

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

            <div className="user_dropdown collapse_btn">
              <MdKeyboardArrowDown className="dropdown_icon" />
              <div className="dropdown-content">
                <div className="dropdown_item">
                  <IoMdSettings className="dropdown_item_icon" />
                  <span>Configuración</span>
                </div>
                <div className="dropdown_item">
                  <button onClick={handleLogout}>
                    <MdOutlineLogout className="dropdown_item_icon" />
                    Salir
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
