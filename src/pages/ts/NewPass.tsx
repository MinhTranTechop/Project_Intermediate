import React, { useState } from "react";
import "../css/NewPass.css";
import logoAlta from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {   useParams , useNavigate} from "react-router-dom";
import {database} from "../../firebase"
import { update , ref  } from "@firebase/database";

// interface PasswordInputProps {
//   label: string;
// }
interface User {
  userName: string;
  password: string;
  email :string;
}
const NewPass: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
 
  const handleResetPassword =  () => {
   
    update(ref(database,`Users/${userId}`),{
        Password:password,
      
    });
    navigate('/login')
  };

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? "text" : "password";
  const [password1, setPassword1] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const inputType1 = showPassword1 ? "text" : "password";
  return (
    <div className="wrapper">
      <div className="login_wrapper">
        <div className="logo_login">
          <img className="logologin" src={logoAlta} alt="Logo" />
        </div>

        <span className="change_wrapper">Đặt lại mật khẩu</span>
        <form className="change-form">
          <label className="label_login">
            <p>Mật khẩu mới : </p>
            <input
              className="usertext"
              type={inputType}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="eyesPass">
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={toggleShowPassword}
            />
          </div>
          <label className="label_pass">
            <p>Nhập lại mật khẩu mới :</p>
            <input
              className="passtext"
              type={inputType1}
              id="password1"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
          </label>
          <div className="eyesPassNew">
            <FontAwesomeIcon
              icon={showPassword1 ? faEyeSlash : faEye}
              onClick={toggleShowPassword1}
            />
          </div>
          <div></div>
        </form>
        <div>
          
            <button className="btnXN" type="submit" onClick={handleResetPassword}>
             Lưu mật khẩu
            </button>
          
        </div>
      </div>
      
    </div>
  );
};

export default NewPass;
