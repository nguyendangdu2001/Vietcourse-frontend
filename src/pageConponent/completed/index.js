import "../../style/Inpogress.css";
import React, { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export const Completed = () => {
    const auth = useSelector((state) => state.userStatus.auth);
    const history = useHistory();
    const { t } = useTranslation("translation", { useSuspense: false });
    useEffect(() => {
        if (!auth) history.push("/");
        return () => {
            //
        };
    }, [auth, history]);
    return (
        <div className="container-fluid">
            <div className="InProgressCourses">
                <div className="center">
                    <div className="Inprogress">
                        <section>
                            <header>
                                <div className="CourseHeader">
                                    <div className="header-content">
                                        <Trans t={t}>Công nghệ thông tin</Trans>
                                    </div>
                                </div>
                            </header>
                            <div className="course-main-content">
                                <div className="course-main-content-center row">
                                    <div className="course-main-content-primary col-md-6 col-12">
                                        <span>
                                            <h1 className="course-main-content-title">
                                                Khóa học dạy lập trình từ cơ bản đến nâng cao: HTML,
                                                CSS, Bootstrap
                                            </h1>
                                        </span>
                                        <span className="course-pill">
                                            <Trans t={t}>Đã hoàn thành</Trans>
                                        </span>
                                    </div>
                                    <div className="course-main-content-secondary col-md-6 col-12">
                                        <div className="course-main-content-button">
                                            <div className="Course-link-button">
                                                <span>
                                                    <span>
                                                        <Trans t={t}>Đến khóa học</Trans>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="Course-footer">
                                <div className="partner-name">
                                    <div> Đại học CNTT và Truyền thông Việt-Hàn</div>
                                </div>
                            </footer>
                        </section>
                    </div>
                </div>
            </div>

            <div className="InProgressCourses">
                <div className="center">
                    <div className="Inprogress">
                        <section>
                            <header>
                                <div className="CourseHeader">
                                    <div className="header-content">
                                        <Trans t={t}>Thiết kế đồ họa</Trans>
                                    </div>
                                </div>
                            </header>
                            <div className="course-main-content">
                                <div className="course-main-content-center row">
                                    <div className="course-main-content-primary col-md-6 col-12">
                                        <span>
                                            <h1 className="course-main-content-title">
                                                Sử dụng Adobe cho thiết kế đồ họa
                                            </h1>
                                        </span>
                                        <span className="course-pill">
                                            <Trans t={t}>Đã hoàn thành</Trans>
                                        </span>
                                    </div>
                                    <div className="course-main-content-secondary col-md-6 col-12">
                                        <div className="course-main-content-button">
                                            <div className="Course-link-button">
                                                <span>
                                                    <span>
                                                        <Trans t={t}>Đến khóa học</Trans>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="Course-footer">
                                <div className="partner-name">
                                    <div>Đại học Bách khoa Đà Nẵng</div>
                                </div>
                            </footer>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(Completed);
