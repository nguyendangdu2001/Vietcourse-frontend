import { motion } from "framer-motion";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { useLoginPopup } from "../../common/components/AuthPopup/LoginPopupProvider";

export const LandingBanner = (props) => {
    const { t } = useTranslation("translation");
    const { changePopupState } = useLoginPopup();
    const { animation,underlineWord } = {
        animation: {
            initial: (i) => ({
                opacity: 0,
                y: i ? "-100%" : "100%",
            }),
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1.5,
                    when: "beforeChildren",
                },
            },
        },
        underlineWord: { show: { backgroundSize: "100% 5px",transition:{duration:1,ease: "easeOut"}} },
    };
    return (
        <motion.section animate='show' className="banner-section col-12">
            <div className="banner">
                <div style={{ overflow: "hidden" }}>
                    <motion.h1 variants={animation} initial="initial"  custom={0}>
                        <Trans t={t}>
                            VietCourses cung cấp các{" "}
                            <motion.span
                                style={{
                                    backgroundImage:
                                        "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "0 5px",
                                    backgroundPosition: "0 100%",
                                }}
                                variants={underlineWord}
                            >
                                khóa học online
                            </motion.span>{" "}
                            đa lĩnh vực
                        </Trans>
                    </motion.h1>
                </div>
                <div style={{ overflow: "hidden" }}>
                    <motion.h2 variants={animation} initial="initial" custom={1}>
                        <Trans t={t}>
                            Chỉ cần vài bước đăng ký tài khoản, bạn có thể học mọi lúc, mọi nơi cùng
                            các giảng viên hàng đầu đến từ các trường đại học trong nước
                        </Trans>
                        .
                    </motion.h2>
                </div>
                <div style={{ position: "relative", width: 225 }}>
                    <motion.div
                        style={{
                            backgroundColor: "#00a8e8",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                        }}
                        animate={{ width: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut",delay:0.5 }}
                    ></motion.div>
                    <motion.div
                        style={{
                            top: 0,
                            left: 0,
                            background: "none",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            border: "1px solid white",
                            zIndex: -1,
                        }}
                        animate={{ scaleX: 1.2, scaleY: 1.5, opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity,delay:1.2 }}
                    ></motion.div>
                    <button
                        id="signup2"
                        onClick={() => {
                            changePopupState({ show: true, option: { activePanel: "right" } });
                        }}
                    >
                        <Trans t={t}>Đăng ký ngay</Trans>
                    </button>
                </div>
            </div>
            <div className="backgr"></div>
            <div className="backgrImg"></div>
        </motion.section>
    );
};
export default LandingBanner;
