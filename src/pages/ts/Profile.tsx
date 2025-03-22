import React, { useState, useEffect } from "react";
import Navbar from "../../components/bars/ts/Sidebar";
import Topbar from "../../components/bars/ts/Topbar";
import "../css/Profile.css";
import avata from "../../assets/avata.png";
import iconEdit from "../../assets/fi_edit.png";
import iconNewPass from "../../assets/Padlock.png";
import iconLogout from "../../assets/fi_log-out.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import camera from "../../assets/fi_camera.png";
import iconCheck from "../../assets/fi_check.png";
import { useParams, Link } from "react-router-dom";
import { database } from "../../firebase";
import { ref, child, get, update } from "firebase/database";

const Profile: React.FC = () => {
  const [edit, SetEdit] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const { userId } = useParams<{ userId: string }>();
  const [users, setUsers] = useState<any>();
  const [updatePr, SetUpdatePr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordNow, setPasswordNow] = useState("");
  const [showPasswordNow, setShowPasswordNow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password1, setPassword1] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [errorNow, SetErrorNow] = useState("");
  const [NewPassPr,SetNewPassPr]= useState(false);
  // const Surname = localStorage.getItem("Surname");
  const alo = localStorage.getItem("Password");
  console.log(alo);
  
  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `Users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setUsers(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);
  const handleIconEdit = () => {
    SetEdit(true);
    setIsEnabled(!isEnabled);
  };
  const handleCancel = () => {
    SetEdit(false);
    setIsEnabled(isEnabled);
    SetUpdatePr(false);
    SetNewPassPr(false);
  };
  const handleUpdate = async () => {
   
    SetEdit(false);
    SetUpdatePr(true);
    setIsEnabled(!isEnabled);
    await update(ref(database, `Users/${userId}`), {
      ...users,
    });
  };
  setTimeout(() => {
    const myDiv = document.getElementById("myDiv");
    if (myDiv) {
      myDiv.style.visibility = "hidden";
    }
  }, 8000);
  const toggleShowPasswordNow = () => {
    setShowPasswordNow(!showPasswordNow);
  };

  const inputTypeNow = showPasswordNow ? "text" : "password";
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPassword ? "text" : "password";

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const inputType1 = showPassword1 ? "text" : "password";

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
    document.body.classList.add("no-scroll");
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.classList.remove("no-scroll");
  };
  const UpdatePassPopup = () => {
    if (users.Password !== passwordNow) {
      SetErrorNow("Mật khẩu hiện tại sai !!!!");
    }else if(password !== password1)
    {
      SetErrorNow("Mật khẩu mới nhập lại không trùng !!")
    } else{
      SetNewPassPr(true);
      setShowPopup(false);
      
      document.body.classList.remove("no-scroll");
      update(ref(database,`Users/${userId}`),{
        Password:password,
      });
   
    }
  };
  return (
    <div className="profile-main">
      <Navbar />
      <Topbar />
      <span className="Name_Page">Thông tin cơ bản</span>
      {users ? (
        <div className="profile-form">
          <div className="img">
            <img className="avata-Profile" src={avata} alt="" />
            <span className="name_Profile">
              {users.Surname} {users.Lastname}
            </span>
            <img className="camera_Profile" src={camera} alt="" />
          </div>

          <div className="profile_group" key={users.userId}>
            <div className="profile-name">
              <p>Họ:</p>
              <input
                className="textProfile"
                onChange={(e) =>
                  setUsers({
                    ...users,
                    Surname: e.target.value,
                  })
                }
                value={users.Surname}
                disabled={!isEnabled}
              />
            </div>
            <div className="profile-loginin">
              <p>Tên:</p>
              <input
                className="textProfile"
                onChange={(e) =>
                  setUsers({
                    ...users,
                    Lastname: e.target.value,
                  })
                }
                value={users.Lastname}
                disabled={!isEnabled}
              />
            </div>
            <div className="profile-phone">
              <p>Ngày sinh:</p>
              <input
                className="textProfile"
                onChange={(e) =>
                  setUsers({
                    ...users,
                    Date_User: e.target.value,
                  })
                }
                value={users.Date_User}
                disabled={!isEnabled}
              />
            </div>
            <div className="profile-pass">
              <p>Số điện thoại:</p>
              <input
                className="textProfile"
                onChange={(e) =>
                  setUsers({
                    ...users,
                    Phone_User: e.target.value,
                  })
                }
                value={users.Phone_User}
                disabled={!isEnabled}
              />
            </div>
            <div className="profile-email">
              <p>Email:</p>
              <input
                className="textProfileLog"
                onChange={(e) =>
                  setUsers({
                    ...users,
                    email: e.target.value,
                  })
                }
                value={users.email}
                disabled
              />
            </div>
            <div className="profile-email">
              <p>Tên Đăng nhập:</p>
              <input
                className="textProfileLog"
                onChange={(e) =>
                  setUsers({
                    ...users,
                    UserName: e.target.value,
                  })
                }
                value={users.UserName}
                disabled
              />
            </div>
            <div className="profile-position">
              <p>vai trò:</p>
              <input
                className="textProfileAuth"
                onChange={(e) =>
                  setUsers({
                    ...users,
                    Position_User: e.target.value,
                  })
                }
                value={users.Position_User}
                disabled
              />
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
      {edit ? (
        <p></p>
      ) : (
        <div className="btn_Profile">
          <div className="btn_Pr">
            <div className="btn_IconPr">
              {" "}
              <img src={iconEdit} alt="" onClick={handleIconEdit} />
            </div>
            <br />
            <span>Sửa thông tin</span>
          </div>
          <div className="btn_Pr">
            <div className="btn_IconPr">
              <img
                onClick={openPopup}
                className="btnAddPr"
                src={iconNewPass}
                alt=""
              />
              {showPopup && (
                <div className="popup-overlay">
                  <div className="popup-content">
                    <h3>Thay đổi mật khẩu</h3>
                    <form className="new_PassFr">
                      <label className="label_login">
                        <p>Mật khẩu hiện tại : </p>
                        <input
                          className="usertext"
                          type={inputTypeNow}
                          id="password"
                          value={passwordNow}
                          onChange={(e) => setPasswordNow(e.target.value)}
                        />
                      </label>
                      <div className="eyesNow">
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          onClick={toggleShowPasswordNow}
                        />
                      </div>
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
                      <div className="eyesPassPr">
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
                      <div className="eyesPassNewPr">
                        <FontAwesomeIcon
                          icon={showPassword1 ? faEyeSlash : faEye}
                          onClick={toggleShowPassword1}
                        />
                      </div>
                      <div></div>
                    </form>
                    <p className="ErrorPassNowPr">{errorNow}</p>
                    <div className="Btn_NewPassPr">
                      <p className="btn_NewCancel" onClick={closePopup}>
                        Hủy
                      </p>
                      <p className="btn_NewEditXN" onClick={UpdatePassPopup}>
                        Lưu
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <br />
            <span>Đổi mật khẩu</span>
          </div>
          <div className="btn_Pr">
            <div className="btn_IconPr">
              {" "}
              <Link to="/login" className="Link_Code">
                <img src={iconLogout} alt="" />
              </Link>
            </div>
            <br />

            <span>Đăng xuất</span>
          </div>
        </div>
      )}
      {edit ? (
        <div className="btn_XN">
          <span className="btn_Cancel" onClick={handleCancel}>
            Hủy
          </span>
          <span className="btn_EditXN" onClick={handleUpdate}>
            Lưu
          </span>
        </div>
      ) : updatePr ? (
        <div className="Content_XN" id="myDiv">
          <div className="Img_Checkon">
            <img src={iconCheck} alt="" />
          </div>
          <p>Đổi thông tin thành công !</p>
        </div>
      ) : NewPassPr ? (
        <div className="Content_XN" id="myDiv">
          <div className="Img_Checkon">
            <img src={iconCheck} alt="" />
          </div>
          <p>Đổi mật khẩu thành công !</p>
        </div>
      ): <></>}
    </div>
  );
};

export default Profile;
