import "./style/Partner.css";
import React from "react";
import { useTranslation, Trans } from "react-i18next";

export const Partner = () => {
    const { t } = useTranslation("translation", { useSuspense: false });
    return (
        <>
            <div className=" col-12 my-4">
                <div className="row text-center">
                    <div className="col-md-4">
                        <p className="list-label">
                            <span> &gt; 1000 </span>
                        </p>
                        <p>
                            <span>
                                <Trans t={t}>Khóa học với nhiều lĩnh vực</Trans>:{" "}
                                <Trans t={t}>Công nghệ thông tin</Trans>, <Trans t={t}>Thiết kế đồ họa</Trans>,{" "}
                                <Trans t={t}>Kinh doanh</Trans>,...
                            </span>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p className="list-label">
                            <span>
                                &gt; 10 <Trans t={t}>Triệu</Trans>
                            </span>
                        </p>
                        <p>
                            <span>
                                <Trans t={t}>Học viên trong nước và thế giới</Trans>
                            </span>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p className="list-label">
                            <span>
                                &gt; 50 <Trans t={t}>Triệu</Trans>
                            </span>
                        </p>
                        <p>
                            <span>
                                <Trans t={t}>Đăng ký khóa học thành công</Trans>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="partnerLogos">
                <div className="h17">
                    <h3 className="partnerLogos-title">
                        <span className="subject-card-list-text">
                            <Trans t={t}>
                                Chúng tôi hợp tác với <b>200+</b> trường đại học và học viện trên toàn quốc
                            </Trans>
                        </span>
                    </h3>
                </div>
                <div className="partnerLogos-logos row card-columns mt-4 pt-4 discovery-card-list">
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/IU.png" alt="" />
                        <span>Đại học quốc gia Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/vku.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/IU.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/Logo_dhbkdn.jpg" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/IU.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/vku.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/Logo_dhbkdn.jpg" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/IU.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/Logo_dhbkdn.jpg" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/IU.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/Logo_dhbkdn.jpg" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/vku.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/Logo_dhbkdn.jpg" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/vku.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/Logo_dhbkdn.jpg" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/IU.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/Logo_dhbkdn.jpg" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                    <a href="https://hcmiu.edu.vn/" className="partnerLogos-partnerImg">
                        <img src="/Images/IU.png" alt="" />
                        <span>Đại học quốc tế Hồ Chí Minh</span>
                    </a>
                </div>
            </div>
        </>
    );
};
export default Partner;
