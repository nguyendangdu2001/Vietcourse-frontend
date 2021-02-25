import "../../style/Inpogress.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CourseInprogress } from "../../common/components/Course/CourseInprogress";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useCourseProgresses } from "../../common/hooks";

export const Inprogress = () => {
  const auth = useSelector((state) => state.userStatus.auth);
  const history = useHistory();
  const { data: courseProgresses } = useCourseProgresses();
  useEffect(() => {
    if (!auth) history.push("/");
    return () => {
      //
    };
  }, [auth, history]);

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: 700,
        backgroundColor: "#f3f3f3",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {courseProgresses &&
        courseProgresses.map((courseProgress, index) => {
          return (
            <motion.div
              key={courseProgress._id}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <CourseInprogress courseProgress={courseProgress} />
            </motion.div>
          );
        })}
      {/* {ownCourses.length <0 
                ? ownCourses.map((course) => {
                      return <CourseInprogress key={course._id} course={course} />;
                  })
                : (<Skeleton variant='rect' width={956} height={357} style={{margin:'32px auto'}} />)} */}
    </div>
  );
};
export default styled(Inprogress)``;
