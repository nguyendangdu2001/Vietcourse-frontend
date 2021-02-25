import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useRatings } from "../../../common/hooks/useRatings";
import { AppStateType } from "../../../Redux/reducer";
import { RatingForm } from "./ratingForm";
import { RatingList } from "./ratingList";

interface Props {
  className: string | undefined;
  courseId: string;
}

const RatingSection: FC<Props> = ({ className, courseId }) => {
  const [ratingData] = useRatings(courseId);
  const ownCourse = useSelector<AppStateType, string[]>(
    ({ userStatus }) => userStatus.userInfo.ownCourses
  );
  const isBuyed = ownCourse && ownCourse.includes(courseId);
  console.log(ownCourse);

  return (
    <Grid container className={className}>
      <Grid item container xl={8} spacing={3}>
        {isBuyed && <RatingForm courseId={courseId} />}
        <RatingList listRatings={ratingData?.ratings} />
      </Grid>
    </Grid>
  );
};

export default styled(RatingSection)``;
