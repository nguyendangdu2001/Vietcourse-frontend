import React, { memo } from "react";
import { useTranslation, Trans } from "react-i18next";
import { SignupForm } from "./SignupForm";
import { LoginForm } from "./LoginForm";
import { useLoginPopup } from "./LoginPopupProvider";
import { motion } from "framer-motion";

export const LoginPopup = ({ show, option }) => {
  const { t } = useTranslation("translation", { useSuspense: false });
  const { changePopupState } = useLoginPopup();

  return (
    <motion.div
      className="popup"
      id="LoginPopup"
      initial={{ translateY: 400, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      exit={{ translateY: 400, opacity: 0 }}
      transition={{ ease: "easeOut" }}
    >
      <div
        className={`popup-container ${option.activePanel === "right" && "right-panel-active"}`}
        id="popup-container"
      >
        <button id="close-popup" onClick={() => changePopupState({ show: false })}>
          <i className="fas fa-times"></i>
        </button>
        <div className="signup-form form-container col-12 col-lg-7">
          <SignupForm />
        </div>
        <div className="signin-form form-container col-12 col-lg-7">
          <LoginForm />
        </div>
        <div className="overlay-container d-none d-lg-block">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>
                <Trans t={t}>Chào mừng trở lại!</Trans>
              </h1>
              <p>
                <Trans t={t}>
                  Để kết nối với chúng tôi, xin vui lòng đăng nhập với thông tin cá nhân của bạn
                </Trans>
              </p>
              <button
                className="ghost"
                id="popup-logIn"
                onClick={() => changePopupState({ option: { activePanel: "left" } })}
              >
                <Trans t={t}>Đăng nhập</Trans>
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>
                <Trans t={t}>Xin chào!</Trans>
              </h1>
              <p>
                <Trans t={t}>Nhập đầy đủ thông tin cá nhân và bắt đầu hành trình mới nào</Trans>
              </p>
              <button
                className="ghost"
                id="popup-signUp"
                onClick={() => changePopupState({ option: { activePanel: "right" } })}
              >
                <Trans t={t}>Đăng ký</Trans>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default memo(LoginPopup);
