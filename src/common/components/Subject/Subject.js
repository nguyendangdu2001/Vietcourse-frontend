import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { useTranslation, Trans } from "react-i18next";

export const Subject = (props) => {
    const { t } = useTranslation("translation",{useSuspense:false});
    const data = props.subject;
    return (
        <Link to={data.link}>
            <div className="subject">
                <LazyLoad offset={100} height={96}>
                    <img className="subject-img" alt={data.title} src={data.pic} height={96} width={96} />
                </LazyLoad>
                <div className="subject-text">
                    <div className="subject-name"><Trans t={t}>{data.title}</Trans></div>
                    <span className="number-of-courses"><Trans t={t}>{{numCourse:data.numOfCourse}} khoá học</Trans></span>
                </div>
            </div>
        </Link>
    );
};
export default Subject