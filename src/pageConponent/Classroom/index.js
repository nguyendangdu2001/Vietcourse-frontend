import "./style/lophoc.css";
import React from "react";
import { useCourseProgress } from "../../common/hooks";
import ChapterProgress from "./ChapterProgress";
import { Grid } from "@material-ui/core";

export const ClassRoom = ({ match }) => {
  const { data: courseProgress } = useCourseProgress(match.params.id);
  const { course, chapters } = courseProgress || { course: [], chapter: [] };
  return (
    <div className="main-content">
      <div className="course-content">
        <div className="course-content-body">
          <div className="course-name-header vertical-box">
            <h2 className="course-name">Khóa học: {course.title}</h2>
            <div className="university-name">
              <span className="university-text">
                <span>{course.university}</span>
              </span>
            </div>
          </div>
          <Grid container direction="column" style={{ rowGap: 24 }}>
            {chapters &&
              chapters.map((chapter) => (
                <ChapterProgress
                  key={chapter._id}
                  chapterProgress={chapter}
                  courseProgressId={courseProgress._id}
                />
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
