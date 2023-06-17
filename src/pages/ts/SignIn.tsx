import React, { useState, useEffect} from "react";
import logoAlta from "../../assets/logo.png";
import "../css/SignIn.css";

import { Link, useNavigate } from "react-router-dom";
import { ref, child, get } from "firebase/database";
import { database, auth } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useSelector, useDispatch } from 'react-redux';
import UserSlice, { login } from '../../store/UserSlice';
import { RootState } from "../../store/store";
// interface User {
//   id: string;
//   Name_User: string;
//   userName: string;
//   password: string;
// }


                

const SignIn = () => {
  const navigate = useNavigate();

  const [checkedPr, setCheckedPr] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

   const { data, loading, error } = useSelector(
        (state: RootState) => state.Users
    );
  
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const handleSubmit = () => {
    dispatch(login(userName, password));
  };
    console.log(data);
    

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
//   const handleLogin = async () => {
//     try {
//       const userRef = database
//         .ref("Users")
//         .orderByChild("UserName")
//         .equalTo(userName);
//       const snapshot = await userRef.once("value");
//       const userData = snapshot.val();

//       if (!userData) {
//         setError("Sai mật khẩu hoặc tên đăng nhập");

//         return;
//       }
//       const userId = Object.keys(userData)[0];
//       const user = userData[userId] as User;
//       const userame = userData[userId].Name_User as User;
//       const name = userData[userId].userName as User;

//       localStorage.setItem("id", userId);
//       localStorage.setItem("Name_User", userame.toString());
//       localStorage.setItem("userName", name.toString());
//       if (user.password.toString() !== password) {
//         setError("Sai mật khẩu hoặc tên đăng nhập ");

//         return;
//       }
//       //Login successful

//       navigate(`/profile/${userId}`);
//     } catch (error) {
//       console.error(error);
//       setError("Something went wrong");
//     }
//   };

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
        <form className="login-form" >
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

          <div className="eyes">
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={toggleShowPassword}
            />
          </div>

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
              <label htmlFor="my-checkbox">ghi nhớ đăng nhập</label>
            </div>
           
          </div>
          <div>
         
        </div>
        </form>
        <div className="btn_Login">
            <button className="btnDN" type="submit" onClick={handleSubmit}>
            {loading ? 'Loading...' : 'Đăng nhập'}
            </button>

            <Link to="/ForgetPass">
              <label className="forgetPass">
                {error ? <p>Quên mật khẩu?</p> : <p>Quên mật khẩu?</p>}
              </label>
            </Link>
          </div>
        
      </div>
      <div>
      {data && data.map((item: any) => (
        <div key={item.UserName}>{item.password}</div>
      ))}
    </div>
    </div>
    
  );
};

export default SignIn;
