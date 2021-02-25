import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { FC } from "react";
import styled from "styled-components";
import { Rating as RatingInterface } from "../../../../types/rating";

interface Props {
  className?: string | undefined;
  listRatings: RatingInterface[] | undefined;
}

const RatingList: FC<Props> = ({ className, listRatings = [] }) => {
  return (
    <List className={className}>
      {listRatings &&
        listRatings.map((rating) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar src={rating.user.userPic} />
            </ListItemAvatar>
            <Grid container direction="column">
              <Rating value={rating.star} readOnly size="large" />
              <ListItemText primary={rating.user.name} secondary={rating.description} />
            </Grid>
          </ListItem>
        ))}
    </List>
  );
};

export default styled(RatingList)``;
