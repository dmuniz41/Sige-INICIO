import Icon from "../../assets/inicio.svg";

const Navbar = () => {
  const user = "Daniel Muniz";
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={Icon} alt="icon" />
      </div>
      <div className="navbar_main_nav">
        <ul>
          <li className="navbar_main_nav_item">
            <img src="" alt="userImg" />
            <span>{user}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
