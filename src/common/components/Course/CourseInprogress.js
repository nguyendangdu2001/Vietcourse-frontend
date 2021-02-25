import React from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";

export const CourseInprogress = ({ courseProgress }) => {
  const { course, numOfCompletedChapters, totalChapters } = courseProgress;
  const { t } = useTranslation("translation", { useSuspense: false });
  return (
    <div className="InProgressCourses">
      <div className="center">
        <div className="Inprogress">
          <section>
            <header>
              <div className="CourseHeader">
                <div className="header-content">
                  <Trans t={t}>{course.subject}</Trans>
                </div>
              </div>
            </header>
            <div className="course-main-content">
              <div className="course-main-content-center row">
                <div className="course-main-content-primary col-md-6 col-12 align-items-center d-flex">
                  <div>
                    <Link to={`classroom/${courseProgress._id}`}>
                      <h1 className="course-main-content-title">{course.title}</h1>
                    </Link>
                    <span className="course-pill">
                      <Trans t={t}>Chưa hoàn thành</Trans>
                    </span>
                  </div>
                </div>
                <div className="course-main-content-secondary col-md-6 col-12">
                  <div className="course-main-content-button">
                    <div className="Course-link-button" style={{ position: "relative" }}>
                      <svg
                        viewBox="0 0 100 100"
                        width="150"
                        height="150"
                        style={{ overflow: "visible", zIndex: 0 }}
                      >
                        <motion.path
                          d="m 50 0 a 1 1 0 0 0 0 100 a 1 1 0 0 0 0 -100"
                          strokeWidth="4"
                          fill="none"
                          stroke="#00a8e8"
                          initial={{ pathLength: 0.001 }}
                          animate={{
                            pathLength: numOfCompletedChapters / totalChapters,
                            transition: { duration: 1 },
                          }}
                        />
                      </svg>
                      <div
                        className="course-link-button__text"
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%,-50%)",
                          fontSize: 30,
                          color: "#00a8e8",
                        }}
                      >
                        {`${numOfCompletedChapters}/${totalChapters}`}
                      </div>
                    </div>
                    <div style={{ whiteSpace: "nowrap", padding: 8 }}>
                      Bạn đã hoàn thành {numOfCompletedChapters}/{totalChapters} Chương
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="Course-footer">
              <div className="partner-name">
                <div>{course.university}</div>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
};
