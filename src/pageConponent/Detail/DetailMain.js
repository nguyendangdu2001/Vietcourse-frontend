import React from "react";
import Skeleton from "@material-ui/lab/Skeleton/Skeleton";
import { useTranslation, Trans } from "react-i18next";
import { ColapseListCourse } from "./ColapseListCourse";

export const DetailMain = (props) => {
    const { course } = props;
    const { t } = useTranslation("translation", { useSuspense: false });

    const detail2 = course.detail || [];
    return (
        <div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="title">
                        <h1>
                            <Trans t={t}>Nội dung khoá học</Trans>
                        </h1>
                    </div>
                    <div className="left-main-content">
                        {detail2?.length ? (
                            detail2.map((title, index) => {
                                return <ColapseListCourse key={index} title={title} />;
                            })
                        ) : (
                            <>
                                <Skeleton
                                    variant="rect"
                                    height={49}
                                    style={{ marginTop: 3 }}
                                    animation="wave"
                                />
                                <Skeleton
                                    variant="rect"
                                    height={49}
                                    style={{ marginTop: 3 }}
                                    animation="wave"
                                />
                                <Skeleton
                                    variant="rect"
                                    height={49}
                                    style={{ marginTop: 3 }}
                                    animation="wave"
                                />
                                <Skeleton
                                    variant="rect"
                                    height={49}
                                    style={{ marginTop: 3 }}
                                    animation="wave"
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
