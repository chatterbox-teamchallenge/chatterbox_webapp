import Form from "../../components/Form/Form";
import "../../styles/components/_register.scss";
import logo from "../../img/logo.png";

const Register = () => {
  return (
    <div className="register container">
      <img className="register__logo" src={logo} alt="logo" />
      <Form type="register" isConfirmed={false} />
    </div>
  );
};

export default Register;
