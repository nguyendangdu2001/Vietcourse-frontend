import { Button, Grid, TextField } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { useCreatePost } from "../../common/hooks";

interface Props {
  className?: string | undefined;
  user: { name: string; id?: string; userPic: string; _id: string } & {};
}

const CreatePost: FC<Props> = ({ className, user: { name, userPic, _id } }) => {
  const { body, onBodyChange, onSubmitHandler, onTitleChange, title } = useCreatePost({
    name,
    userPic,
    id: _id,
  });
  return (
    <Grid
      container
      direction="column"
      className={className}
      component="form"
      onSubmit={onSubmitHandler}
    >
      <TextField value={title} onChange={onTitleChange} name="title" fullWidth label="Title" />
      <TextField
        value={body}
        onChange={onBodyChange}
        name="body"
        fullWidth
        multiline
        rows={4}
        rowsMax={4}
      />
      <Grid container justify="flex-end">
        <Button size="large" type="submit">
          Đăng
        </Button>
      </Grid>
    </Grid>
  );
};

export default styled(CreatePost)``;
