import React from "react";
import { useTranslation, Trans } from "react-i18next";

export const Footer = () => {
    const { t,i18n } = useTranslation("translation");
    const onLangChange = (lang) =>{
        i18n.changeLanguage(lang)
    }
    return (
        <footer className="footer py-3">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-9 links">
                                    <ul className="d-flex flex-column d-md-block">
                                        <li>
                                            <span><Trans t={t}>GIỚI THIỆU</Trans></span>
                                        </li>
                                        <li>
                                            <span><Trans t={t}>Đội ngũ</Trans></span>
                                        </li>
                                        <li>
                                            <span><Trans t={t}>Chính sách bảo mật</Trans></span>
                                        </li>
                                        <li>
                                            <span><Trans t={t}>Điều khoản sử dụng</Trans></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h3 className="title"><Trans t={t}>Thông tin liên hệ</Trans>:</h3>
                                    <p>
                                        <span>Gmail</span>
                                    </p>
                                    <p>
                                        <span><Trans t={t}>Số điện thoại</Trans></span>
                                    </p>
                                    <div className="social-links">
                                        <span className="social">
                                            <i className="fab fa-facebook-f"></i>
                                        </span>
                                        <span className="social">
                                            <i className="fab fa-google"></i>
                                        </span>
                                        <span className="social">
                                            <i className="fab fa-linkedin-in"></i>
                                        </span>
                                        <span className="social">
                                            <i className="fab fa-instagram"></i>
                                        </span>
                                    </div>
                                    <div style={{display:'flex',gap:'1em',marginTop:10}}>
                                        <span onClick={()=>onLangChange('vi-VN')}>Tiếng Việt</span>
                                        
                                        <span onClick={()=>onLangChange('en')}>English</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
