import React, { memo, useCallback, useRef } from "react";
import { Rating, Skeleton } from "@material-ui/lab";
import { isEmpty } from "lodash-es";
import { DetailCoursePrice } from "./DetailCoursePrice";
import { useTranslation, Trans } from "react-i18next";

export const DetailHeading = ({ course }) => {
    const { t } = useTranslation("translation", { useSuspense: false });
    const courseHeader = useRef(null)
    const getCourseHeaderRef = useCallback(
        () => {
           return courseHeader.current
        },
        [],
    )
    return (
        <div className="fullwitdh" ref={courseHeader}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="left">
                            {!isEmpty(course) ? (
                                <>
                                    <h1 className="name-course">{course.title}</h1>
                                    <div className="left-row">
                                        <Rating value={parseInt(course.rating)} readOnly />
                                        <div className="rating-details">
                                            <span>
                                                {course.rating} (1,111 <Trans t={t}>đánh giá</Trans>
                                                )
                                            </span>
                                        </div>
                                        <div className="student-enroll">
                                            <span>
                                                <Trans t={t}>
                                                    Có {{ numOfStudent: course.numOfStudent }} học
                                                    sinh đã đăng ký
                                                </Trans>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 20 }}>
                                        <span className="author" style={{ lineHeight: 1 }}>
                                            <Trans t={t}>Giảng Viên</Trans>: {course.lecture}
                                        </span>
                                    </div>
                                    <div className="last-update" style={{ marginTop: 20 }}>
                                        <span style={{ lineHeight: 1 }}>
                                            <Trans t={t}>Sửa đổi lần cuối</Trans>: 17/06/2020
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Skeleton
                                        height={48}
                                        style={{ marginTop: 0 }}
                                        animation="wave"
                                    />
                                    <Skeleton
                                        height={24}
                                        style={{ marginTop: 20 }}
                                        animation="wave"
                                    />
                                    <Skeleton
                                        height={24}
                                        style={{ marginTop: 20 }}
                                        animation="wave"
                                    />
                                    <Skeleton
                                        height={24}
                                        style={{ marginTop: 20 }}
                                        animation="wave"
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <DetailCoursePrice id={course._id} pic={course.pic} price={course.price} getCourseHeaderRef={getCourseHeaderRef}/>
                </div>
            </div>
        </div>
    );
};
export default memo(DetailHeading)