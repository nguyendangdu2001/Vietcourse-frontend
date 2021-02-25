import React, { lazy, memo } from "react";
import { useSelector } from "react-redux";
import TopSubject from "./TopSubject";
import { Trans, useTranslation } from "react-i18next";
import { CourseSlider } from "../../common/components/Course/CourseSlider";
import { useCourses } from "../../common/hooks/useCourse";
const LandingBanner = lazy(() => import("./LandingBanner"));
const SubjectSlider = lazy(() => import("../../common/components/Subject/SubjectSlider"));
const PartnerLogos = lazy(() => import("../../common/components/PartnerLogos"));
export const UserHome = (props) => {
  const { t } = useTranslation("translation");
  const [courses, { isLoading }] = useCourses();
  console.log(courses);
  const auth = useSelector((state) => state.userStatus.auth);
  //   const {} = useQuery("listCourses");
  //   useEffect(() => {
  //     const fetchCourse = async () => {
  //       setLoading(true);
  //       const { data } = await Axios.get(`${nodeApiLink}/api/courses?short=1`);
  //       console.log(data);
  //       setListCourse(data.results);
  //       setLoading(false);
  //     };
  //     fetchCourse();
  //     return () => {
  //       //
  //     };
  //   }, [auth]);

  return (
    <div>
      <div className="container-fluid">
        {!auth && <LandingBanner />}
        <TopSubject />
        <div className="px-md-3">
          <div className="Popular-course">
            <h3>
              <Trans t={t}>Các khoá học phổ biến</Trans>
            </h3>
            <CourseSlider
              type="course"
              courses={!isLoading ? (courses ? courses.slice(0, 11) : []) : []}
              loading={isLoading}
            />
          </div>
        </div>
        <div className="px-md-3">
          <div className="Popular-course">
            <h3>
              <Trans t={t}>Các chứng chỉ phổ biến</Trans>
            </h3>
            <CourseSlider
              type="course"
              courses={!isLoading ? (courses ? courses.slice(11) : []) : []}
              loading={isLoading}
            />
          </div>
        </div>
        <div className="px-md-3">
          <div className="subjects">
            <h3>
              <Trans t={t}>Khám phá</Trans>
            </h3>
            <SubjectSlider />
          </div>
        </div>
      </div>
      <PartnerLogos />
    </div>
  );
};
export default memo(UserHome);
