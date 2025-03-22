import React, { useState } from "react";
import "../css/SidebarPopup.css";
import logoAlta from "../../../assets/logo.png";
import record from "../../../assets/Banghiicon.png";
import playlist from "../../../assets/Playlisticon.png";
import calendar from "../../../assets/u_calendar-alt.png";
import manage from "../../../assets/Vector.png";
import revenue from "../../../assets/bao cao doanh thu icon.png";
import setting from "../../../assets/Setting icon.png";
import support from "../../../assets/Support.png";
import next from "../../../assets/u_ellipsis-v.png";
import closeicon from "../../../assets/u_angle-right.png"
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const nav = document.querySelectorAll("a");

  nav.forEach((element) => {
    element.addEventListener("click", function () {
      
      nav.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const [isActiveDT, setIsActiveDT] = useState(false);

  const toggleDropdownDT = () => {
    setIsActiveDT(!isActiveDT);
  };
  const [isActiveSet, setIsActiveSet] = useState(false);

  const toggleDropdownSet = () => {
    setIsActiveSet(!isActiveSet);
  };
  const [isActiveSup, setIsActiveSup] = useState(false);

  const toggleDropdownSup = () => {
    setIsActiveSup(!isActiveSup);
  };
  return (
    <div className="sidebarPopup-wrapper">
      
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
     {isSidebarOpen ?  
     <div className={`menubarPopup${isSidebarOpen ? 'open' : ''} `} >
        <div className="SidebarPopup_form">
        <span className="">
          <img className="logomainPopup" src={logoAlta} />
        </span>

        <ul className="nav ">
          <li>
            <div className="ui"></div>
            <Link className=" nav-link link-dark" to="">
              <img src={record} alt="" />
              <p>Kho bản ghi</p>
            </Link>
          </li>
          <li>
          <div className="ui"></div>
            <Link className=" nav-link link-dark" to="/ListEq">
              <img src={playlist} alt="" />

              <p>Playlist</p>
            </Link>
          </li>
          <li>
          <div className="ui"></div>
            <Link className="nav-link link-dark" to="/ListSv">
              <img src={calendar} alt="" />

              <p>Lập lịch phát</p>
            </Link>
          </li>
          <li>
          <div className="ui"></div>
          <div className="dropdown" onClick={toggleDropdown}>
              <a href="#" className="nav-link link-dark ">
              <div className="item_drop">
                  <div className="nav-link">
                    <img src={manage} />
                    <p>Quản lý </p>
                  </div>
                  <div className="img_drop">
                    {" "}
                    <img src={next} alt="" />
                  </div>
                </div>
              </a>

              <div className={`dropdown-menu${isActive ? " show" : ""}`}>
                <ul className="link_name" aria-labelledby="dropdownUser2">
                  <Link className="link_nav " to={"/ListAuthorizedContract"}>
                    <li>
                      <p className="dropdown-item ">Quản lý hợp đồng</p>
                    </li>
                  </Link>
                  <Link className="link_nav" to={"/ListUsers"}>
                    <li>
                      <p className="dropdown-item ">Quản lý thiết bị</p>
                    </li>
                  </Link>
                  <Link className="link_nav " to={"/NotifyUsers"}>
                    <li>
                      <p className="dropdown-item ">Đơn vị ủy quyền</p>
                    </li>
                  </Link>
                  <Link className="link_nav " to={"/NotifyUsers"}>
                    <li>
                      <p className="dropdown-item ">Đơn vị sử dụng</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li> <div className="ui"></div>
          <div className="dropdown" onClick={toggleDropdownDT}>
         
              <a href="#" className="nav-link link-dark ">
              <div className="item_drop">
                  <div className="nav-link">
                    <img src={revenue} />
                    <p>Doanh thu</p>
                  </div>
                  <div className="img_dropDT">
                    {" "}
                    <img src={next} alt="" />
                  </div>
                </div>
              </a>

              <div className={`dropdown-menuR${isActiveDT ? " show" : ""}`}>
                <ul className="link_name" aria-labelledby="dropdownUser2">
                  <Link className="link_nav " to={"/ListPo"}>
                    <li>
                      <p className="dropdown-item ">Báo cáo doanh thu</p>
                    </li>
                  </Link>
                  <Link className="link_nav" to={"/ListUsers"}>
                    <li>
                      <p className="dropdown-item ">Lịch sử đổi soát</p>
                    </li>
                  </Link>
                  <Link className="link_nav " to={"/NotifyUsers"}>
                    <li>
                      <p className="dropdown-item ">Phân phối doanh thu</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li>
          <div className="ui"></div>
            <div className="dropdown" onClick={toggleDropdownSet}>
              <a href="#" className="nav-link link-dark ">
              <div className="item_drop">
                  <div className="nav-link">
                    <img src={setting} />
                    <p>Cài đặt </p>
                  </div>
                  <div className="img_drop">
                    {" "}
                    <img src={next} alt="" />
                  </div>
                </div>
              </a>

              <div className={`dropdown-menuS${isActiveSet ? " show" : ""}`}>
                <ul className="link_name" aria-labelledby="dropdownUser2">
                  <Link className="link_nav " to={"/ListPo"}>
                    <li>
                      <p className="dropdown-item ">Phân quyền người dùng</p>
                    </li>
                  </Link>
                  <Link className="link_nav" to={"/ListUsers"}>
                    <li>
                      <p className="dropdown-item ">Cấu hình</p>
                    </li>
                  </Link>
                  <Link className="link_nav " to={"/NotifyUsers"}>
                    <li>
                      <p className="dropdown-item ">Quản lý hợp đồng</p>
                    </li>
                  </Link>
                  <Link className="link_nav " to={"/NotifyUsers"}>
                    <li>
                      <p className="dropdown-item ">Thông tin tác phẩm</p>
                    </li>
                  </Link>
                  <Link className="link_nav " to={"/NotifyUsers"}>
                    <li>
                      <p className="dropdown-item ">Chu kỳ đổi soát</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li>
          <div className="ui"></div>
            <div className="dropdown" onClick={toggleDropdownSup}>
              <a href="#" className="nav-link link-dark ">
                <div className="item_drop">
                  <div className="nav-link">
                    <img src={support} />
                    <p>Hỗ trợ </p>
                  </div>
                  <div className="img_drop">
                    {" "}
                    <img src={next} alt="" />
                  </div>
                </div>
              </a>

              <div className={`dropdown-menuSp${isActiveSup ? " show" : ""}`}>
                <ul className="link_name" aria-labelledby="dropdownUser2">
                  <Link className="link_nav " to={"/ListPo"}>
                    <li>
                      <p className="dropdown-item ">Hướng dẫn sử dụng</p>
                    </li>
                  </Link>
                  <Link className="link_nav" to={"/ListUsers"}>
                    <li>
                      <p className="dropdown-item ">Tải app</p>
                    </li>
                  </Link>
                  <Link className="link_nav " to={"/NotifyUsers"}>
                    <li>
                      <p className="dropdown-item ">Feedback</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
       
       
    
      </div>: <div className="menubar_close">
        <img onClick={toggleSidebar} src={closeicon} alt="" />
      </div>}
     
    </div>

  );
};

export default Sidebar;
