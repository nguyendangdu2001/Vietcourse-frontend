import { Avatar, Grid, TextField } from "@material-ui/core";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import styled from "styled-components";
import { useCreateComment } from "../../hooks";

interface Props {
  className?: string | undefined;
  postId: string;
  user: {
    _id: string;
    userPic: string;
    name: string;
  };
}

const CommentForm: FC<Props> = ({ className, postId, user }) => {
  const { createComment } = useCreateComment({ postId, user: { ...user, id: user._id } });

  const [text, setText] = useState("");
  const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createComment(text);
    setText("");
  };
  return (
    <Grid
      container
      className={className}
      alignItems="center"
      component="form"
      onSubmit={onSubmitHandler}
    >
      <Avatar src={user.userPic} />
      <Grid item xs>
        <TextField value={text} onChange={textChangeHandler} fullWidth />
      </Grid>
    </Grid>
  );
};

export default styled(CommentForm)`
  column-gap: 16px;
`;
