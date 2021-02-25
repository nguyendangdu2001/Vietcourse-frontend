import React from "react";
import { useTranslation, Trans } from "react-i18next";

export const DetailBenefit = () => {
    const { t } = useTranslation("translation",{useSuspense:false});
    return (
        <div className="row">
            <div className="col-12 col-md-8">
                <div className="title-benefit-course">
                    <h1><Trans t={t}>Lợi ích từ khoá học</Trans></h1>
                </div>
                <div className="benefit-course">
                    <ul className="benefit-items" style={{ marginBottom: 3 }}>
                        <li className="benefit-item benefit-columns">
                            <span className="benefit_icon">
                                <i className="fas fa-check"></i>{" "}
                            </span>
                            <span className="benefit-text">Nắm bắt được ngôn ngữ Java</span>
                        </li>
                        <li className="benefit-item benefit-columns">
                            <span className="benefit_icon">
                                <i className="fas fa-check"></i>
                            </span>
                            <span className="benefit-text">Viết được chương trình Java cơ bản</span>
                        </li>
                        <li className="benefit-item benefit-columns">
                            <span className="benefit_icon">
                                <i className="fas fa-check"></i>
                            </span>
                            <span className="benefit-text">
                                Có thể xin làm Fresher hoặc thực tập tại các công ty phần mềm
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
