import React ,{useState}from "react";
import "../../ManageContract/css/AddAuthorized.css";
import Sidebar from "../../bars/ts/SidebarPopup";
import Topbar from "../../bars/ts/Topbar";
import fiRight from "../../../assets/fi_chevron-right.png";
import fiUpload from "../../../assets/u_cloud-upload.png";
import fiInfo from "../../../assets/u_info-circle.png";
import { useParams, useLocation, Link } from "react-router-dom";

const AddAuthorized = () => {
  const location = useLocation();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ;
    if (files) {
      const selectedFilesArray = Array.from(files);
      setSelectedFiles(selectedFilesArray);
    }
  };
  
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className="Add_AC_head">
        <div className="List_Page">
          {location.pathname === "/AddAuthorizedContract" ? (
            <p className="Topbar_Name">
              Quản lý <img src={fiRight} alt="" />
              <h1> Quản lý hợp đồng </h1> <img src={fiRight} alt="" />{" "}
              <span> Thêm hợp đồng </span>
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="Page_Name">Thêm hợp đồng ủy quyền mới</div>
        <div className="List_Add_AC">
          <div className="Label_Add_AC">
            <div className="Text_Add_Ac">
              {" "}
              <p>Số hợp đồng:</p>
              <input type="text" />
            </div>
            <div className="Text_Add_Ac">
              <p>Tên hợp đồng:</p>
              <input type="text" />
            </div>
            <div className="Text_Add_Ac">
              <p>Ngày hiệu lực:</p>
              <input type="text"  placeholder="dd/mm/yyyy"/>
            </div>
            <div className="Text_Add_Ac">
              {" "}
              <p>Ngày hết hạn:</p>
              <input type="text"  placeholder="dd/mm/yyyy" />
            </div>
          </div>
          <div className="Attach_Add_AC">
            <div className="Upload_Add_AC">
            <p>Đính kèm tệp :</p>
            <img src={fiUpload} alt=""/>
            <input type="file" multiple  onChange={handleFileChange}  />
            </div>
            <div
             className="List_Up">{selectedFiles.length > 0 && (
        <ul >
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}</div>
            
          </div>
          <div className="Benefit_Add_Ac">
            <h1>
              <img src={fiInfo} alt="" />
              Mức nhuận bút
            </h1>
            <h2>
              Quyền tác giả:<span>0%</span>
            </h2>
            <h2>Quyền liên quan:</h2>
            <p>
              Quyền của người biểu diễn:<span>50%</span>
            </p>
            <p>
              Quyền của nhà sản xuất:<span>50%</span>
            </p>
            <p>(Bản ghi/video)</p>
          </div>
        </div>
      </div>
      <div className="Add_AC_footer">
        <div className="Name_Add_footer"></div>
        <div className="List_Add_footer">
          <div className="Left_Add_footer"> </div>
          <div className="Between_Add_footer"></div>
          <div className="Right_Add_footer"></div>
        </div>
        <div className="Waring_Add_footer"> </div>
        <div className="Btn_Add_footer">
          <span>Hủy</span>
          <span>Tạo</span>
        </div>
      </div>
    </div>
  );
};

export default AddAuthorized;
