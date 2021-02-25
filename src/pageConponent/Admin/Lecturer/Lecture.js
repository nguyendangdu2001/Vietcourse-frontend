import "./style/allprofressor.css";
import "../style/formDetail.css";
import React, { useEffect } from "react";
import { Lecturer } from "./Lecturer";

export const Lecture = () => {
    const exampleData = [
        {
            name: "Nguyễn Thị Hồng Nhung",
            educationLevel: "Giáo Sư",
            age: 50,
            pic: "/Images/AdminPage/Nhung19IT1.jpg",
        },
        {
            name: "Trần Thanh Hoàng",
            educationLevel: "Giáo Sư",
            age: 19,
            pic: "/Images/AdminPage/Hoang19IT1.jpg",
        },
        {
            name: "Jisoo",
            educationLevel: "Giáo Sư",
            age: 19,
            pic: "/Images/AdminPage/jisoo.jpg",
        },
        {
            name: "Nguyễn Thị Hồng Nhung",
            educationLevel: "Giáo Sư",
            age: 19,
            pic: "/Images/AdminPage/Nhung19IT1.jpg",
        },
        {
            name: "Lisa",
            educationLevel: "Giáo Sư",
            age: 19,
            pic: "/Images/AdminPage/lisa.jpg",
        },
        {
            name: "Nguyễn Thị Hồng Nhung",
            educationLevel: "Giáo Sư",
            age: 19,
            pic: "/Images/AdminPage/Nhung19IT1.jpg",
        },
        {
            name: "Nguyễn Duy Phúc",
            educationLevel: "Giáo Sư",
            age: 19,
            pic: "/Images/AdminPage/PhucKuTe.jpg",
        },
        {
            name: "Nguyễn Duy Phúc",
            educationLevel: "Giáo Sư",
            age: 19,
            pic: "/Images/AdminPage/PhucKuTe.jpg",
        },
    ];
    useEffect(() => {
        const inFile = document.getElementById("fileInput");
        const imgSelect = document.querySelector(".ava-selected");
        const imgSelectAvatar = document.getElementById("select-avatar");
        inFile.addEventListener("change", function () {
            const file = this.files[0];

            if (file) {
                const reader = new FileReader();
                imgSelect.style.display = "block";
                imgSelectAvatar.style.display = "none";
                reader.addEventListener("load", function () {
                    imgSelect.setAttribute("src", this.result);
                });
                reader.readAsDataURL(file);
            }
        });
        return () => {};
    }, []);
    return (
        <>
            <div className="all-content">
                <div className="search-content">
                    <div className="container-fluid">
                        <div className="container search-area">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="search-profressor">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div className="search-one">
                                                    <form
                                                        action=""
                                                        role="search"
                                                        className="sr-input-func"
                                                    >
                                                        <input
                                                            type="text"
                                                            placeholder="Search..."
                                                            className="search-int form-control"
                                                        />
                                                        <span>
                                                            <i className="fa fa-search"></i>
                                                        </span>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div className="add-profressor">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary addnew"
                                                    >
                                                        Thêm Giảng Viên
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-profressor-content">
                    <div className="container-fluid">
                        <div className="container all-profressor-area">
                            {exampleData.map((lecturer) => (
                                <Lecturer lecturer={lecturer} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="my-pagination">
                    <div className="container-fluid">
                        <div className="container">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <span className="page-link">Previous</span>
                                </li>
                                <li className="page-item active">
                                    <span className="page-link">1</span>
                                </li>
                                <li className="page-item">
                                    <span className="page-link">2</span>
                                </li>
                                <li className="page-item">
                                    <span className="page-link">3</span>
                                </li>
                                <li className="page-item">
                                    <span className="page-link">Next</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup popup-detail" id="detail">
                <div className="popup-container-detail" id="popup-container-detail">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="row">
                                    <div className="profile">
                                        <div className="profile-img">
                                            <img src="/Images/AdminPage/Nhung19IT1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="profile-detail">
                                        <div className="name">Nguyễn Thị Hồng Nhung</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                        <div className="profile-detail">
                                            <span className="profile-title">Ngày Sinh</span>
                                            <br />
                                            <span className="birthday">21/07/2001</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                        <div className="profile-detail">
                                            <span className="profile-title">Số điện thoại</span>
                                            <br />
                                            <span className="phone">0123456789</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                        <div className="profile-detail">
                                            <span className="profile-title">Ngày Tham Gia</span>
                                            <br />
                                            <span className="date-join">12/08/2020</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
                                        <div className="profile-detail">
                                            <span className="profile-title">Email</span>
                                            <br />
                                            <span className="age">nhung@sict.udn.vn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <div className="area-activy-new">
                                    <div className="row">
                                        <div className="activy-new-title">
                                            <h4>Các khoá học</h4>
                                        </div>
                                    </div>
                                    <div className="area-nef">
                                        <div className="row area-nef-item">
                                            <div className="left">
                                                <i className="far fa-eye"></i>
                                            </div>
                                            <div className="right">Lập trình Java căn bản</div>
                                        </div>
                                        <div className="row area-nef-item">
                                            <div className="left">
                                                <i className="far fa-eye"></i>
                                            </div>
                                            <div className="right">Lập trình Java căn bản</div>
                                        </div>
                                        <div className="row area-nef-item">
                                            <div className="left">
                                                <i className="far fa-eye"></i>
                                            </div>
                                            <div className="right">Lập trình Java căn bản</div>
                                        </div>
                                        <div className="row area-nef-item">
                                            <div className="left">
                                                <i className="far fa-eye"></i>
                                            </div>
                                            <div className="right">Lập trình Java căn bản</div>
                                        </div>
                                        <div className="row area-nef-item">
                                            <div className="left">
                                                <i className="far fa-eye"></i>
                                            </div>
                                            <div className="right">Lập trình Java căn bản</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup popup-add" id="add">
                <div className="popup-container-add" id="popup-container-add">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div className="row">
                                    <div className="avatar w325 h325">
                                        <div
                                            className="avatar-img"
                                            style={{ alignItems: "center" }}
                                        >
                                            <img
                                                id="select-avatar"
                                                src="/Images/AdminPage/add-insert-control-point-plus-31700.png"
                                                alt=""
                                            />
                                            <input id="fileInput" type="file" />
                                            <img
                                                className="ava-selected"
                                                id="avatar-selected"
                                                src=""
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                <div className="input-profile-detail">
                                    <div className="input-item">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder="Họ và tên"
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-item">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder="Số điện thoại"
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder="Giới tính"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-item">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <select name="" id="slUniversity">
                                                    <option value="">Trường Đại Học</option>
                                                    <option value="vku">
                                                        Đại Học Công Nghệ Thông Tin Truyền Thông
                                                        Việt Hàn
                                                    </option>
                                                    <option value="dut">
                                                        Đại Học Bách Khoa Đà Nẵng
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-item">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <textarea
                                                    placeholder="Giới thiệu về giảng viên"
                                                    name=""
                                                    id=""
                                                    cols="69"
                                                    rows="7"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit text-right">
                                        <div className="row">
                                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                                <button type="button" className="btn btn-primary">
                                                    Thêm Giảng Viên
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Lecture;
