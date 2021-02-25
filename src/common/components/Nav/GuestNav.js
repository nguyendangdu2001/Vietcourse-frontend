import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useLoginPopup } from "../AuthPopup/LoginPopupProvider";
export default function GuestNav() {
    const { t } = useTranslation("translation", { useSuspense: false });
    const nav = useRef(null);
    const secondSearchForm = useRef(null);
    const { changePopupState } = useLoginPopup();
    useEffect(() => {
        const onWindowScrollHandler = (e, el) => {
            if (!secondSearchForm.current) return;
            const navOverTheScreen = window.scrollY >= nav?.current?.offsetTop;
            if (navOverTheScreen) secondSearchForm.current.style.opacity = 1;
            else secondSearchForm.current.style.opacity = 0;
        };
        window.addEventListener("scroll", onWindowScrollHandler);
        return () => {
            window.removeEventListener("scroll", onWindowScrollHandler);
        };
    }, []);
    return (
        <nav className="guest-nav" ref={nav}>
            <div className="bg-gradient ">
                <div className="navbar d-flex justify-content-between mx-auto p-0 ">
                    <div className="nav-n-form">
                        <div className="d-flex flex-row justify-content-between">
                            <ul className="navbar-nav navbar-expand">
                                <li className="nav-item ">
                                    <Link to="/" className="nav-link">
                                        <Trans t={t}>Trang chủ</Trans>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/partner" className="nav-link">
                                        <Trans t={t}>Các bên hợp tác</Trans>
                                    </Link>
                                </li>
                            </ul>
                            <form
                                className="seach-form align-content-center mx-3 d-none d-md-flex"
                                id="secondary-seach"
                                ref={secondSearchForm}
                            >
                                <input type="text" name="" placeholder={`${t("Tìm kiếm")}...`} />
                                <button type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-around btn-grp">
                        <button
                            className="flex-fill button btn-blue"
                            id="login"
                            onClick={() => changePopupState({ show: true })}
                        >
                            <Trans t={t}>Đăng nhập</Trans>
                        </button>
                        <button className="flex-fill button btn-outline" id="signup">
                            <Trans t={t}>Đăng ký</Trans>
                        </button>
                    </div>
                </div>
            </div>
            <div className="myshadow d-none d-md-block"></div>
        </nav>
    );
}
