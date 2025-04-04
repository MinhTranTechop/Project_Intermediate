import React, { useState, useEffect } from "react";
import logoAlta from "../../assets/logo.png";
import "../css/SignIn.css";

import { Link, useNavigate } from "react-router-dom";
import { ref, child, get } from "firebase/database";
import { database } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useSelector, useDispatch } from "react-redux";
import UserSlice, { login } from "../../store/UserSlice";
import { RootState } from "../../store/store";

interface User {
  id: string;
  Lastname: string;
  UserName: string;
  Password: string;
  Position_User: string;
  Surname:string;
}

//  const { data, loading, error } = useSelector(
//       (state: RootState) => state.Users
//   );

// const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
// const handleSubmit = () => {
//   dispatch(login(userName, password));
// };
//   console.log(data);

// if (loading) {
//   return <div>Loading...</div>;
// }

// if (error) {
//   return <div>Error: {error}</div>;
// }

const SignIn = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checkedPr, setCheckedPr] = useState(false);
  const handleLogin = async () => {
    if(!password || !userName)
    {
      setError("Hãy nhập tài khoản và mật khẩu")
    }else{
    try {
      const userRef = database
        .ref("Users")
        .orderByChild("UserName")
        .equalTo(userName);
      const snapshot = await userRef.once("value");
      const userData = snapshot.val();
      
      if (!userData) {
        setError("Sai mật khẩu hoặc tên đăng nhập");

        return;
      }
      const userId = Object.keys(userData)[0];
      const user = userData[userId] as User;
      const Password = userData[userId].Password as User;
      const Surname = userData[userId].Surname as User;
      const Lastname = userData[userId].Lastname as User;
      const position = userData[userId].Position_User as User;
      localStorage.setItem("id", userId);
      localStorage.setItem("Password",Password.toString());
      localStorage.setItem("Surname", Surname.toString());
      localStorage.setItem("Lastname", Lastname.toString());
      localStorage.setItem("Position_User",position.toString());
     
      if (user.Password.toString() !== password) {
        setError("Sai mật khẩu hoặc tên đăng nhập ");

        return;
      }
      console.log(userData);

      navigate(`/profile/${userId}`);
    } catch (error) {
      console.log(error)
      setError("Something went wrong");
    }
  }
  };

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleCheckbox1 = () => {
    setCheckedPr(!checkedPr);
  };
  const inputType = showPassword ? "text" : "password";
  return (
    <div className="wrapper">
      <div className="login_wrapper">
        <div className="login_head">
          <div className="logo_login">
            <img className="logologin" src={logoAlta} alt="" />
          </div>

          <span>Đăng nhập</span>
        </div>
        <form className="login-form">
          <label className="label_login">
            <p>Tên đăng nhập *</p>
            {error ? (
              <input
                className="usertextError"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            ) : (
              <input
                className="usertext"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            )}
          </label>
          <label className="label_pass">
            <p>Mật khẩu *</p>
            {error ? (
              <input
                className="passtextError"
                type={inputType}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <input
                className="passtext"
                type={inputType}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
          </label>
          {error? 
          <div className="eyesEr">
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={toggleShowPassword}
          />
        </div>
          :
          <div className="eyes">
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={toggleShowPassword}
            />
          </div>
          }
          
          <p className="error_lg">{error}</p>
          <div className="my_checkbox">
            <div>
              <input type="checkbox" id="my-checkbox" name="my-checkbox" />
              <span
                className={`box_check ${checkedPr ? "checked" : ""}`}
                onClick={toggleCheckbox1}
              >
                {" "}
                {checkedPr && <h6 className="checkmark">&#10004;</h6>}
              </span>
              <label htmlFor="my-checkbox">Ghi nhớ đăng nhập</label>
            </div>
          </div>
        </form>

        <div className="btn_Login">
          <button className="btnDN" type="submit" onClick={handleLogin}>
            Đăng nhập
          </button>

          <Link to="/ForgetPass">
            <label className="forgetPass">
              {error ? <p>Quên mật khẩu?</p> : <p>Quên mật khẩu?</p>}
            </label>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SignIn;
