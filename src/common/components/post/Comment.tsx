import React, { FC } from "react";
import { Avatar, Grid } from "@material-ui/core";
import styled from "styled-components";
import { Comment as IComment } from "../../../types/comment";

interface Props {
  className?: string | undefined;
  comment: IComment;
}

const Comment: FC<Props> = ({ className, comment: { user, text } }) => {
  return (
    <Grid container className={className}>
      <Avatar src={user.userPic} />
      <Grid item>
        <div className="comment__body">
          <span className="comment__userName">{user.name}</span>
          <span className="comment__text">{text}</span>
        </div>
      </Grid>
    </Grid>
  );
};

export default styled(Comment)`
  column-gap: 8px;
  .comment__body {
    border-radius: 16px;
    background-color: #f0f2f5;
    display: inline-flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 8px 12px;
  }
`;
