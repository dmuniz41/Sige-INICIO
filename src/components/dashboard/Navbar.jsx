import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useProSidebar } from "react-pro-sidebar";
import userImg from "../../assets/dani.jpg";

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
                <p>Hello</p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
