import { Avatar, Button, Grid, TextField } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Axios from "axios";
import React, { FC } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { nodeApiLink } from "../../../../config/Api/NodeServerLink";
import { Rating as IRating } from "../../../../types/rating";
import useRatingFormLogic from "./ratingFormLogic";

interface Props {
  className?: string | undefined;
  courseId: string;
}
const RatingForm: FC<Props> = ({ className, courseId }) => {
  const {
    description,
    star,
    onDescriptionChangeHandler,
    onStarChangeHandler,
    onSubmitHandler,
  } = useRatingFormLogic(courseId);
  const { data, isLoading } = useQuery<IRating, Error>(["userRating", courseId], async () => {
    const { data } = await Axios.get(`${nodeApiLink}/api/courses/${courseId}/userRating`);
    return data;
  });
  return !isLoading && !data ? (
    <Grid container className={className}>
      <Grid container component="form" onSubmit={onSubmitHandler}>
        <Grid xl={3} item container justify="center">
          <Avatar style={{ width: 64, height: 64 }} />
        </Grid>
        <Grid item xl={8}>
          <Rating value={star} onChange={onStarChangeHandler} />
          <TextField
            name="rating description"
            multiline={true}
            rows={4}
            rowsMax={4}
            fullWidth
            value={description}
            onChange={onDescriptionChangeHandler}
          />
          <Button type="submit" size="large">
            Gửi
          </Button>
        </Grid>
      </Grid>
    </Grid>
  ) : null;
};

export default styled(RatingForm)`
  padding: 15px 0;
`;
