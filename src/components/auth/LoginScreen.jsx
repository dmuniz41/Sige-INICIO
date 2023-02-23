import Icon from "../../assets/inicio.svg";

const LoginScreen = () => {
  return (
    <div className="login_main">
      <div className="login_logo">
        <img src={Icon} alt="React Logo" />
      </div>
      <div className="login_box_container">
        <h5 className="login_label">Nombre de Usuario</h5>
        <input
          className="login_input"
          autoFocus
          type="text"
          name="user"
          id="input_user"
        />
        <h5 className="login_label">Contraseña</h5>
        <input
          className="login_input"
          type="password"
          name="password"
          id="input_password"
        />
        <button className="login_btn">ENTRAR</button>
      </div>
      <p className="login_footer">Copyright © INICIO-TEAM 2022</p>
    </div>
  );
};

export default LoginScreen;
