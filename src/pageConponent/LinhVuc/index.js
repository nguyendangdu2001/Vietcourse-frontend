import "./style/linhvuc.css";
import React from "react";
import CourseSlider from "../../common/components/Course/CourseSlider";
import { CourseSkelethon } from "../../common/components/Course/CourseSkelethon";
import Course from "../../common/components/Course/Course";
import { SubjectSlider } from "../../common/components/Subject/SubjectSlider";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import { useCourses } from "../../common/hooks/useCourse";

export const Linhvuc = ({ match }) => {
  const [courses, { isLoading }] = useCourses({ query: { linhvuc: match.params.linhvuc } });
  const { t } = useTranslation("translation");
  return (
    <div className="container-fluid">
      <div className="px-md-3">
        <div className="Popular-course">
          <h3 className="px-3">
            <Trans t={t}>Các khóa học phổ biến</Trans>
          </h3>
          <CourseSlider
            type="course"
            courses={courses?.length > 0 ? courses.slice(0, 11) : []}
            loading={isLoading}
          />
        </div>
      </div>
      <div className="px-md-3">
        <div className="Popular-course">
          <h3 className="px-3">
            <Trans t={t}>Toàn bộ khóa học liên quan</Trans>
          </h3>

          {!isLoading ? (
            <motion.div
              key={match.params.linhvuc}
              className="row card-columns discovery-card-list"
              animate="show"
            >
              {courses.map((course) => {
                return <Course key={course._id} data={course} xs={6} md={3} />;
              })}
            </motion.div>
          ) : (
            <div className="row card-columns discovery-card-list">
              <CourseSkelethon customXs={6} customMd={3} />
              <CourseSkelethon customXs={6} customMd={3} />
              <CourseSkelethon customXs={6} customMd={3} />
              <CourseSkelethon customXs={6} customMd={3} />
            </div>
          )}
        </div>
      </div>
      <div className="px-3">
        <div className="subjects">
          <h3>
            <Trans t={t}>Khám phá</Trans>
          </h3>
          <SubjectSlider />
        </div>
      </div>
    </div>
  );
};
export default Linhvuc;
