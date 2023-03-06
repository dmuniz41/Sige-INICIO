import { useDispatch } from "react-redux";
import inicio from "../../assets/inicio.svg";
import { useForm } from "../../hooks/useForm";
import { login } from "../../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    userName: "Daniel",
    password: "1234578",
  });

  const { userName, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userName));
  };

  return (
    <div className="login_main">
      <div className="login_logo">
        <img src={inicio} alt="logo" />
      </div>
      <form className="login_box_container" onSubmit={handleLogin}>
        <h5 className="login_label">Nombre de Usuario</h5>
        <input
          className="login_input"
          autoFocus
          type="text"
          name="userName"
          id="input_user"
          value={userName}
          onChange={handleInputChange}
        />
        <h5 className="login_label">Contraseña</h5>
        <input
          className="login_input"
          type="password"
          name="password"
          id="input_password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="login_btn">ENTRAR</button>
      </form>
      <p className="login_footer">Copyright © INICIO-TEAM 2022</p>
    </div>
  );
};

export default LoginScreen;
