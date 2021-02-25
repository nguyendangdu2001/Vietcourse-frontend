import { Avatar, Button, Divider, Grid } from "@material-ui/core";
import React, { FC, memo, useState } from "react";
import styled from "styled-components";
import CommentSection from "./CommentSection";
import { format } from "timeago.js";

interface Props {
  _id: string;
  className?: string | undefined;
  title: string;
  body: string;
  likeCount: number;
  commentCount: number;
  dateCreated: string;
  user: { name: string; userPic: string };
}

const Post: FC<Props> = ({
  className,
  body,
  commentCount,
  likeCount,
  title,
  user,
  _id,
  dateCreated,
}) => {
  const [isComment, setIsComment] = useState(false);
  return (
    <Grid container className={className}>
      <Grid container className="post__meta" alignItems="center">
        <Avatar src={user.userPic} />
        <Grid item>
          <div className="meta__authorName">{user.name}</div>
          <div className="meta__date">{format(dateCreated)}</div>
        </Grid>
      </Grid>
      <Grid container className="post__body">
        <div className="body__text">{body}</div>
      </Grid>
      <Divider style={{ backgroundColor: "#CED0D4" }} />
      <Grid container className="post__count" justify="space-between">
        <div className="post__likeCount">{likeCount} like</div>
        <div className="post__commentCount">{commentCount} Bình luận</div>
      </Grid>
      <Divider style={{ backgroundColor: "#CED0D4" }} />
      <Grid container className="post__action">
        <Grid item xs>
          <Button fullWidth className="post__button">
            Thích
          </Button>
        </Grid>
        <Grid item xs>
          <Button fullWidth className="post__button" onClick={() => setIsComment(true)}>
            Bình luận
          </Button>
        </Grid>
        <Grid item xs>
          <Button fullWidth className="post__button">
            Share
          </Button>
        </Grid>
      </Grid>
      {isComment && <CommentSection postId={_id} />}
    </Grid>
  );
};

export default memo(styled(Post)`
  border-radius: max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px;
  row-gap: 16px;
  padding: 8px 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  .post__action {
    margin: 16px auto;
  }
  .post__button {
    padding: 8px 16px;
  }
  .post__meta {
    column-gap: 8px;
  }
  .meta__date {
    color: rgb(176, 179, 184);
    font-size: 0.8em;
  }
`);
