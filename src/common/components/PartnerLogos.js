import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export const PartnerLogos = () => {
    const { t } = useTranslation("translation");
    return (
        <div className="partnerLogos">
            <h3 className="partnerLogos-title">
                <div>
                    <Link to="/partner" className="partnerLogos-see-a-link">
                        <span>
                            <Trans t={t}>
                                Chúng tôi hợp tác với
                                <span className="underline">200+ các trường đại học trên toàn quốc</span>
                            </Trans>
                        </span>
                    </Link>
                </div>
            </h3>
            <div className="partnerLogos-logos">
                <Link to="/partner" className="partnerLogos-partnerImg">
                    <img src="/Images/vku.png" alt="" />
                </Link>
                <Link to="/partner" className="partnerLogos-partnerImg">
                    <img src="/Images/IU.png" alt="" />
                </Link>
                <Link to="/partner" className="partnerLogos-partnerImg">
                    <img src="/Images/vku.png" alt="" />
                </Link>
                <Link to="/partner" className="partnerLogos-partnerImg">
                    <img src="/Images/IU.png" alt="" />
                </Link>
                <Link to="/partner" className="partnerLogos-partnerImg">
                    <img src="/Images/vku.png" alt="" />
                </Link>
                <Link to="/partner" className="partnerLogos-partnerImg">
                    <img src="/Images/IU.png" alt="" />
                </Link>
                <Link to="/partner" className="partnerLogos-partnerImg">
                    <img src="/Images/vku.png" alt="" />
                </Link>
                <Link to="/partner" className="partnerLogos-partnerImg">
                    <img src="/Images/IU.png" alt="" />
                </Link>
            </div>
        </div>
    );
};
export default memo(PartnerLogos)