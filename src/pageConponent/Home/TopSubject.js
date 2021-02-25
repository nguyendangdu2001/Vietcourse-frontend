import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {Trans} from 'react-i18next'
export const TopSubject = () => {
    const {t} = useTranslation('translation')
    return (
        <div className="container subject-content">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 category-section">
                    <div className="card top-subject subject1 justify-content-center">
                            <img className="card-img-top" src="Images/IT.jpg" alt="Công nghệ thông tin" />
                        <div className="card-img-overlay">
                            <h2><Trans t={t}>Công nghệ thông tin</Trans></h2>
                            <p><Trans t={t}>Trên 500 khoá học</Trans></p>
                            <Link to="/linhvuc/cntt">
                                <span><Trans t={t}>Tìm hiểu</Trans></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-8">
                    <div className="row">
                        <div className="col-12 col-sm-6 category-section">
                            <div className="card top-subject justify-content-center">
                                    <img className="card-img-top" src="Images/music.jpg" alt="Âm nhạc" />
                                <div className="card-img-overlay">
                                    <h2><Trans t={t}>Âm nhạc</Trans></h2>
                                    <p><Trans t={t}>Trên 500 khoá học</Trans></p>
                                    <Link to="/linhvuc/amnhac">
                                        <span><Trans t={t}>Tìm hiểu</Trans></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 category-section">
                            <div className="card top-subject justify-content-center">
                                    <img className="card-img-top" src="Images/art.jpg" alt="Mỹ thuật" />
                                <div className="card-img-overlay">
                                    <h2><Trans t={t}>Mỹ thuật</Trans></h2>
                                    <p><Trans t={t}>Trên 500 khoá học</Trans></p>
                                    <Link to="/linhvuc/mythuat">
                                        <span><Trans t={t}>Tìm hiểu</Trans></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 category-section ">
                            <div className="card top-subject justify-content-center">
                                    <img className="card-img-top" src="Images/photo.jpg" alt="Nhiếp ảnh" />
                                <div className="card-img-overlay">
                                    <h2><Trans t={t}>Nhiếp ảnh</Trans></h2>
                                    <p><Trans t={t}>Trên 500 khoá học</Trans></p>
                                    <Link to="/linhvuc/amnhac">
                                        <span><Trans t={t}>Tìm hiểu</Trans></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 category-section">
                            <div className="card top-subject justify-content-center">
                                    <img className="card-img-top" src="Images/buss.jpg" alt="Kinh doanh" />
                                <div className="card-img-overlay">
                                    <h2><Trans t={t}>Kinh doanh</Trans></h2>
                                    <p><Trans t={t}>Trên 500 khoá học</Trans></p>
                                    <Link to="/linhvuc/kinhdoanh">
                                        <span><Trans t={t}>Tìm hiểu</Trans></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(TopSubject)