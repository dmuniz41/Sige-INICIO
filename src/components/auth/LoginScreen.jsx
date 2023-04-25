import { useDispatch } from "react-redux";
import inicio from "../../assets/inicio.svg";
import { useForm } from "../../hooks/useForm";
import { startLogin } from "../../actions/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    user: "",
    password: "",
  });

  const { user, password } = formValues;

  const handleLogin = (e) => {
    dispatch(startLogin(user, password));
    e.preventDefault();
  };

  return (
    <div className="login_main">
      <div className="login_logo">
        <img src={inicio} alt="logo" />
      </div>
      <form className="login_box_container" onSubmit={handleLogin}>
        <h5 className="login_label">Usuario</h5>
        <input className="login_input" autoFocus type="text" name="user" id="input_user" value={user} onChange={handleInputChange} />
        <h5 className="login_label">Contraseña</h5>
        <input className="login_input" type="password" name="password" id="input_password" value={password} onChange={handleInputChange} />
        <button className="login_btn">ENTRAR</button>
      </form>
      <p className="login_footer">Copyright © INICIO-TEAM 2022</p>
    </div>
  );
};

export default LoginScreen;
