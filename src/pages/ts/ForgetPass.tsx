import React , {useState} from "react";
import "../css/ForgetPass.css";
import logoAlta from "../../assets/logo.png";

import { Link ,useNavigate } from "react-router-dom";
import  {database  }  from "../../firebase";
interface User {
  userName: string;
  email: string;
}

const ForgetPass: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async () => {
    try {
      const userRef = database.ref("Users").orderByChild("email").equalTo(email);
      const snapshot = await userRef.once("value");
      const userData = snapshot.val();
      if (!userData) {
        
        setError("không tồn tại email");
        console.log(userData)
        return;
      }
      
       const userId = Object.keys(userData)[0];
     const user = userData[userId] as User;
      if (user.email.toString() !== email) {
        console.log(user)
        setError("không tồn tại email ");
        
        return;
      }
      // Login successful
      navigate(`/NewPass/${userId}`);
  

      
      
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    }
  };
  return (
    <div className="wrapper">
      <div className="forget_wrapper">
        
        <div className="logo_login">
          <img className="logologin" src={logoAlta} />
        </div>
        <form className="forget_form">
          <label className="label_forget">
            <h3 className="passname">Khôi phục mật khẩu</h3>
            <p>Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu</p>
            <input className="emailtext" type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>

          <div></div>
        </form>
        <div className="footer_Fp">
          <div className="btnForget">
           

              {" "}
              <button className="btnTT" type="submit" onClick={handleLogin}>
                Xác nhận
              </button>
           {error }
          </div>
          <Link className="link-nav" to="/login">
              
              <span className="btnHuy" >
            Quay lại trang đăng nhập
              </span>
            </Link>
        </div>
      </div>
     
    </div>
  );
};

export default ForgetPass;
