import { Grid } from "@material-ui/core";

import React, { FC } from "react";
import styled from "styled-components";
import { Comment as IComment } from "../../../types/comment";
import Comment from "./Comment";

interface Props {
  className?: string | undefined;
  comments: IComment[];
}

const ListComment: FC<Props> = ({ className, comments = [] }) => {
  return (
    <Grid container className={className}>
      {comments && comments.map((comment) => <Comment key={comment._id} comment={comment} />)}
    </Grid>
  );
};

export default styled(ListComment)`
  row-gap: 8px;
`;
