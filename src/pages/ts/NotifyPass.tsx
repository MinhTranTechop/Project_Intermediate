import React , {useState} from "react";
import "../css/NotifyPass.css";
import logoAlta from "../../assets/logo.png";

import { Link ,useNavigate } from "react-router-dom";
import  {database  }  from "../../firebase";

const NotifyPass = () => {
  return (
    <div className="wrapper">
    <div className="forget_wrapper">
      
      <div className="logo_login">
        <img className="logologin" src={logoAlta} />
      </div>
      <form className="forget_form">
        <label className="label_forget">
          <h3 className="passname">Khôi phục mật khẩu</h3>
          <p>Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm tra mail. <br/> Click vào đường link được đính kèm trong mail để chuyển đến trang đặt lại mật khẩu.  </p>
          
        </label>

        <div></div>
      </form>
      <div className="footer_Np">
        
        <Link className="link-nav" to="/login">
            
            <span className="btnHuy" >
          Quay lại trang đăng nhập
            </span>
          </Link>
      </div>
    </div>
   
  </div>
  )
}

export default NotifyPass
